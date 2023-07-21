import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
   {
    padding: 0 2em;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #d3d3d3;


   @media (max-width: 568px) {
     padding: 0 .5em;
   }
`;

export const StyledLogoImg = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 410px) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledTogglerDiv = styled.div`
  margin-left: 1em;
  position: relative;
  top: 3px;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 1px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50px;
    transition: 0.3s;
  }

  input:checked + label {
    background: #bada55;
  }

  input:checked + label:after {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 25px;
  }

  @media (max-width: 768px) {
    top: -10px;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;

  @media (max-width: 568px) {
    width: 230px;
  }
`;

export const StyledLogoLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  font-family: "Poppins", sans-serif;

  h4 {
    margin-left: 0.5em;
  }

  @media (max-width: 410px) {
    h4 {
      font-size: 1rem;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button`
   {
    background-color: white;
    border-radius: 12px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: ${({ theme }) => theme.header.colors.textColor};
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
      sans-serif;
    padding: 7px 20px;
    margin: 0 0.5em;
    text-align: center;
    text-decoration: none;
    border: 0;
    font-size: 16px;
    user-select: none;
    transition: all 250ms;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
  }
`;

export const StyledLogInOutButton = styled(StyledButton)`
   {
    color: ${({ theme }) => theme.header.colors.textColor};
    background-color: ${({ theme }) => theme.header.colors.backgroundColor};

    @media (max-width: 768px) {
      margin: 0.2em 0.5em 0.5em 0;
    }
  }
`;

export const StyledLogedButtonsWrapper = styled.div`
  @media (max-width: 610px) {
    text-align: end;
  }
`;
