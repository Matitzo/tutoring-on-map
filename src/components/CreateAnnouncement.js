import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
import voivodeships from "../data/voivodeships";
import subjects from "../data/subjects";
import scopes from "../data/scopes";
import learningMode from "../data/learningMode";
import Select from "./form-components/Select";
import styles from "../styles/CreateAnnouncement.module.css";
import FormMap from "./form-components/FormMap";
const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const [learningModeValues, setLearningModeValues] = React.useState([]);
  const [scopesValues, setScopesValues] = React.useState([]);
  const [locationArray, setLocationArray] = React.useState([]);

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
      >
        <ul>
          <li>
            <label>Imie i nazwisko / Nazwa: </label>
            <input type="text" name="author"></input>
          </li>
          <li>
            <label>Nr telefonu: </label>
            <input type="text" name="phone"></input>
          </li>
          <li>
            <label>Przedmiot: </label>
            <select name="subject" id="subject" form="create-announcement-form">
              {subjects.map((subject) => (
                <option value={subject}>{subject}</option>
              ))}
            </select>
          </li>
          <li>
            <label>Cena: </label>
            <input type="text" name="cost"></input>
          </li>
          <div className="announcement-form-location">
            Lokalizacja:
            <div>Pokaż na mapie</div>
            <div
              style={{
                border: "1px solid red",
                height: "300px",
              }}
            >
              <FormMap />
            </div>
            {/* <li>
              <label>Ulica i nr domu: </label>
              <input type="text" name="street"></input>
            </li>
            <li>
              <label>Miasto: </label>
              <input type="text" name="city"></input>
            </li>
            <li>
              <label>Województwo: </label>
              <select
                name="voivodship"
                id="voivodship"
                form="create-announcement-form"
              >
                {voivodeships.map((voivodeship) => (
                  <option value={voivodeship}>{voivodeship}</option>
                ))}
              </select>
            </li> */}
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

          <li>
            <label>Dostępność: </label>
            {/* rozwijana lista dla dnia a potem dla godziny i guzik by dodac pozaycje */}
            <input></input>
          </li>
        </ul>
        <div>
          <label>Opis: </label>
          <textarea></textarea>
        </div>
        <button>Stwórz</button>
      </form>
    </div>
  );
}
