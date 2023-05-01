import React from "react";
import { StyledLink } from "../filters-components/DropDownList.styled";
import {
  StyledCheckboxInput,
  StyledHamburgerDiv,
  StyledLineOne,
  StyledLineTwo,
  StyledLineThree,
  StyledBurgerWrapper,
  StyledButtonsContainer,
  StyledSpanText,
} from "../../../styles/Humburger.styled";

export default function HamburgerButtons() {
  const [isHamburgerOpened, setIsHamburgerOpened] = React.useState(false);

  return (
    <StyledBurgerWrapper isHamburgerOpened={isHamburgerOpened}>
      <StyledCheckboxInput
        class="checkbox"
        type="checkbox"
        name=""
        id=""
        onClick={() => setIsHamburgerOpened((prevData) => !prevData)}
      />
      <StyledHamburgerDiv>
        <StyledLineOne class="one"></StyledLineOne>
        <StyledLineTwo class="one"></StyledLineTwo>
        <StyledLineThree class="one"></StyledLineThree>
      </StyledHamburgerDiv>

      <StyledButtonsContainer>
        <ul onClick={() => setIsHamburgerOpened((prevData) => !prevData)}>
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
        </ul>
      </StyledButtonsContainer>
    </StyledBurgerWrapper>
  );
}
