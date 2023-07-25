import styled from "styled-components";

export const StyledProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 15px 0 5px 0;
  max-width: 100%;
  width: 350px;

  &::before {
    content: ""; /* Mandatory with ::before */
    background-color: grey;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
`;
export const StyledProgressBar = styled.div`
  background-color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 1s ease;
  width: ${({ pathname }) =>
    pathname.includes("/opis")
      ? "100%"
      : pathname.includes("/lokalizacja")
      ? "50%"
      : "0%"};
`;

export const StyledProgressCircle = styled.div`
  background-color: #fff;
  color: ${({ active, theme }) =>
    active ? theme.createAnnoucement.colors.textColor2 : "#999"};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid grey;
  transition: 1s ease;
  border-color: ${({ active, theme }) =>
    active && theme.createAnnoucement.colors.textColor2};
`;

export const StyledProgressBarLabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
`;
