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
import { StyledFormHeader } from "../../styles/CreateAnnouncement.styled";

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
  const navigate = new useNavigate();
  const [invalidForm, setInvalidForm] = React.useState(false);
  const errorMsg = "Należy wypełnić wszystkie pola formularza.";

  function handleClickNext(e) {
    e.preventDefault();
    if (
      author &&
      phoneNumber &&
      subject &&
      price &&
      scopesValues.length > 0 &&
      learningModeValues.length > 0 &&
      shortDescription
    ) {
      navigate("lokalizacja");
    } else {
      setInvalidForm(true);
    }
  }

  return (
    <>
      <Link to="/">
        <StyledBackArrowForm>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </StyledBackArrowForm>
      </Link>
      <StyledFormHeader>Wypełnij formularz ogłoszenia</StyledFormHeader>
      <ul>
        <li>
          <StyledImageWrapper>
            <StyledImage
              width="175px"
              border="10px"
              src={image}
              alt="Obraz ogloszenia"
            ></StyledImage>
          </StyledImageWrapper>
          <StyledInputFile
            type="file"
            name="myImage"
            accept="image/*"
            onChange={(e) => handleImage(e.target.files)}
          ></StyledInputFile>
        </li>
        <li>
          <div>
            <StyledLabelForm>
              <input
                required
                type="text"
                name="author"
                maxlength="30"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <span>Imie / Nazwa: </span>{" "}
            </StyledLabelForm>
          </div>
        </li>
        <li>
          <div>
            <StyledLabelForm>
              <StyledNumberInput
                required
                type="text"
                name="phone"
                maxLength="9"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></StyledNumberInput>
              <span>Nr telefonu: </span>
            </StyledLabelForm>
          </div>
        </li>
        <li>
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
        </li>
        <li>
          <StyledRadioInputContainer>
            <div>
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
            </div>
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
        </li>
        <Select
          valuesArray={scopesValues}
          setValuesArray={setScopesValues}
          data={scopes}
          name="scopes"
          label="Zakres materiału: "
        />

        <Select
          valuesArray={learningModeValues}
          setValuesArray={setLearningModeValues}
          data={learningMode}
          name="learningMode"
          label="Tryb nauki: "
        />
      </ul>
      <StyledShortTextWrapper>
        <label>Streszczenie: </label>
        <textarea
          maxlength="200"
          style={{ marginBottom: "2em" }}
          name="shortDescription"
          id="shortDescription"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        ></textarea>
      </StyledShortTextWrapper>
      {invalidForm && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
      <StyledFormButton onClick={(e) => handleClickNext(e)}>
        Dalej
      </StyledFormButton>
    </>
  );
}
