import styled from "styled-components";

export const StyledClusterPopupContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
`;

export const StyledPopupContainer = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 250px;
  height: 40px;
  padding: 0.4em 0.5em;
  margin-right: 0.5em;
  border: 2px solid #009578;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

export const StyledPopupImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1em;
`;

export const StyledPopupInfoWrapper = styled.div`
  width: 75%;
  color: #009578;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StylelPopupPrice = styled.span`
  text-align: end;
  font-size: 1rem;
  min-width: fit-content;

  span {
    font-size: 0.8em;
  }
`;

export const StyledPopupAuthor = styled.span`
  font-size: 1rem;
`;
