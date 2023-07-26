import styled from "styled-components";

export const StyledTextEditorWrapper = styled.div`
  padding: 0 2em;
  width: 50%;
  min-width: 710px;
  text-align: center;

  @media (max-width: 1000px) {
    width: 90%;
    min-width: 450px;
    padding: 0;
  }

  @media (max-width: 520px) {
    width: 100%;
    min-width: 100px;
  }
`;
