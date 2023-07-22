import styled from "styled-components";

export const StyledLocationList = styled.ul`
  display: ${(props) => (props.isListLocationVisible ? "block" : "none")};
  position: absolute;
  list-style-type: none;
  padding: 0.3em;
  margin: 0px 20px 0 0;
  color: white;
  background: linear-gradient(30deg, rgb(47, 207, 187), rgb(55, 221, 156));
  border: 2px solid ${({ theme }) => theme.announcements.colors.textColor2};
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
`;

export const StyledLocationListElement = styled.li`
  padding: 0.3em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
