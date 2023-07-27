import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 15%;
  max-width: 220px;

  &:hover div {
    display: block;
  }

  @media (max-width: 1336px) {
    height: 90%;
    max-width: none;
  }

  @media (max-width: 1100px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const DropDownBtn = styled.button`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.filters.colors.textColor};
  background-color: ${({ theme, filtered }) =>
    filtered ? theme.filters.colors.backgroundColor : "white"};
  padding: 0.8em;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.filters.colors.textColor};
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 75px;
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
  background-color: white;
  width: 100%;
  min-height: 115px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: clip;
  display: none;
  position: absolute;
  padding: 0;
  margin: 0;
  min-width: 100px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 6000;

  @media (max-width: 1000px) {
    width: fit-content;
  }

  @media (max-width: 768px) {
    width: 100%;
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

export const StyledCostDropDownListContainer = styled(DropDownListContainer)`
  color: ${({ theme }) => theme.filters.colors.textColor};
`;

export const StyledCenteredDiv = styled.div`
  text-align: center;

  @media (max-width: 845px) {
    span {
      display: none;
    }
  }
  @media (max-width: 768px) {
    span {
      display: inline;
    }
  }
`;

export const StyledListElement = styled.li`{
  margin: 0;
  color: ${({ theme }) => theme.filters.colors.textColor};
  padding: .5em 1em;
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.filters.colors.backgroundColor : "white"};
  // &:hover {
  //   background-color: ${({ theme }) => theme.filters.colors.hoverColor};
  // }

  transition: all 250ms;
  -webkit-user-select: none;
  touch-action: manipulation;


  &:hover {
      transform: scale(1.1);
      transition: all 250ms;
  }
`;

export const StyledFilterCostButtonsWrapper = styled.div`
  text-align: center;

  @media (max-width: 931px) {
    margin-top: 2em;
    span {
      display: none;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1em;
    padding-left: 0.5em;
    span {
      display: inline;
    }
  }
`;
