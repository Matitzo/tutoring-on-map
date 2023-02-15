import React from "react";
import handleSubmitLogin from "./login-components/handleSubmitLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import styles from "../styles/Login.module.css";

export default function Login({ isLoged, setIsLoged }) {
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState("");
  const navigate = useNavigate();

  return (
    <form
      className={styles["login"]}
      onSubmit={(e) => handleSubmitLogin(setIsLoged, login, password)}
    >
      <label>Login: </label>
      <input
        type="login"
        name="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      ></input>
      <br></br>
      <label>Haslo: </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <Link to="/login">
        <button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmitLogin(setIsLoged, login, password)}
        >
          Zaloguj
        </button>
      </Link>
      {/* te odp w zaleznosc czy byl sukces czy nie moznaby zrobic lepiej dzialajac na resie z backendu np 
      zeby res cos zwracal i na pdostawie tego by nawigowalo/wyswietlalo tekst */}
      {isLoged === "success" && navigate("/")}
      {isLoged === "failed" && <p>Wprowadzono zle dane.</p>}
      <br></br>
      <label>Nie masz konta?</label>
      <br></br>
      <Link to={"/registration"}>
        <button>Zarejestruj</button>
      </Link>
    </form>
  );
}
