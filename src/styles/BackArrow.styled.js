import styled from "styled-components";

export const StyledBackArrowForm = styled.i`
  color: ${({ theme }) => theme.createAnnoucement.colors.textColor2};
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

  @media (max-width: 768px) {
    svg {
      width: 15;
      height: 15;
    }
  }
`;
