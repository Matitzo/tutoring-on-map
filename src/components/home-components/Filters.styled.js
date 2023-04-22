import styled from "styled-components";

export const StyledFiltersContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #d3d3d3;

  @media (max-width: 768px) {
    height: 25vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.2em;
    column-gap: 0.5em;
    padding: 0 0.5em;
  }
`;
