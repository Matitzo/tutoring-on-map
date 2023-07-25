import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
   {
    background-color: ${({ theme }) => theme.header.colors.backgroundColor};
    border-radius: 100px;
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
    margin: 0;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
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

export const StyledSmallButton = styled(StyledButton)`
  padding: 0.6em 1.2em;
  margin: 1em 0;
  font-size: 14px;
  border-radius: 5px;
  width: 38%;
  border: 2px solid ${({ theme }) => theme.filters.colors.textColor};
  min-width: fit-content;

  @media (max-width: 1475px) {
    width: 40px;
  }

  @media (max-width: 1375px) {
    width: 20%;
  }

  @media (max-width: 931px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    padding: 0.3em;
    margin: 0.4em;
    font-size: 0.8rem;
    border-radius: 5px;
    width: 40%;
  }
`;

export const StyledLogInOutButton = styled(StyledButton)`
   {
    margin-left: 4em;
    color: ${({ theme }) => theme.header.colors.backgroundColor};
    background-color: ${({ theme }) => theme.header.colors.textColor};
  }
`;

export const StyledFormButton = styled(StyledButton)`
  color: ${({ theme }) => theme.header.colors.backgroundColor};
  background-color: ${({ theme }) => theme.header.colors.textColor2};
`;

export const StyledLinkButton = styled(Link)`
  margin: 2em auto 0em auto;
  width: fit-content;
`;

export const StyledSubmitButton = styled(StyledFormButton)`
  margin: 2em auto 0em auto;
  width: fit-content;
`;

export const StyledButtonWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

export const StyledMapButton = styled.div`
  display: none;
  position: fixed;
  z-index: 9999;

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.3em 1em;
    color: ${({ theme }) => theme.header.colors.backgroundColor};
    background-color: ${({ theme }) => theme.announcements.colors.textColor2};
    border-radius: 15px;

    &:hover,
    &:active {
      cursor: pointer;
    }
  }
`;
