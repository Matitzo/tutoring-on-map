import React from "react";
import handleSubmitLogin from "./login-components/handleSubmitLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
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
} from "../styles/Login.styled";

export default function Login({ isLoged, setIsLoged, setUserId }) {
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState("");
  const navigate = useNavigate();

  return (
    <StyledLoginFormWrapper>
      <StyledLoginForm
        onSubmit={(e) =>
          handleSubmitLogin(setIsLoged, login, password, setUserId)
        }
      >
        <StyledLogoContainer>
          <Link to="/">
            <StyledLogingImg src={logo} alt="logo image"></StyledLogingImg>
          </Link>
        </StyledLogoContainer>
        <StyledContentContainer>
          <StyledLoginInput
            required
            placeholder="Login"
            type="login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></StyledLoginInput>
          <StyledLoginInput
            required
            placeholder="Hasło"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></StyledLoginInput>
          <Link to="/login">
            <StyledLoginBtn
              variant="primary"
              type="submit"
              onClick={(e) =>
                handleSubmitLogin(setIsLoged, login, password, setUserId)
              }
            >
              Zaloguj
            </StyledLoginBtn>
          </Link>
          {/* te odp w zaleznosc czy byl sukces czy nie moznaby zrobic lepiej dzialajac na resie z backendu np 
      zeby res cos zwracal i na pdostawie tego by nawigowalo/wyswietlalo tekst */}
          {isLoged === "success" && navigate("/")}
          {isLoged === "failed" && (
            <StyledErrorMsg>Wprowadzono zle dane.</StyledErrorMsg>
          )}
          <label>Nie masz konta?</label>
          <Link to={"/registration"}>Zarejestruj</Link>
        </StyledContentContainer>
      </StyledLoginForm>
    </StyledLoginFormWrapper>
  );
}
