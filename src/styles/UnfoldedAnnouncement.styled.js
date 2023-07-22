import styled from "styled-components";

export const StyledUnfoldedAnnouncementContainer = styled.div`
  position: relative;
  width: 55%;
  overflow: auto;
  padding: 1em 1em;

  @media (max-width: 1100px) {
    width: calc(100% - 2em);
    display: ${({ isMobileMapOn }) => isMobileMapOn && "none"};
  }
`;

export const StyledHeadContainer = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 1em;
  display: flex;
  color: ${({ theme }) => "white"};
  //background-color: rgb(194, 251, 215);
  background: linear-gradient(30deg, rgb(47, 207, 187), rgb(55, 221, 156));
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const StyledHeadInfo = styled.div`
  margin-left: 1em;

  h2,
  h3 {
    margin: 0;
    font-weight: normal;
  }

  h2 {
    margin: 0.5em 0;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
`;

export const StyledSpan = styled.span``;

export const StyledPrice = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

export const StyledPhoneNumber = styled.p`
  margin: 0 0 1em 0;
  font-size: 1.2rem;
`;

export const StyledLocation = styled.div`
  margin-top: 0.5em;
  border-radius: 10px;
  padding: 0.2em;

  &:hover {
    cursor: ${(props) => (props.clickable ? "pointer" : "cursor")};
    text-decoration: ${(props) => (props.clickable ? "underline" : "none")};
  }
`;

export const StyledDesriptionContainer = styled.div`
  margin-top: 1em;
  padding: 2em 2em;
  background-color: ${({ theme }) => theme.announcements.colors.white};
  border: 3px solid ${({ theme }) => theme.announcements.colors.white};
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
  min-height: 50vh;
  word-wrap: break-word;
`;
