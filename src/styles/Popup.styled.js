import styled from "styled-components";

export const StyledClusterPopupContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
`;

export const StyledPopupContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 250px;
  height: 40px;
  padding: 0 0.5em;
  border: 1px solid black;
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
  color: green;
  display: flex;
  justify-content: space-between;
`;

export const StylelPopupPrice = styled.span`
  font-size: 1rem;
`;

export const StyledPopupAuthor = styled.span`
  text-align: end;
  font-size: 1rem;

  span {
    font-size: 0.8em;
    color: rgb(76, 175, 80);
  }
`;
