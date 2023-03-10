import styled from "styled-components";

export const StyledCreateAnnouncementWrapper = styled.div``;

export const StyledForm = styled.form`
  display: flex;
`;

export const StyledLocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLoactionsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  height: fit-content;
  height: 100px;
  overflow: auto;
  border: 2px solid green;
  border-radius: 10px;
`;

export const StyledMapWrapper = styled.div`
  position: sticky;
  top: 0;
  text-align: center;
  background-color: whitesmoke;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.createAnnoucement.colors.labelColor};

  h2 {
    position: absolute;
    top: 0.5em;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const StyledMapContainer = styled.div`
  background-color: white;
  padding: 1em;
  margin: 1em;
  border-radius: 20px;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledMapDiv = styled.div`
  width: 100%;
  height: 70vh;
`;

export const StyledSelection = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.createAnnoucement.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  padding: 0.3em 0.5em;
  cursor: default;
`;

export const StyledDeleteButton = styled.span`
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledFormDiv = styled.div`
  text-align: center;
  padding: 0.5em;
  margin: 2em;
  color: ${({ theme }) => theme.createAnnoucement.colors.labelColor};
  font-weight: bold;

  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  min-height: 300px;
  position: relative;
  width: 50%;
}
&:before, &:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
}
&:before {
  background: #fafafa;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}
&:after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}

  ul {
    list-style: none;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: center;
  }

  ul li + li {
    margin-top: 1em;
    justify-content: center;
  }

  ul label {
    display: block;
    margin-right: 10px;
    width: 200px;
    text-align: right;
  }

  ul input {
    display: block;
    width: 180px;
    box-sizing: border-box;
  }

  ul select {
    width: 180px;
  }
`;

export const StyledInputFile = styled.input`
  margin: 1em auto 0 auto;
`;

export const StyledLocationsDiv = styled.div``;
