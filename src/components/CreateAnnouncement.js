import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
import subjects from "../data/subjects";
import scopes from "../data/scopes";
import learningMode from "../data/learningMode";
import Select from "./form-components/Select";
import handleSubmitAnnouncement from "./form-components/handleSubmitAnnouncement";
import FormMap from "./form-components/FormMap";
import { useLocation } from "react-router-dom";
import { StyledImage, StyledImageWrapper } from "../styles/Image.styled";
import styles from "../styles/CreateAnnouncement.module.css";
const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const location = new useLocation();
  const userId = prop;
  const imageAvatar = require(`../profileImages/avatar.png`);
  const announcementId = checkIfEdition() ? location.state.announcementId : "";
  // zamiast tych wszystkich statow mozna zrobic jeden obiekt ktory bd przechowywal wszystko dzieki czemu bd potem tylko
  // jeden warunek a nie dla kazdej wartosci osobny
  const [author, setAuthor] = React.useState(
    checkIfEdition() ? location.state.author : ""
  );
  const [image, setImage] = React.useState(
    checkIfEdition() ? location.state.image : imageAvatar
  );
  const [imageName, setImageName] = React.useState(
    checkIfEdition() ? location.state.imageName : "avatar"
  );
  console.log(imageName);
  const [phoneNumber, setPhoneNumber] = React.useState(
    checkIfEdition() ? location.state.phoneNumber : ""
  );
  const [subject, setSubject] = React.useState(
    checkIfEdition() ? location.state.subject : ""
  );
  const [price, setPrice] = React.useState(
    checkIfEdition() ? location.state.price : ""
  );
  const [learningModeValues, setLearningModeValues] = React.useState(
    checkIfEdition() ? location.state.learningModeValues : []
  );
  const [scopesValues, setScopesValues] = React.useState(
    checkIfEdition() ? location.state.scopesValues : []
  );
  const [locationArray, setLocationArray] = React.useState(
    checkIfEdition() ? location.state.locationArray : []
  );
  // potem zmienic description state lub wyrzucic
  const [description, setDescription] = React.useState(
    checkIfEdition() ? location.state.description : ""
  );

  console.log("wyrenderowalo create announcement");

  function checkIfEdition() {
    return location.pathname === "/edytuj-ogloszenie";
  }

  // wrzucic ta funkcje do osobnego komponentu
  function handleClose(value, setValuesArray) {
    setValuesArray((prevData) => {
      return prevData.filter((element) => value !== element);
    });
  }

  function handleImage(image) {
    if (image.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        setImage(e.target.result);
      };
      fileReader.readAsDataURL(image[0]);
      const random = Math.random() * 100000000000000000;
      setImageName(random + image[0].name);
    } else {
      setImage(imageAvatar);
      setImageName("avatar");
    }
  }

  const token = cookies.get("TOKEN");
  Axios.get(
    `http://localhost:3000/${
      checkIfEdition() ? "edytuj-ogloszenie" : "stworz-ogloszenie"
    }`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => {})
    .catch((error) => {
      error = new Error();
    });

  // prop to userID
  return (
    <div className={styles["create-announcement-div"]}>
      <h1>Create Announcement</h1>

      <form
        className={styles["announcement-form"]}
        id="create-announcement-form"
        onSubmit={(e) =>
          handleSubmitAnnouncement(
            e,
            author,
            userId,
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
        <ul>
          <li>
            <label>Imie i nazwisko / Nazwa: </label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </li>
          <li>
            <StyledImageWrapper>
              <StyledImage
                width="175px"
                border="10px"
                src={image}
                alt="Obraz ogloszenia"
              ></StyledImage>
            </StyledImageWrapper>
            <input
              type="file"
              name="myImage"
              accept="image/*"
              onChange={(e) => handleImage(e.target.files)}
            ></input>
          </li>
          <li>
            <label>Nr telefonu: </label>
            <input
              type="text"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </li>
          <li>
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
          </li>
          <li>
            <label>Cena: </label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>
          <div className="announcement-form-location">
            Lokalizacja:
            {locationArray.length > 0 &&
              locationArray.map((element) => (
                <div>
                  <span>{element.address}</span>{" "}
                  <span
                    onClick={() => {
                      handleClose(element, setLocationArray);
                    }}
                  >
                    X
                  </span>
                </div>
              ))}
            <div>Pokaż na mapie</div>
            <div
              style={{
                border: "1px solid red",
                height: "300px",
              }}
            >
              <FormMap setLocationArray={setLocationArray} />
            </div>
          </div>
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

          {/* wyrzucic dostepnosc z bazy danych
          <li>
            <label>Dostępność: </label>
            <input></input>
          </li> */}
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
        <button
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
        </button>
      </form>
    </div>
  );
}
