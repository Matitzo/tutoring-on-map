import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledLink } from "../styles/Link.styled";
import logo from "../images/logo2.png";
import {
  StyledLogingImg,
  StyledSecondaryHeading,
  StyledLogoContainer,
  StyledLoginFormWrapper,
  StyledLoginContainer,
  StyledPhotoDiv,
  StyledLoginCard,
  StyledLinkWrapper,
} from "../styles/Login.styled";
import LoginForm from "./login-components/LoginForm";
import RegistrationForm from "./registration-components/RegistrationForm";

export default function Login({ isLoged, setIsLoged, setUserId }) {
  return (
    <StyledLoginFormWrapper>
      <StyledLoginCard>
        <StyledLogoContainer>
          <StyledLinkWrapper>
            <StyledLink to="/">
              <StyledSecondaryHeading>SmartEdukacja.pl</StyledSecondaryHeading>
              {/* <StyledLogingImg src={logo} alt="logo image"></StyledLogingImg> */}
            </StyledLink>
          </StyledLinkWrapper>
        </StyledLogoContainer>
        <StyledLoginContainer>
          <Routes>
            <Route
              path={`/`}
              element={
                <LoginForm
                  isLoged={isLoged}
                  setIsLoged={(value) => setIsLoged(value)}
                  setUserId={(value) => setUserId(value)}
                />
              }
            ></Route>
            <Route path={`/*`} element={<RegistrationForm />}></Route>
          </Routes>
          <StyledPhotoDiv></StyledPhotoDiv>
        </StyledLoginContainer>
      </StyledLoginCard>
    </StyledLoginFormWrapper>
  );
}
