import styled from "styled-components";

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    display: block;
    margin-top: 1em;
  }

  @media (max-width: 540px) {
    margin-left: 1em;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  
  width: ${({ width }) => width};
  aspect-ratio: 1;
  box-sizing: border-box;
  border-radius: 50%;
  padding: calc(var(--border) + var(--gap));
  
  --angle: 0deg;
  background:
    radial-gradient(farthest-side,var(--color) 97%,#0000 101%) 85.35% 85.35%,
    conic-gradient(from calc(180deg - var(--angle)/2),#0000 var(--angle),var(--color) 0),
    radial-gradient(farthest-side,var(--color) 97%,#0000 101%) 14.65% 85.35%;
  background-size: var(--border) var(--border),auto;
  background-repeat: no-repeat;
  
  -webkit-mask:
    radial-gradient(farthest-side, 
     #000  calc(99%  - calc(var(--border) + var(--gap))),
     #0000 calc(100% - calc(var(--border) + var(--gap))) 
           calc(99%  - var(--border)), 
     #000  calc(100% - var(--border)));
          mask:
    radial-gradient(farthest-side, 
     #000  calc(99%  - calc(var(--border) + var(--gap))),
     #0000 calc(100% - calc(var(--border) + var(--gap))) 
           calc(99%  - var(--border)), 
     #000  calc(100% - var(--border)));
}

@media (max-width: 768px) {
  width: 150px;
  height: 150px;
}

@media (max-width: 568px) {
  width: 130px;
  height: 130px;
}

`;
