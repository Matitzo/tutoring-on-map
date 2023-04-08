import styled from "styled-components";

export const StyledLocationList = styled.ul`
  display: ${(props) => (props.isListLocationVisible ? "block" : "none")};
  position: absolute;
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0 0;
  font-weight: bold;
  color: green;
  background: linear-gradient(to right, rgb(250, 255, 209), rgb(161, 255, 206));
  border: 1px solid green;
  border-radius: 10px;
`;

export const StyledLocationListElement = styled.li`
  padding: 0.3em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
