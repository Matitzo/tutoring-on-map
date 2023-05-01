import styled from "styled-components";

export const StyledHamburgerDiv = styled.div`
  display: block;
  height: 20px;
  width: 25px;
  position: absolute;
  top: 20px;
  right: 175px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    top: 14px;
  }

  @media (max-width: 568px) {
    right: 125px;
  }

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

export const StyledCheckboxInput = styled.input`
  position: absolute;
  display: block;
  height: 26px;
  width: 30px;
  top: 25px;
  right: 175px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;

  @media (max-width: 800px) {
    top: 14px;
  }

  @media (max-width: 568px) {
    right: 125px;
  }
`;

export const StyledButtonsContainer = styled.div`
  height: fit-content;
  position: absolute;
  top: 50px;
  right: 50px;
  color: white;
  text-decoration: none;
  border: 3px solid green;
  z-index: 99999;
  background: white;
  width: 150px;
  min-height: 100px;

  @media (max-width: 568px) {
    right: 0px;
  }

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

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
    list-style-type: none; /* Remove bullets */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */
    text-align: center;
  }

  li {
    font-size: 1rem;
    margin: 1em 0.2em;
  }
`;

export const StyledSpanText = styled.span`
  color: black;

  &:hover {
    font-weight: bold;
  }
`;

export const StyledBurgerWrapper = styled.div`
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
//${({ isHamburgerOpened }) => (isHamburgerOpened ? "rotate(45deg)" : "")};
