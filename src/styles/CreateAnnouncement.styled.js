import styled from "styled-components";

export const StyledCreateAnnouncementWrapper = styled.div``;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSelection = styled.div`
  background-color: ${({ theme }) => theme.createAnnoucement.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
  margin: 0.5em 0;
  padding: 0.5em 0.8em;
  cursor: default;
  min-width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSelectionLocation = styled(StyledSelection)`
  display: flex;
  text-align: start;
  justify-content: start;
  align-items: start;
  border: 2px solid green;
`;

export const StyledDeleteButton = styled.div`
  position: relative;
  top: 1px;
  left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  align-items: start;
`;

export const StyledFormDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
`;

export const StyledFormInputDataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormProgressContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  width: 20%;
  padding: 2em;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  min-height: 300px;
  min-width: 600px;
  position: relative;

  label {
    font-weight: bold;
  }

  
}
&:before, &:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
}
&:before {
  background: #fafafa;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}
&:after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}
`;

export const StyledFormHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormHeader = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  div {
    margin: 0;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledLocationsDiv = styled.div`
  display: flex;
  column-gap: 1em;
  flex-wrap: wrap;
`;
