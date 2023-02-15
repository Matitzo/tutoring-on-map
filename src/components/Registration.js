import React from "react";
import handleSubmitRegistration from "./registration-components/handleSubmitRegistration";
import { Link } from "react-router-dom";
import styles from "../styles/Registration.module.css";

export default function Registration() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [register, setRegister] = React.useState("");

  return (
    <form
      className={styles["registration"]}
      onSubmit={(e) => handleSubmitRegistration(setRegister, login, password)}
    >
      <label>Login: </label>
      <input
        type="login"
        name="login"
        value={login}
        placeholder="min. 5 znaków"
        onChange={(e) => setLogin(e.target.value)}
      ></input>
      <br></br>
      <label>Haslo: </label>
      <input
        type="password"
        name="password"
        value={password}
        placeholder="min. 6 znaków"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <Link to="/registration">
        <button
          variant="primary"
          type="submit"
          onClick={(e) =>
            handleSubmitRegistration(setRegister, login, password)
          }
        >
          Zarejestruj
        </button>
      </Link>
      {register === "success" && (
        <div>
          <p>Zarejestrowano pomyślnie</p> <Link to="/login">Zaloguj</Link>
        </div>
      )}
      {register === "failed" && <p>Wprowadz inne dane</p>}
    </form>
  );
}
