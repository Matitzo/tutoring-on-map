import styled from "styled-components";

export const StyledHamburgerDiv = styled.div`
  display: block;
  height: 20px;
  width: 25px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background: #0e2431;
  }
`;

export const StyledLineOne = styled.span`
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
`;

export const StyledLineTwo = styled.span`
  transition: transform 0.2s ease-in-out;
`;

export const StyledLineThree = styled.span`
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
`;

export const StyledModalDiv = styled.div`
  display: ${({ isHamburgerOpened }) => (isHamburgerOpened ? "flex" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.4);
  border-left: 1px solid black;
`;

export const StyledButtonsContainer = styled.div`
  border-left: 3px solid ${({ theme }) => theme.header.colors.textColor2};
  background: white;
  width: 45%;
  height: 100vh;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
  padding-top: 2em;
  font-family: "Poppins", sans-serif;

  @media (max-width: 520px) {
    width: 100%;
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

  ul {
    list-style-type: none;
    padding-left: 1em;
    text-align: start;
  }

  li {
    font-size: 1.1rem;
    margin: 1em 0.2em;
  }
`;

export const StyledModalHeader = styled.h2`
  color: black;
  margin-left: 1em;
`;

export const StyledSpanText = styled.span`
  color: #5f656b;

  &:hover {
    font-weight: bold;
  }
`;

export const StyledBurgerWrapper = styled.div`
  z-index: 99999;

  &:hover {
    cursor: pointer;
  }

  ${StyledButtonsContainer} {
    display: ${({ isHamburgerOpened }) =>
      isHamburgerOpened ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ isHamburgerOpened }) =>
      isHamburgerOpened ? "translateX(0);" : ""};
  }

  ${StyledLineOne} {
    transform: ${({ isHamburgerOpened }) =>
      isHamburgerOpened ? "rotate(45deg)" : ""};
  }

  ${StyledLineTwo} {
    transform: ${({ isHamburgerOpened }) =>
      isHamburgerOpened ? "scaleY(0)" : ""};
  }

  ${StyledLineThree} {
    transform: ${({ isHamburgerOpened }) =>
      isHamburgerOpened ? "rotate(-45deg)" : ""};
  }
`;
