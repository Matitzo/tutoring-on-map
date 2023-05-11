import { Link } from "react-router-dom";
import React from "react";
import {
  DropDownListContainer,
  StyledCenteredDiv,
  StyledFilterCostButtonsWrapper,
} from "./DropDownList.styled";
import { StyledSmallInout } from "../../../styles/Input.styled";
import { StyledSmallButton } from "../../../styles/Button.styled";
import { StyledLink } from "./DropDownList.styled";

export default function CostFilter({ setCostFilter }) {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);

  return (
    <DropDownListContainer>
      <StyledCenteredDiv>
        <StyledSmallInout
          placeholder="Od"
          name="min"
          type="number"
          min="0"
          onKeyPress={(event) => {
            if (/[+,-]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          value={minPrice}
          onChange={(e) => {
            e.target.value.length <= 3 && setMinPrice(e.target.value);
          }}
          style={{ width: "50px" }}
        ></StyledSmallInout>
        <span> - </span>
        <StyledSmallInout
          placeholder="Do"
          name="max"
          type="number"
          min="0"
          onKeyPress={(event) => {
            if (/[+,-]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          value={maxPrice}
          onChange={(e) =>
            e.target.value.length <= 3 && setMaxPrice(e.target.value)
          }
          style={{ width: "50px" }}
        ></StyledSmallInout>
      </StyledCenteredDiv>
      <StyledFilterCostButtonsWrapper>
        <StyledLink to="/filters">
          <StyledSmallButton
            style={{ margin: "0" }}
            onClick={() =>
              setCostFilter([parseInt(minPrice), parseInt(maxPrice)])
            }
          >
            Ok
          </StyledSmallButton>
        </StyledLink>
        <span>
          <StyledSmallButton onClick={() => setCostFilter(["", ""])}>
            Reset
          </StyledSmallButton>
        </span>
      </StyledFilterCostButtonsWrapper>
    </DropDownListContainer>
  );
}
