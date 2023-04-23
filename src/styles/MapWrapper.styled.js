import styled from "styled-components";

export const StyledMapWrapper = styled.div`
  width: 45%;

  @media (max-width: 1100px) {
    width: ${({ isMobileMapOn }) => (!isMobileMapOn ? "0px" : "100%")};
    visibility: ${({ isMobileMapOn }) => !isMobileMapOn && "hidden"};
  }
`;
