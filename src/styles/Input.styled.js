import styled from "styled-components";

export const StyledInput = styled.input`
  width: 210px;
  color: ${({ theme }) => theme.filters.colors.hoverColor};
  padding: 0.8em;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.filters.colors.hoverColor};
  border-radius: 5px;
`;

export const StyledSmallInout = styled(StyledInput)`
  font-size: 12px;
  padding: 0.4em 0.8em;
`;
