import React from "react";
import {
  StyledProgressBar,
  StyledProgressContainer,
  StyledProgressCircle,
  StyledProgressBarLabelsContainer,
  StyledProgressBarWrapper,
} from "../../styles/ProgressBar.styled";

export default function ProgressBar({ pathname }) {
  return (
    <StyledProgressBarWrapper>
      <StyledProgressContainer>
        <StyledProgressBar pathname={pathname}></StyledProgressBar>
        <StyledProgressCircle active={true}>1</StyledProgressCircle>
        <StyledProgressCircle
          active={
            pathname.includes("/lokalizacja") || pathname.includes("/opis")
          }
        >
          2
        </StyledProgressCircle>
        <StyledProgressCircle active={pathname.includes("/opis")}>
          3
        </StyledProgressCircle>
      </StyledProgressContainer>
      <StyledProgressBarLabelsContainer>
        <span>Dane</span>
        <span>Lokalizacja</span>
        <span>Opis</span>
      </StyledProgressBarLabelsContainer>
    </StyledProgressBarWrapper>
  );
}
