import styled from "styled-components";

export const StyledLoginFormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const StyledLoginForm = styled.form`
  max-width: 350px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const StyledLogoContainer = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.login.colors.logoBackgroundColor};
`;

export const StyledContentContainer = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.login.colors.backgroundColor};

  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
  }
`;

export const StyledLogingImg = styled.img`
  display: block;
  max-width: 200px;
  margin: 0 auto;
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
