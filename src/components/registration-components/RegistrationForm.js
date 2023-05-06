import React from "react";
import handleSubmitRegistration from "./handleSubmitRegistration";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = new useNavigate();
  const [email, setEmail] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState("");
  const [register, setRegister] = React.useState("");
  return (
    <StyledLoginForm
      id="register-form"
      onSubmit={(e) =>
        handleSubmitRegistration(
          e,
          setRegister,
          login,
          password,
          passwordValidation,
          email
        )
      }
    >
      <StyledContentContainer>
        <StyledHeading>Swtórz swoje konto !</StyledHeading>
        <StyledLoginInput
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></StyledLoginInput>
        <StyledLoginInput
          type="login"
          name="login"
          value={login}
          placeholder="Login: min. 5 znaków"
          onChange={(e) => setLogin(e.target.value)}
          required
        ></StyledLoginInput>
        <StyledLoginInput
          type="password"
          name="password"
          value={password}
          placeholder="Hasło: min. 6 znaków"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></StyledLoginInput>
        <StyledLoginInput
          type="password"
          name="passwordValidation"
          value={passwordValidation}
          placeholder="Powtórz hasło"
          onChange={(e) => setPasswordValidation(e.target.value)}
          required
        ></StyledLoginInput>
        <StyledLoginBtn variant="primary" type="submit">
          Zarejestruj
        </StyledLoginBtn>
        {register === "success" && (
          <div>
            <StyledSuccessMsg>Zarejestrowano pomyślnie.</StyledSuccessMsg>{" "}
            {setTimeout(() => navigate("/login"), 300)}
          </div>
        )}
        {register === "invalid_login_lenght" && (
          <StyledErrorMsg>Nie poprawna długość loginu.</StyledErrorMsg>
        )}
        {register === "invalid_password_lenght" && (
          <StyledErrorMsg>Nie poprawna długość hasła.</StyledErrorMsg>
        )}
        {register === "invalid_password_validation" && (
          <StyledErrorMsg>Hasła się nie zgadzają.</StyledErrorMsg>
        )}
        {register === "failed" && (
          <StyledErrorMsg>
            Coś poszło nie tak. Wprowadź inne dane.
          </StyledErrorMsg>
        )}
        <label>Masz już konto?</label>
        <StyledLinkWrapper>
          <Link to={"/login"}>Zaloguj</Link>
        </StyledLinkWrapper>
      </StyledContentContainer>
    </StyledLoginForm>
  );
}
