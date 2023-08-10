import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import subjects from "../../data/subjects";
import scopes from "../../data/scopes";
import learningMode from "../../data/learningMode";
import Select from "./Select";
import Cost from "./Cost";
import { StyledImage, StyledImageWrapper } from "../../styles/Image.styled";
import { StyledFormButton } from "../../styles/Button.styled";
import {
  StyledInputFile,
  StyledLabelForm,
  StyledSelectForm,
  StyledShortTextWrapper,
  StyledErrorMsg,
  StyledNumberInput,
  StyledRadioInputContainer,
  StyledRadioInput,
} from "../../styles/Input.styled";
import { StyledBackArrowForm } from "../../styles/BackArrow.styled";
import {
  StyledFormHeader,
  StyledFormContainer,
  StyledFormProgressContainer,
  StyledFormInputDataContainer,
  StyledLi,
  StyledUl,
} from "../../styles/CreateAnnouncement.styled";

export default function InpuDataForm({
  handleImage,
  inputValues,
  setInputValues,
}) {
  const imageAvatar = require(`../../profileImages/avatar.png`);
  const navigate = new useNavigate();
  const [invalidForm, setInvalidForm] = React.useState(false);
  const errorMsg = "Należy wypełnić wszystkie pola formularza.";

  function handleClickNext(e) {
    e.preventDefault();
    if (
      inputValues.author &&
      inputValues.phoneNumber &&
      inputValues.subject &&
      inputValues.price &&
      inputValues.scopesValues.length > 0 &&
      inputValues.learningModeValues.length > 0 &&
      inputValues.shortDescription
    ) {
      navigate("lokalizacja");
    } else {
      setInvalidForm(true);
    }
  }

  return (
    <StyledFormInputDataContainer>
      <StyledFormContainer>
        <StyledFormHeader>Podaj dane do ogłoszenia</StyledFormHeader>
        <StyledUl>
          <StyledLi>
            <div>
              <StyledImage
                width="175px"
                border="10px"
                src={image ? image : imageAvatar}
                alt="Obraz ogloszenia"
              ></StyledImage>
            </div>
            <StyledInputFile
              type="file"
              name="myImage"
              accept="image/*"
              onChange={(e) => handleImage(e.target.files)}
            ></StyledInputFile>
          </StyledLi>
          <StyledLi>
            <StyledLabelForm>
              <label>Imie / Nazwa: </label>
              <input
                required
                type="text"
                name="author"
                maxlength="30"
                pattern="^[A-Za-z0-9]{3,16}$"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <span>
                Nazwa powinna zawierać min. 3 znaki, bez korzystania ze znaków
                specjalnych.
              </span>
            </StyledLabelForm>
          </StyledLi>
          <StyledLi>
            <StyledLabelForm>
              <label>Nr telefonu: </label>
              <StyledNumberInput
                required
                type="text"
                name="phone"
                maxLength="9"
                pattern="^(0|[1-9][0-9]*)$"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></StyledNumberInput>
              <span>Numer telefonu powinien zawierać 9 cyfr.</span>
            </StyledLabelForm>
          </StyledLi>
          <StyledLi>
            <StyledLabelForm>
              <label>Przedmiot: </label>
              <StyledSelectForm
                name="subject"
                id="subject"
                form="create-announcement-form"
                defaultValue={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value={""}></option>
                {subjects.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </StyledSelectForm>
              <span>Ta rubryka nie może pozostać pusta.</span>
            </StyledLabelForm>
          </StyledLi>
          <StyledLi>
            <label>Cena: </label>
            <StyledRadioInputContainer>
              <StyledRadioInput
                type="radio"
                id="single"
                name="type"
                value="single"
                onClick={() => {
                  setIsSingleCostValue(true);
                  setPrice([0]);
                }}
                checked={isSingleCostValue && true}
              />
              <label for="single">Pojedyncza wartość</label>
              <div>
                <StyledRadioInput
                  type="radio"
                  id="range"
                  name="type"
                  value="range"
                  onClick={() => {
                    setIsSingleCostValue(false);
                    setPrice([0, 0]);
                  }}
                  checked={!isSingleCostValue && true}
                />
                <label for="range">Przedział</label>
              </div>
            </StyledRadioInputContainer>
            <Cost
              isSingleCostValue={isSingleCostValue}
              price={price}
              setPrice={(value) => setPrice(value)}
            />
            <span>Należy podać cenę.</span>
          </StyledLi>
          <SelectNew
            valuesArray={inputValues.scopesValues}
            setValuesArray={setScopesValues}
            data={scopes}
            name="scopes"
            label="Zakres materiału: "
          />
          <span>Należy wybrać przynajmniej jedną opcje.</span>

          <SelectNew
            valuesArray={inputValues.learningModeValues}
            setValuesArray={setLearningModeValues}
            data={learningMode}
            name="learningMode"
            label="Tryb nauki: "
          />
          <span>Należy wybrać przynajmniej jedną opcje.</span>
        </StyledUl>
        <StyledShortTextWrapper>
          <label>Krótki opis: </label>
          <textarea
            maxlength="200"
            style={{ marginBottom: "2em" }}
            name="shortDescription"
            id="shortDescription"
            value={inputValues.shortDescription}
            onChange={(e) =>
              setInputValues((prevData) => ({
                ...prevData,
                shortDescription: e.target.value,
              }))
            }
          ></textarea>
          <span>Należy umieścić krótki opis.</span>
        </StyledShortTextWrapper>
        {invalidForm && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
        <StyledFormButton onClick={(e) => handleClickNext(e)}>
          Dalej
        </StyledFormButton>
      </StyledFormContainer>
    </StyledFormInputDataContainer>
  );
}
