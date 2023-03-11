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

  input {
    border: none;
    border-bottom: 0.125rem solid rgba(19, 19, 21, 0.6);
    height: 2rem;
    font-size: 1.0625rem;
    line-height: 147.6%;
    padding-left: 0.875rem;
    padding-top: 0.825rem;
    padding-bottom: 0.5rem;

    &:focus {
      outline: none;
      border-color: #1e4bd1;
    }
    &:hover {
      background: rgba(73, 133, 224, 0.12);
      border-color: #121212;
    }
  }

  span {
    position: absolute;
    top: 0rem;
    left: 0.5rem;
    line-height: 147.6%;
    color: rgba(19, 19, 21, 0.6);
    transition: top 0.2s;
  }

  input:valid + span,
  input:focus + span {
    top: -1.1rem;
    font-size: 0.9375rem;
  }
`;

export const StyledSelectFormContainer = styled.div`
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;

  &::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #34495e;
    transition: .25s all ease;
    pointer-events: none;
    border: 2px solid red;
  }

  &:hover::after {
    color: #f39c12;
  }
  `;

export const StyledSelectForm = styled.select`
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  padding: 0.5em;
  color: green;
  border: 1px solid green;
  border-radius: 10px;
  background-image: none;
  cursor: pointer;
  margin: 0.5em 0;
  font-size: 1rem;

  &::-ms-expand {
    display: none;
  }
`;
