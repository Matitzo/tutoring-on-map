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
  font-family: "Poppins", sans-serif;

  &:hover {
    border: 3px solid ${({ theme }) => theme.announcements.colors.textColor2};
  }

  @media (max-width: 540px) {
    flex-direction: column;
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
  margin: 0.5em;
  padding: 0 1em;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6em;
  }
`;

export const StyledAnnouncementInformationsAuthorPriceContainer = styled.div`
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.announcements.colors.textColor2};
    margin: 0;
    margin-right: 10px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;

    h2 {
      margin-bottom: 0.3em;
    }
  }

  @media (max-width: 540px) {
    flex-direction: row;
    align-items: center;
    h2 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;

    h2 {
      margin-bottom: 0.3em;
    }
  }
`;

export const StyledAnnouncementInformationsPhoneContainer = styled.div`
  align-items: center;

  @media (max-width: 580px) {
    flex-direction: column-reverse;
    align-items: start;
    gap: 0.5em;
  }

  @media (max-width: 540px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 440px) {
    flex-direction: column-reverse;
    align-items: start;
    gap: 0.5em;
  }
`;

export const StyledSubject = styled.span`
  color: ${({ theme }) => theme.announcements.colors.textColor2};
  font-weight: bold;
`;

export const StyledPhoneNumber = styled.span`
  color: ${({ theme }) => theme.announcements.colors.textColor2};
`;

export const StyledLearningMode = styled.span`
  color: ${({ theme }) => theme.announcements.colors.textColor2};
`;

export const StyledShortDescription = styled.p`
  min-height: 70px;
  width: 100%;
  margin-bottom: 0.4em;
  word-break: break-word;
  white-space: normal;
`;

export const StyledSmallText = styled.span`
  color: ${({ theme }) => theme.announcements.colors.textColor2};
  font-size: 0.8rem;
`;

export const StyledPrice = styled.span`
  font-size: 1.4rem;
  span {
    color: black;
    font-size: 1rem;
  }
`;
