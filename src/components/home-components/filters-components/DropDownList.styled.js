import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 15%;

  &:hover div {
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const DropDownBtn = styled.button`
  width: 100%;
  color: white;
  background-color: ${({ theme, filtered }) =>
    filtered
      ? theme.filters.colors.hoverColor
      : theme.filters.colors.backgroundColor};
  padding: 0.8em;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
    padding: 0.8em 0.2em;
    z-index: 5;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const DropDownListContainer = styled.div`
  background-color: ${({ theme }) => theme.filters.colors.backgroundColor};
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  display: none;
  position: absolute;
  padding: 0;
  margin: 0;
  min-width: 100px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 6000;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    min-width: 0;
  }

  ul {
    list-style-position: inside;
    padding-left: 0;
    margin: 0;
  }

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  &:hover {
    display: block;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes rotateMenu {
    0% {
      transform: rotateX(-90deg);
    }
    70% {
      transform: rotateX(20deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
`;

export const StyledCenteredDiv = styled.div`
  margin: 0 1em;
  text-align: center;
`;

export const StyledListElement = styled.li`{
  margin: 0;
  color: ${({ theme }) => theme.filters.colors.textColor};
  padding: .5em 1em;
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.filters.colors.hoverColor
      : theme.filters.colors.backgroundColor};

  &:hover {
    background-color: ${({ theme }) => theme.filters.colors.hoverColor};
  }
`;

export const StyledFilterCostButtonsWrapper = styled.div`
  width: calc(100% -0.9em);
  text-align: center;
  padding-left: 0.9em;

  @media (max-width: 768px) {
    padding-left: 0.5em;
  }
`;
