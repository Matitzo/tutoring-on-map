import styled from "styled-components";

export const StyledMyAnnouncementsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    justify-content: space-around;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyledMyAnnouncementsWrapper = styled.div`
  width: 80%;

  height: 90vh;
  overflow-y: auto;
  padding: 0 1em;

  @media (max-width: 1000px) {
    width: fit-content;
    overflow-y: hidden;
    height: fit-content;
  }

  @media (max-width: 768px) {
    padding: 0 0.5em;
  }

  @media (max-width: 450px) {
    padding: 0 0.5em;
  }
`;

export const StyledMyAnnouncementWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const StyledBtnWrapper = styled.div`
  position: absolute;
  top: 1.25em;
  right: 2em;
  width: fit-content;
`;

export const StyledIcon = styled.i`
  color: green;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;
