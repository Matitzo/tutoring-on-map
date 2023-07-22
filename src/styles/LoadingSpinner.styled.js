import styled from "styled-components";

export const StyledLoadingSpinnerDiv = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid rgb(0, 149, 120);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 1em;
  position: relative;
  top: calc(50% - 90px);
  left: calc(50% - 90px);

  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
