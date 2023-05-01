import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import styles from "../../styles/Header.module.css";
import logout from "./header-components/logout";
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledButton,
  StyledButtonWrapper,
  StyledLogInOutButton,
  StyledLogoImg,
  StyledTogglerDiv,
  StyledLogedButtonsWrapper,
} from "./Header.styled";
import logo from "../../images/logo.png";
import Buttons from "./header-components/Buttons";
import HamburgerButtons from "./header-components/HamburgerButtons";

export default function Header({ isLoged, setIsLoged, setUserId }) {
  //const windowWidth = useRef(window.innerWidth);
  const [windowWidth, setwindowWidth] = React.useState(window.innerWidth);
  console.log(windowWidth);
  React.useEffect(() => {
    const handleWindowResize = () => {
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <Link to="/">
          <StyledLogoImg src={logo} alt="logo image"></StyledLogoImg>
        </Link>
        <StyledTogglerDiv>
          <input type="checkbox" id="switch" />
          <label for="switch">Toggle</label>
        </StyledTogglerDiv>
      </StyledLogoWrapper>
      <StyledButtonWrapper>
        {isLoged === "success" &&
          (windowWidth > 800 ? <Buttons /> : <HamburgerButtons />)}

        <div className={styles["header__sign-in"]}>
          {isLoged === "success" ? (
            <StyledLogInOutButton
              type="submit"
              variant="danger"
              onClick={() => logout(setIsLoged, setUserId)}
            >
              Wyloguj
            </StyledLogInOutButton>
          ) : (
            <Link to="/login">
              <StyledLogInOutButton>Zaloguj się</StyledLogInOutButton>
            </Link>
          )}
        </div>
      </StyledButtonWrapper>
    </StyledHeader>
  );
}
