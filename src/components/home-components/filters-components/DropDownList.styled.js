import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 9999;

  &:hover div {
    display: block;
  }
`;

export const DropDownBtn = styled.button`
  width: 210px;
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const DropDownListContainer = styled.div`
  background-color: ${({ theme }) => theme.filters.colors.backgroundColor};
  width: 210px;
  max-height: 300px;
  overflow-y: auto;
  display: none;
  position: absolute;
  padding: 0;
  margin: 0;
  min-width: 160px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

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
`;

export const StyledListElement = styled.li`{
  margin: 0;
  color: ${({ theme }) => theme.filters.colors.textColor};
  padding: .5em 1em;
  text-decoration: none;
  display: block;
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.filters.colors.hoverColor
      : theme.filters.colors.backgroundColor};

  &:hover {
    background-color: ${({ theme }) => theme.filters.colors.hoverColor};
  }
`;
