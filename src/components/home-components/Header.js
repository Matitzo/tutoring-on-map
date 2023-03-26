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
} from "./Header.styled";
import logo from "../../images/logo.png";

export default function Header({ isLoged, setIsLoged, setUserId }) {
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
        {isLoged === "success" && (
          <div>
            <Link to="/stworz-ogloszenie">
              <StyledButton>Stwórz ogłoszenie</StyledButton>
            </Link>
            <Link to="/profil/moje-ogloszenia">
              <StyledButton>Moje ogloszenia</StyledButton>
            </Link>
          </div>
        )}

        <div className={styles["header__sign-in"]}>
          {isLoged === "success" ? (
            <StyledLogInOutButton
              type="submit"
              variant="danger"
              onClick={() => logout(setIsLoged, setUserId)}
            >
              Wyloguj sie
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
