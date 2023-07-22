import styled from "styled-components";

export const StyledBackArrowForm = styled.i`
  position: absolute;
  top: 30px;
  left: 30px;
  color: green;

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
  }
`;

export const StyledBackArrow = styled.i`
  position: absolute;
  top: 24px;
  left: 24px;
  color: rgb(194, 251, 215);
  transition: 0.8s;

  &:hover {
    opacity: 0.6;
  }
`;
