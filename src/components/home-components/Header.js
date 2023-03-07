import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import logout from "./header-components/logout";
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledButton,
  StyledButtonWrapper,
  StyledLogInOutButton,
} from "./Header.styled";

export default function Header({ isLoged, setIsLoged, setUserId }) {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <Link to="/">
          <h2>Korepetycje</h2>
        </Link>
        <button>Dark mode</button>
      </StyledLogoWrapper>
      <StyledButtonWrapper>
        {isLoged === "success" && (
          <div>
            <Link to="/stworz-ogloszenie">
              <StyledButton>Stwórz ogłoszenie</StyledButton>
            </Link>
            <Link to="/moje-ogloszenia">
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
