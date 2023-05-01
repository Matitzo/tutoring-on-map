import { Link } from "react-router-dom";
import { StyledLogedButtonsWrapper, StyledButton } from "../Header.styled";

export default function Buttons() {
  return (
    <StyledLogedButtonsWrapper>
      <Link to="/stworz-ogloszenie">
        <StyledButton>Stwórz ogłoszenie</StyledButton>
      </Link>
      <Link to="/profil/moje-ogloszenia">
        <StyledButton>Moje ogloszenia</StyledButton>
      </Link>
    </StyledLogedButtonsWrapper>
  );
}
