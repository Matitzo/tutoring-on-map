import React from "react";
import {
  StyledHamburgerDiv,
  StyledLineOne,
  StyledLineTwo,
  StyledLineThree,
  StyledBurgerWrapper,
} from "../../../styles/Humburger.styled";

export default function HamburgerButtons({
  isHamburgerOpened,
  setIsHamburgerOpened,
}) {
  return (
    <StyledBurgerWrapper isHamburgerOpened={isHamburgerOpened}>
      <StyledHamburgerDiv
        onClick={() => setIsHamburgerOpened((prevData) => !prevData)}
      >
        <StyledLineOne class="one"></StyledLineOne>
        <StyledLineTwo class="one"></StyledLineTwo>
        <StyledLineThree class="one"></StyledLineThree>
      </StyledHamburgerDiv>
    </StyledBurgerWrapper>
  );
}
