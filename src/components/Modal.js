import React from "react";
import logout from "./home-components/header-components/logout";
import { StyledLink } from "./home-components/filters-components/DropDownList.styled";
import {
  StyledButtonsContainer,
  StyledSpanText,
  StyledModalDiv,
} from "../styles/Humburger.styled.js";

export default function Modal({
  isLoged,
  setIsLoged,
  isHamburgerOpened,
  setIsHamburgerOpened,
  setUserId,
}) {
  function logInButton() {
    return (
      <li>
        <StyledLink to="/login">
          <StyledSpanText>Zaloguj się</StyledSpanText>
        </StyledLink>
      </li>
    );
  }

  function logOutButton() {
    return (
      <li onClick={() => logout(setIsLoged, setUserId)}>
        <StyledLink to="/">
          <StyledSpanText>Wyloguj</StyledSpanText>
        </StyledLink>
      </li>
    );
  }

  function getButtons() {
    return (
      <>
        <li>
          <StyledLink to="/stworz-ogloszenie">
            <StyledSpanText>Stwórz ogłoszenie</StyledSpanText>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/profil/moje-ogloszenia">
            <StyledSpanText>Moje ogloszenia</StyledSpanText>
          </StyledLink>
        </li>
        {logOutButton()}
      </>
    );
  }

  return (
    <StyledModalDiv
      isHamburgerOpened={isHamburgerOpened}
      onClick={() => setIsHamburgerOpened(false)}
    >
      <StyledButtonsContainer onClick={(e) => e.stopPropagation()}>
        <ul onClick={() => setIsHamburgerOpened((prevData) => !prevData)}>
          {!isLoged ? logInButton() : getButtons()}
        </ul>
      </StyledButtonsContainer>
    </StyledModalDiv>
  );
}
