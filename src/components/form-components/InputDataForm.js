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
  StyledErrorMsgSpan,
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
  image,
  author,
  setAuthor,
  phoneNumber,
  setPhoneNumber,
  subject,
  setSubject,
  price,
  setPrice,
  scopesValues,
  setScopesValues,
  learningModeValues,
  setLearningModeValues,
  shortDescription,
  setShortDescription,
  isSingleCostValue,
  setIsSingleCostValue,
}) {
  const imageAvatar = require(`../../profileImages/avatar.png`);
  const navigate = new useNavigate();
  const [invalidForm, setInvalidForm] = React.useState(false);
  const errorMsg = "Należy poprawnie wypełnić wszystkie pola formularza.";
  const [focused, setFocused] = React.useState({
    author: false,
    phone: false,
    cost: false,
    subject: false,
    scopes: false,
    learningMode: false,
    shortDescription: false,
  });

  function handleFocus(inputName) {
    setFocused((prevData) => ({ ...prevData, [inputName]: true }));
    console.log(focused);
  }

  function handleClickNext(e) {
    e.preventDefault();

    if (
      (author.length >= 3 || handleFocus("author")) &&
      (author.length <= 16 || handleFocus("author")) &&
      (phoneNumber.length == 9 || handleFocus("phone")) &&
      (subject || handleFocus("subject")) &&
      (price[0] > 0 || handleFocus("cost")) &&
      (scopesValues.length > 0 || handleFocus("scopes")) &&
      (learningModeValues.length || handleFocus("learningMode")) > 0 &&
      (shortDescription.length || handleFocus("shortDescription")) > 0
    ) {
      if (price.length > 1) {
        if (price[1] > 0 || handleFocus("cost")) {
          navigate("lokalizacja");
        }
      } else {
        navigate("lokalizacja");
      }
    } else {
      setInvalidForm(true);
    }
  }

  function handleSubjectChange(value) {
    if (value.length < 1) {
      setFocused((prevData) => ({ ...prevData, subject: true }));
    } else {
      setFocused((prevData) => ({ ...prevData, subject: false }));
      setSubject(value);
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
            <StyledLabelForm focused={focused.author}>
              <label>Imie / Nazwa: </label>
              <input
                type="text"
                name="author"
                maxlength="30"
                pattern="^[A-Za-z0-9]{3,16}$"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                onBlur={() => handleFocus("author")}
                focused={focused.author.toString()}
                required={true}
              ></input>
              <span>Nazwa powinna składać się od 3 do 16 znaków.</span>
            </StyledLabelForm>
          </StyledLi>
          <StyledLi>
            <StyledLabelForm>
              <label>Nr telefonu: </label>
              <input
                type="text"
                name="phone"
                maxLength="9"
                pattern="^([0-9][0-9]*.{8,})$"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={() => handleFocus("phone")}
                focused={focused.phone.toString()}
                required={true}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
              <span>Numer powinien składać się z 9 cyfr.</span>
            </StyledLabelForm>
          </StyledLi>
          <StyledLi>
            <StyledLabelForm focused={focused.subject}>
              <label>Przedmiot: </label>
              <StyledSelectForm
                name="subject"
                id="subject"
                form="create-announcement-form"
                defaultValue={subject}
                onChange={(e) => handleSubjectChange(e.target.value)}
              >
                <option value={""}></option>
                {subjects.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </StyledSelectForm>
              <span>Wymagane podanie przedmiotu korepetycji.</span>
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
              handleFocus={(value) => handleFocus(value)}
              focused={focused}
            />
          </StyledLi>
          <Select
            valuesArray={scopesValues}
            setValuesArray={setScopesValues}
            focused={focused}
            setFocused={(value) => setFocused(value)}
            data={scopes}
            name="scopes"
            label="Zakres materiału: "
            errorMsg={"Należy wybrać przynajmniej jedną wartość z listy."}
          />

          <Select
            valuesArray={learningModeValues}
            setValuesArray={setLearningModeValues}
            focused={focused}
            setFocused={(value) => setFocused(value)}
            data={learningMode}
            name="learningMode"
            label="Tryb nauki: "
            errorMsg={"Należy wybrać przynajmniej jedną wartość z listy."}
          />
        </StyledUl>
        <StyledShortTextWrapper>
          <label>Krótki opis: </label>
          <textarea
            maxlength="200"
            name="shortDescription"
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            onBlur={() => handleFocus("shortDescription")}
            focused={focused.shortDescription.toString()}
            required={true}
          ></textarea>
          <span>Należy podać krótki opis.</span>
        </StyledShortTextWrapper>
        {invalidForm && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
        <StyledFormButton onClick={(e) => handleClickNext(e)}>
          Dalej
        </StyledFormButton>
      </StyledFormContainer>
    </StyledFormInputDataContainer>
  );
}
