import styled from "styled-components";

export const StyledProfileContainer = styled.div`
  height: 90vh;

  @media (max-width: 1100px) {
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
  background-color: whitesmoke;
  border-right: 4px solid;
  border-right: 4px solid
    ${({ theme }) => theme.announcements.colors.textColor2};
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    height: 150px;
    margin-bottom: 2em;
    border-right: none;
    border-bottom: 4px solid
      ${({ theme }) => theme.announcements.colors.textColor2};
  }
`;

export const StyledProfileContentContainer = styled.div`
  width: 100%;
  max-height: 90vh;
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
