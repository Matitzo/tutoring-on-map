import styled from "styled-components";

export const StyledInput = styled.input`
  width: 210px;
  color: ${({ theme }) => theme.filters.colors.textColor};
  padding: 0.8em;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.filters.colors.textColor};
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2em);
    font-size: 0.8rem;
  }
`;

export const StyledSmallInout = styled(StyledInput)`
  font-size: 14px;
  padding: 0.6em 1.2em;
  margin-top: 1em;
  width: 40%;
  max-width: 50px;

  @media (max-width: 1475px) {
    width: 40px;
  }

  @media (max-width: 1375px) {
    width: 20%;
  }

  @media (max-width: 1375px) {
    width: 15%;
  }

  @media (max-width: 845px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    padding: 0.3em 0.2em;
    width: 38%;
    max-width: 500px;
  }
`;

export const StyledInputFile = styled.input`
  margin: 1em 0;
  width: fit-content;
`;

export const StyledLabelForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;

  input {
    padding: 0.7em 1em;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid
      ${({ theme }) => theme.createAnnoucement.colors.textColor2};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
    outline: none;
  }
`;

export const StyledSelectFormContainer = styled.div``;

export const StyledSelectForm = styled.select`
  padding: 0.7em 1em;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.createAnnoucement.colors.textColor2};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
  outline: none;
  width: 175px;
`;

export const StyledShortTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  textarea {
    margin-top: 1em;
    height: 70px;
    max-width: 100%;
    min-width: 250px;
    overflow-y: auto;
    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
    border: 1px solid
      ${({ theme }) => theme.createAnnoucement.colors.textColor2};
    box-shadow: 1px 1px 1px #999;
    outline: none;
    resize: none;
  }
`;

export const StyledErrorMsg = styled.p`
  color: red;
  margin: 0 0 1em 0;
  font-size: 0.8rem;
`;

export const StyledNumberInput = styled.input``;

export const StyledLocationInput = styled.input`
  width: ${({ widthLength }) => widthLength * 7}px;
  max-width: 500px;
  border: 0;
  border-bottom: 2px solid green;
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 568px) {
    width: 200px;
  }
`;

export const StyledRadioInputContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 2em;
  flex-wrap: wrap;

  div {
    label {
      width: fit-content;
      text-align: start;
      margin: 0;
    }
  }

  label:not(:first-child) {
    font-weight: normal;
  }
`;

export const StyledRadioInput = styled.input`
  margin-left: 0.5em;
`;

export const StyledContainerFormForCostRange = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;
