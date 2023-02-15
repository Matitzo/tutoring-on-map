import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import logout from "./header-components/logout";

export default function Header({ isLoged, setIsLoged }) {
  return (
    <header>
      <div className={styles["header__logo"]}>
        <Link to="/">
          <h2>Korepetycje</h2>
        </Link>
      </div>
      <div className={styles["header__dark-mode"]}>
        <button>Dark mode</button>
      </div>
      {isLoged === "success" && (
        <div className={styles["header__add-offer"]}>
          <Link to="/stworz-ogloszenie">
            <button>Stwórz ogłoszenie</button>
          </Link>
          <Link to="/moje-ogloszenia">
            <button>Moje ogloszenia</button>
          </Link>
        </div>
      )}

      <div className={styles["header__sign-in"]}>
        {isLoged === "success" ? (
          <button
            type="submit"
            variant="danger"
            onClick={() => logout(setIsLoged)}
          >
            Wyloguj sie
          </button>
        ) : (
          <Link to="/login">
            <button>Zaloguj się</button>
          </Link>
        )}
      </div>
    </header>
  );
}
