import React from "react";
import handleSubmitRegistration from "./registration-components/handleSubmitRegistration";
import { Link } from "react-router-dom";
import styles from "../styles/Registration.module.css";
import logo from "../images/logo2.png";
import {
  StyledLogingImg,
  StyledLogoContainer,
  StyledContentContainer,
  StyledLoginBtn,
  StyledLoginInput,
  StyledLoginForm,
  StyledLoginFormWrapper,
  StyledErrorMsg,
  StyledSuccessMsg,
} from "../styles/Login.styled";

export default function Registration() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [register, setRegister] = React.useState("");

  return (
    <StyledLoginFormWrapper>
      <StyledLoginForm
        className={styles["registration"]}
        onSubmit={(e) => handleSubmitRegistration(setRegister, login, password)}
      >
        <StyledLogoContainer>
          <Link to="/">
            <StyledLogingImg src={logo} alt="logo image"></StyledLogingImg>
          </Link>
        </StyledLogoContainer>
        <StyledContentContainer>
          <StyledLoginInput
            type="login"
            name="login"
            value={login}
            placeholder="Login: min. 5 znaków"
            onChange={(e) => setLogin(e.target.value)}
          ></StyledLoginInput>
          <StyledLoginInput
            type="password"
            name="password"
            value={password}
            placeholder="Hasło: min. 6 znaków"
            onChange={(e) => setPassword(e.target.value)}
          ></StyledLoginInput>
          <Link to="/registration">
            <StyledLoginBtn
              variant="primary"
              type="submit"
              onClick={(e) =>
                handleSubmitRegistration(setRegister, login, password)
              }
            >
              Zarejestruj
            </StyledLoginBtn>
          </Link>
          {register === "success" && (
            <div>
              <StyledSuccessMsg>Zarejestrowano pomyślnie</StyledSuccessMsg>{" "}
            </div>
          )}
          {register === "failed" && (
            <StyledErrorMsg>Wprowadz inne dane.</StyledErrorMsg>
          )}
          <label>Masz już konto?</label>
          <Link to={"/login"}>Zaloguj</Link>
        </StyledContentContainer>
      </StyledLoginForm>
    </StyledLoginFormWrapper>
  );
}
