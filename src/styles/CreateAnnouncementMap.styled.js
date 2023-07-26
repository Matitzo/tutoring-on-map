import styled from "styled-components";

export const StyledMapWrapper = styled.div`
  dsiplay: flex;
  flex-direction: column;
  text-align: center;
  background-color: whitesmoke;
  font-weight: bold;
  color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
  background-color: white;
  width: 50%;
  padding: 1em;

  @media (max-width: 1150px) {
    width: 65%;
  }

  @media (max-width: 900px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const StyledMapContainer = styled.div`
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 20px;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
  div {
    display: block;
  }
`;

export const StyledMapDiv = styled.div`
  width: 100%;
  height: 60vh;

  @media (max-width: 768px) {
    height: 80vw;
    min-height: 400px;
  }
`;

export const StyledLocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLoactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  text-align: start;
`;

export const StyledErrorMsg = styled.p`
  color: red;
  margin: 0 0 1em 0;
  font-size: 0.8rem;
`;
