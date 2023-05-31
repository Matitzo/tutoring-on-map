import styled from "styled-components";

export const StyledMapWrapper = styled.div`
  width: 45%;

  @media (max-width: 1100px) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${({ isMobileMapOn }) => (!isMobileMapOn ? "-1" : "999")};
    visibility: ${({ isMobileMapOn }) => !isMobileMapOn && "hidden"};
  }
`;

//width: ${({ isMobileMapOn }) => isMobileMapOn && "100%"};
//visibility: ${({ isMobileMapOn }) => !isMobileMapOn && "hidden"};
//display: ${({ isMobileMapOn }) => !isMobileMapOn && "none"};
