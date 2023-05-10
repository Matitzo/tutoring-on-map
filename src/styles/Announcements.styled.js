import styled from "styled-components";

export const StyledAnnouncementsContainer = styled.div`
  width: 55%;
  padding: 1em;
  overflow: auto;
  background-color: ${({ theme }) =>
    theme.announcements.colors.backgroundColor};

  @media (max-width: 1100px) {
    padding: 1em 0.3em;
    width: calc(100% - 0.6em);
    display: ${({ isMobileMapOn }) => isMobileMapOn && "none"};
  }
`;

export const StyledAnnouncementWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  color: ${({ theme }) => theme.announcements.colors.textColor};
  background-color: ${({ theme }) => theme.announcements.colors.white};
  border: 3px solid ${({ theme }) => theme.announcements.colors.white};
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
  margin: 1em 0;
  padding: 0.5em;
  text-decoration: none;

  &:hover {
    border: 3px solid ${({ theme }) => theme.announcements.colors.hoverColor};
  }
`;

export const StyledImageWrapper = styled.div`
  width: 200px;
  height: 200px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledAnnoucementInformations = styled.div`
  width: 100%;
  margin: 0.5em;
  padding: 0 1em;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.6em;

    h2 {
      color: ${({ theme }) => theme.announcements.colors.hoverColor};
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const StyledSubject = styled.span`
  color: ${({ theme }) => theme.announcements.colors.hoverColor};
  font-weight: bold;
`;

export const StyledPhoneNumber = styled.span``;

export const StyledShortDescription = styled.p`
  min-height: 70px;
  width: 100%;
  margin-bottom: 0.4em;
  word-break: break-word;
  white-space: normal;
`;

export const StyledSmallText = styled.span`
  color: ${({ theme }) => theme.announcements.colors.smallText};
  font-size: 0.8rem;
`;

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.announcements.colors.hoverColor};
  font-size: 1.4rem;
  font-weight: bold;
  span {
    color: ${({ theme }) => theme.announcements.colors.smallText};
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    span {
      font-size: 0.6rem;
    }
  }
`;
