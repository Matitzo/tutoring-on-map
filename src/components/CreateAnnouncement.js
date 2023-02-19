import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
import subjects from "../data/subjects";
import scopes from "../data/scopes";
import learningMode from "../data/learningMode";
import Select from "./form-components/Select";
import handleSubmitAnnouncement from "./form-components/handleSubmitAnnouncement";
import styles from "../styles/CreateAnnouncement.module.css";
import FormMap from "./form-components/FormMap";
const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const userId = prop;
  const [author, setAuthor] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [learningModeValues, setLearningModeValues] = React.useState([]);
  const [scopesValues, setScopesValues] = React.useState([]);
  const [locationArray, setLocationArray] = React.useState([]);
  // potem zmienic description state lub wyrzucic
  const [description, setDescription] = React.useState("");

  console.log("wyrenderowalo create announcement");

  // wrzucic ta funkcje do osobnego komponentu
  function handleClose(value, setValuesArray) {
    setValuesArray((prevData) => {
      return prevData.filter((element) => value !== element);
    });
  }

  const token = cookies.get("TOKEN");
  Axios.get(`http://localhost:3000/stworz-ogloszenie`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
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
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value={""}></option>
              {subjects.map((subject) => (
                <option value={subject}>{subject}</option>
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
          Stwórz
        </button>
      </form>
    </div>
  );
}
