import { Link } from "react-router-dom";
import subjects from "../../data/subjects";
import scopes from "../../data/scopes";
import learningMode from "../../data/learningMode";
import Select from "./Select";
import { StyledImage, StyledImageWrapper } from "../../styles/Image.styled";
import { StyledButton } from "../../styles/Button.styled";
import {
  StyledInput,
  StyledInputFile,
  StyledLabelForm,
  StyledSelectForm,
} from "../../styles/Input.styled";

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
  description,
  setDescription,
}) {
  return (
    <>
      <h2>Temat: Tworzenie ogłoszenia.</h2>
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
              <input
                required
                type="text"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <span>Nr telefonu: </span>
            </StyledLabelForm>
          </div>
        </li>
        <li>
          <div>
            <label>Przedmiot: </label>
            <select
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
            </select>
          </div>
        </li>
        <li>
          <div>
            <StyledLabelForm>
              <input
                required
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <span>Cena: </span>
            </StyledLabelForm>
          </div>
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
      <div>
        <label>Opis: </label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      {/* <StyledButton
        variant="primary"
        type="submit"
        onClick={(e) =>
          handleSubmitAnnouncement(
            checkIfEdition,
            e,
            announcementId,
            author,
            userId,
            imageName,
            image,
            phoneNumber,
            subject,
            price,
            learningModeValues,
            scopesValues,
            locationArray,
            description
          )
        }
      >
        Zapisz
      </StyledButton> */}
      <Link to="/stworz-ogloszenie/lokalizacja">
        <StyledButton>Dalej</StyledButton>
      </Link>
    </>
  );
}
