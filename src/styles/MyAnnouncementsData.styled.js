import styled from "styled-components";

export const MyAnnouncementsDataContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-direction: column;
  color: ${({ theme }) => theme.announcements.colors.textColor2};
  position: fixed;
  height: 90vh;
  text-align: center;
  border-right: 4px solid
    ${({ theme }) => theme.announcements.colors.textColor2};
  padding: 0 3em;

  h1,
  h3,
  p {
    margin: 0;
  }

  p {
    font-size: 1.1rem;
  }

  @media (max-width: 1350px) {
    padding: 0 2em;
  }

  @media (max-width: 1170px) {
    justify-content: start;

    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1000px) {
    position: static;
    width: 100%;
    flex-direction: row;
    height: 150px;
    align-items: center;
    justify-content: space-around;
    border-right: none;
    border-bottom: 4px solid
      ${({ theme }) => theme.announcements.colors.textColor2};
    padding: 0.5em 0;
  }

  @media (max-width: 600px) {
    padding: 0 1em;
    h1 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 0.9rem;
    }
  }
`;

export const StyledRoundDiv = styled.div`
  border: 4px solid ${({ theme }) => theme.announcements.colors.textColor2};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 450px) {
    width: 50px;
    height: 50px;

    p {
      font-size: 1rem;
    }
  }
`;

export const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1170px) {
    margin-top: 4em;
  }

  @media (max-width: 1000px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
`;
