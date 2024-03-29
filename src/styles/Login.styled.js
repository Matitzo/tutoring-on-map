import styled from "styled-components";
import librarian_photo from "../images/librarian.jpg";

export const StyledLoginFormWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledLoginCard = styled.div`
  width: 700px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: 90vh;
  }

  @media (max-width: 568px) {
    width: 100%;
  }
`;

export const StyledLoginContainer = styled.div`
  display: flex;

  @media (max-width: 568px) {
    flex-direction: column;
    height: 80vh;
  }
`;

export const StyledLoginForm = styled.form`
  width: 50%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 568px) {
    width: 100%;
  }
`;

export const StyledLogoContainer = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.login.colors.logoBackgroundColor};

  @media (max-width: 568px) {
    height: 7vh;
  }
`;

export const StyledContentContainer = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.login.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;

  label {
    font-size: 0.9rem;
  }

  @media (max-width: 568px) {
    height: 100vh;
    justify-content: start;
    align-items: center;
    text-align: center;
  }
`;

export const StyledLogingImg = styled.img`
  display: block;
  max-width: 200px;
  margin: 0 auto;
`;

export const StyledPhotoDiv = styled.div`
  width: 50%;
  background-image: url(${librarian_photo});
  background-size: cover;
  background-position: center;
`;

export const StyledHeading = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.login.colors.logoBackgroundColor};
`;

export const StyledSecondaryHeading = styled.h2`
  color: white;
`;

export const StyledLoginBtn = styled.button`
  padding: 10px;
  width: 100%;
  color: #ffffff;
  font-weight: bold;
  background: #009578;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1em;

  &:active {
    background: #008067;
  }

  @media (max-width: 568px) {
    width: 220px;
  }
`;

export const StyledLoginInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #dddddd;
  background: #ffffff;
  outline: none;
  transition: border-color 0.5s;
  margin-bottom: 1em;

  &:focus {
    border-color: #009578;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  @media (max-width: 568px) {
    width: 200px;
  }
`;

export const StyledSuccessMsg = styled.p`
  color: ${({ theme }) => theme.login.colors.logoBackgroundColor};
  font-size: 0.9rem;
  margin-bottom: 0.8em;
`;

export const StyledErrorMsg = styled.span`
  color: ${({ theme }) => theme.login.colors.errorMsgColor};
  font-size: 0.9rem;
  margin-bottom: 0.8em;
`;

export const StyledLinkWrapper = styled.div`
  width: fit-content;
`;
