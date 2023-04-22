import styled from "styled-components";

export const StyledProfileContainer = styled.div`
  width: 70%;
  margin: 3em auto 0 auto;

  @media (max-width: 1100px) {
    width: calc(100% - 13px);
    margin: 0;
  }
`;

export const StyledProfileWrapper = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const StyledProfileListContainer = styled.div`
  width: 20%;
  height: fit-content;
  padding: 0 0.1em;
  background-color: whitesmoke;
`;

export const StyledProfileContentContainer = styled.div`
  width: 100%;
  padding: 0 0.3em;
  border: 2px solid gray;
  max-height: 80vh;
  overflow-y: auto;
  background-color: whitesmoke;

  @media (max-width: 1100px) {
    max-height: none;
  }
`;

export const StyledProfileUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;

  li {
    color: green;
    border: 1px solid green;
    background-color: rgb(194, 251, 215);
    padding: 0.3em 0;
    margin: 0.1em 0;
  }

  li:hover {
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    display: flex;
    width: fit-content;

    li {
      width: 150px;
      margin: 0.3em;
    }
  }
`;
