import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/Header.module.css";
import logout from "./logout";
import { StyledLogInOutButton } from "../Header.styled";

export default function LogInButton({ isLoged, setIsLoged, setUserId }) {
  return (
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
  );
}
