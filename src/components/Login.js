import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledLink } from "../styles/Link.styled";
import logo from "../images/logo2.png";
import {
  StyledLogingImg,
  StyledLogoContainer,
  StyledLoginFormWrapper,
  StyledLoginContainer,
  StyledPhotoDiv,
  StyledLoginCard,
} from "../styles/Login.styled";
import LoginForm from "./login-components/LoginForm";
import RegistrationForm from "./registration-components/RegistrationForm";

export default function Login({ isLoged, setIsLoged, setUserId }) {
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState("");

  return (
    <StyledLoginFormWrapper>
      <StyledLoginCard>
        <StyledLogoContainer>
          <StyledLink to="/">
            <StyledLogingImg src={logo} alt="logo image"></StyledLogingImg>
          </StyledLink>
        </StyledLogoContainer>
        <StyledLoginContainer>
          <Routes>
            <Route
              path={`/`}
              element={
                <LoginForm
                  password={password}
                  setPassword={(value) => setPassword(value)}
                  login={login}
                  setLogin={(value) => setLogin(value)}
                  isLoged={isLoged}
                  setIsLoged={(value) => setIsLoged(value)}
                  setUserId={(value) => setUserId(value)}
                />
              }
            ></Route>
            <Route
              path={`/*`}
              element={
                <RegistrationForm
                  password={password}
                  setPassword={(value) => setPassword(value)}
                  login={login}
                  setLogin={(value) => setLogin(value)}
                />
              }
            ></Route>
          </Routes>
          <StyledPhotoDiv></StyledPhotoDiv>
        </StyledLoginContainer>
      </StyledLoginCard>
    </StyledLoginFormWrapper>
  );
}
