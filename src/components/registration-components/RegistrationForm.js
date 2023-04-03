import React from "react";
import handleSubmitRegistration from "./handleSubmitRegistration";
import { Link } from "react-router-dom";
import {
  StyledLoginBtn,
  StyledLoginInput,
  StyledErrorMsg,
  StyledLoginForm,
  StyledContentContainer,
  StyledSuccessMsg,
  StyledLinkWrapper,
  StyledHeading,
} from "../../styles/Login.styled";

export default function RegistrationForm() {
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [register, setRegister] = React.useState("");
  return (
    <StyledLoginForm>
      <StyledContentContainer>
        <StyledHeading>Swtórz swoje konto !</StyledHeading>
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
        <StyledLoginBtn
          variant="primary"
          type="submit"
          onClick={(e) =>
            handleSubmitRegistration(e, setRegister, login, password)
          }
        >
          Zarejestruj
        </StyledLoginBtn>
        {register === "success" && (
          <div>
            <StyledSuccessMsg>Zarejestrowano pomyślnie</StyledSuccessMsg>{" "}
          </div>
        )}
        {register === "failed" && (
          <StyledErrorMsg>Wprowadz inne dane.</StyledErrorMsg>
        )}
        <label>Masz już konto?</label>
        <StyledLinkWrapper>
          <Link to={"/login"}>Zaloguj</Link>
        </StyledLinkWrapper>
      </StyledContentContainer>
    </StyledLoginForm>
  );
}
