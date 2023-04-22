import styled from "styled-components";

export const StyledHeader = styled.header`
   {
    padding: 0 2em;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #d3d3d3;

    @media (max-width: 568px) {
      height: 15vh;
  }
`;

export const StyledLogoImg = styled.img`
  height: 10vh;

  @media (max-width: 768px) {
    width: 100%;
    height: 8vh;
  }

  @media (max-width: 568px) {
    height: 6vh;
  }
`;

export const StyledTogglerDiv = styled.div`
  margin-left: 1em;
  position: relative;
  top: 3px;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 1px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50px;
    transition: 0.3s;
  }

  input:checked + label {
    background: #bada55;
  }

  input:checked + label:after {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 25px;
  }

  @media (max-width: 800px) {
    margin-left: 0.5em;
    display: flex;
    align-items: center;

    label {
      width: 20px;
      height: 10px;
    }

    label:after {
      width: 10px;
      height: 10px;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;

  @media (max-width: 568px) {
    flex-direction: column-reverse;
    align-items: end;
  }
`;

export const StyledButton = styled.button`
   {
    background-color: ${({ theme }) => theme.header.colors.backgroundColor};
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: ${({ theme }) => theme.header.colors.textColor};
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
      sans-serif;
    padding: 7px 20px;
    margin: 0 0.5em;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    @media (max-width: 800px) {
      font-size: 0.6rem;
      padding: 0.4em 0.6em;
    }

    @media (max-width: 568px) {
      font-size: 0.6rem;
      padding: 0.6em;
    }
  }

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export const StyledLogInOutButton = styled(StyledButton)`
   {
    color: ${({ theme }) => theme.header.colors.backgroundColor};
    background-color: ${({ theme }) => theme.header.colors.textColor};

    @media (max-width: 768px) {
      margin: 0.2em 0.5em 0.5em 0;
    }
  }
`;

export const StyledLogedButtonsWrapper = styled.div`
  @media (max-width: 610px) {
    text-align: end;
  }
`;
