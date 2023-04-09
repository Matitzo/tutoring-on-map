import React from "react";
import handleSubmitLogin from "./handleSubmitLogin";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { StyledLink } from "../../styles/Link.styled";
import {
  StyledContentContainer,
  StyledLoginBtn,
  StyledLoginInput,
  StyledLoginForm,
  StyledErrorMsg,
  StyledHeading,
  StyledLinkWrapper,
} from "../../styles/Login.styled";

export default function LoginForm({ isLoged, setIsLoged, setUserId }) {
  console.log("wyrenderowalo Login form");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState("");
  const navigate = useNavigate();
  return (
    <StyledLoginForm
      onSubmit={(e) =>
        handleSubmitLogin(setIsLoged, login, password, setUserId)
      }
    >
      <StyledContentContainer>
        <StyledHeading>Dołącz do nas !</StyledHeading>
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
        <StyledLink to="/login">
          <StyledLoginBtn
            variant="primary"
            type="submit"
            onClick={(e) =>
              handleSubmitLogin(setIsLoged, login, password, setUserId)
            }
          >
            Zaloguj
          </StyledLoginBtn>
        </StyledLink>
        {/* te odp w zaleznosc czy byl sukces czy nie moznaby zrobic lepiej dzialajac na resie z backendu np 
zeby res cos zwracal i na pdostawie tego by nawigowalo/wyswietlalo tekst */}
        {isLoged === "success" && navigate("/")}
        {isLoged === "failed" && (
          <StyledErrorMsg>Wprowadzono zle dane.</StyledErrorMsg>
        )}
        <label>Nie masz konta?</label>
        <StyledLinkWrapper>
          <Link to={"/login/rejestracja"}>Zarejestruj</Link>
        </StyledLinkWrapper>
      </StyledContentContainer>
    </StyledLoginForm>
  );
}
