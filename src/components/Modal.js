import React from "react";
import {
  PersonLinesFill,
  FileEarmarkPlus,
  BoxArrowRight,
  BoxArrowInLeft,
} from "react-bootstrap-icons";
import logout from "./home-components/header-components/logout";
import { StyledLink } from "./home-components/filters-components/DropDownList.styled";
import {
  StyledButtonsContainer,
  StyledSpanText,
  StyledModalDiv,
  StyledModalHeader,
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
          <BoxArrowInLeft />
          <StyledSpanText>Zaloguj się</StyledSpanText>
        </StyledLink>
      </li>
    );
  }

  function logOutButton() {
    return (
      <li onClick={() => logout(setIsLoged, setUserId)}>
        <StyledLink to="/">
          <BoxArrowRight color="#5f656b" />
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
            <FileEarmarkPlus color="#5f656b" />
            <StyledSpanText>Stwórz ogłoszenie</StyledSpanText>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/profil/moje-ogloszenia">
            <PersonLinesFill color="#5f656b" />
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
        <StyledModalHeader>Menu</StyledModalHeader>
        <ul onClick={() => setIsHamburgerOpened((prevData) => !prevData)}>
          {!isLoged ? logInButton() : getButtons()}
        </ul>
      </StyledButtonsContainer>
    </StyledModalDiv>
  );
}
