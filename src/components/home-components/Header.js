import React from "react";
import { Link } from "react-router-dom";
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
  StyledLogoLinkWrapper,
} from "./Header.styled";
import logo from "../../images/logo-icon.png";
import Buttons from "./header-components/Buttons";
import HamburgerButtons from "./header-components/HamburgerButtons";
import LogInButton from "./header-components/LogInButton";

export default function Header({
  isLoged,
  setIsLoged,
  setUserId,
  isHamburgerOpened,
  setIsHamburgerOpened,
}) {
  const [windowWidth, setwindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setwindowWidth(window.innerWidth);
      window.innerWidth > 800 && setIsHamburgerOpened(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogoLinkWrapper to="/">
          <StyledLogoImg src={logo} alt="logo image"></StyledLogoImg>
          <h4>SmartEdukacja.pl</h4>
        </StyledLogoLinkWrapper>
      </StyledLogoWrapper>
      <StyledButtonWrapper>
        {windowWidth > 800 ? (
          isLoged && <Buttons isLoged={isLoged} />
        ) : (
          <HamburgerButtons
            isHamburgerOpened={isHamburgerOpened}
            setIsHamburgerOpened={(value) => setIsHamburgerOpened(value)}
          />
        )}
        {windowWidth > 800 && (
          <LogInButton
            isLoged={isLoged}
            setIsLoged={(value) => setIsLoged(value)}
            setUserId={(value) => setUserId(value)}
          />
        )}
      </StyledButtonWrapper>
    </StyledHeader>
  );
}
