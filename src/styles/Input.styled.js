import styled from "styled-components";

export const StyledInput = styled.input`
  width: 210px;
  color: ${({ theme }) => theme.filters.colors.hoverColor};
  padding: 0.8em;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.filters.colors.hoverColor};
  border-radius: 5px;
`;

export const StyledSmallInout = styled(StyledInput)`
  font-size: 12px;
  padding: 0.4em 0.8em;
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
