import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
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
      <div className={styles["header__add-offer"]}>
        <button>Stwórz ogłoszenie</button>
      </div>
      <div className={styles["header__sign-in"]}>
        <button>Zaloguj się</button>
      </div>
    </header>
  );
}
