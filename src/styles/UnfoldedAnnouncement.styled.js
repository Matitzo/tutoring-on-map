import styled from "styled-components";

export const StyledBackArrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const StyledUnfoldedAnnouncementContainer = styled.div`
  width: 55%;
  overflow: auto;
  padding: 0 1em;
`;

export const StyledHeadContainer = styled.div`
  padding: 1em;
  display: flex;
  color: ${({ theme }) => theme.announcements.colors.hoverColor};
  text-shadow: 0px 0px 2px white;
  //   background-image: radial-gradient(
  //     circle farthest-corner at 10% 20%,
  //     rgba(14, 174, 87, 1) 0%,
  //     rgba(12, 116, 117, 1) 90%
  //   );
  background: #a1ffce; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledHeadInfo = styled.div`
  margin-left: 1em;

  h2,
  h3 {
    margin: 0;
  }

  h2 {
    margin: 0.5em 0;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const StyledPrice = styled.p`
  margin: 0 0 1em 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledLocation = styled.div`
  margin-top: 0.5em;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
  padding: 0.2em;

  &:hover {
    cursor: pointer;
  }
`;
