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
  margin: 1em auto 0 auto;
`;

export const StyledLabelForm = styled.label`
  position: relative;
  margin-top: 1em;
  margin-bottom: 1em;
  width: 200px;

  input {
    border: none;
    border-bottom: 0.125rem solid
      ${({ theme }) => theme.createAnnoucement.colors.labelColor};
    height: 2rem;
    font-size: 1.0625rem;
    line-height: 147.6%;
    padding-left: 0.875rem;
    padding-top: 0.825rem;
    padding-bottom: 0.5rem;
    width: 200px;
    color: ${({ theme }) => theme.createAnnoucement.colors.labelColor};

    &:focus {
      outline: none;
      border-color: ${({ theme }) =>
        theme.createAnnoucement.colors.announcementBackground};
    }
    &:hover {
      background: rgba(73, 133, 224, 0.12);
      border-color: ${({ theme }) =>
        theme.createAnnoucement.colors.announcementBackground};
    }
  }

  span {
    position: absolute;
    top: 0rem;
    left: 0.5rem;
    line-height: 147.6%;
    color: ${({ theme }) => theme.createAnnoucement.colors.labelColor};
    transition: top 0.2s;
    cursor: pointer;
  }

  input:valid {
    border-color: ${({ theme }) =>
      theme.createAnnoucement.colors.announcementBackground};
  }

  input:valid + span,
  input:focus + span {
    top: -1.2rem;
    font-size: 0.9375rem;
    color: ${({ theme }) =>
      theme.createAnnoucement.colors.announcementBackground};
  }
`;

export const StyledSelectFormContainer = styled.div``;

export const StyledSelectForm = styled.select`
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  width: 220px;
  height: 40px;
  margin: 0.5em 0;
  padding: 0 4em 0 0.5em;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8em center / 1.4em,
    linear-gradient(
      to left,
      ${({ theme }) => theme.createAnnoucement.colors.labelColor} 3em,
      ${({ theme }) => theme.createAnnoucement.colors.white} 3em
    );
  color: ${({ theme }) => theme.createAnnoucement.colors.labelColor};
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  option {
    color: ${({ theme }) => theme.createAnnoucement.colors.white};
    background-color: ${({ theme }) =>
      theme.createAnnoucement.colors.labelColor};
  }
  &:focus {
    outline: none;
  }
  &::-ms-expand {
    display: none;
  }
`;

export const StyledShortTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  margin: 0 auto;

  textarea {
    height: 100px;
  }
`;

export const StyledErrorMsg = styled.p`
  color: red;
  margin: 0 0 1em 0;
  font-size: 0.8rem;
`;

export const StyledNumberInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

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

  div {
    label {
      width: fit-content;
      text-align: start;
      margin: 0;
    }
  }
`;

export const StyledRadioInput = styled.input`
  margin-left: 0.5em;
`;

export const StyledContainerFormForCostRange = styled.div`
  label {
    width: 75px;

    input {
      width: 75px;
    }
  }
`;
