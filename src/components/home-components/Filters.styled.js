import styled from "styled-components";

export const StyledFiltersContainer = styled.div`
  height: 12vh;
  min-height: 75px;
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  border-bottom: 2px solid #d3d3d3;

  @media (max-width: 768px) {
    min-height: 180px;
    max-height: none;
    height: 25vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.2em;
    column-gap: 0.5em;
    padding: 0 0.5em;
  }
`;
