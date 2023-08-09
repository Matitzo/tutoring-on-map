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
    width: calc(80% - 2em);
    margin: 0 auto;
    flex-direction: row;
    gap: 0.5em;
    height: 150px;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 1em;
  }

  @media (max-width: 768px) {
    width: calc(100% - 1em);
    padding: 0.5em 0.5em;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 450px) {
    width: calc(100% - 1em);
    padding: 0 0.5em;
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
`;
