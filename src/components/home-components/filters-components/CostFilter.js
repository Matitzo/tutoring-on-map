import { Link } from "react-router-dom";
import React from "react";
import {
  DropDownListContainer,
  StyledCenteredDiv,
} from "./DropDownList.styled";
import { StyledSmallInout } from "../../../styles/Input.styled";
import { StyledSmallButton } from "../../../styles/Button.styled";

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
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ width: "50px" }}
        ></StyledSmallInout>
        <span> - </span>
        <StyledSmallInout
          placeholder="Do"
          name="max"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ width: "50px" }}
        ></StyledSmallInout>
      </StyledCenteredDiv>
      <Link to="/filters">
        <StyledSmallButton
          onClick={() =>
            setCostFilter([parseInt(minPrice), parseInt(maxPrice)])
          }
        >
          Ok
        </StyledSmallButton>
      </Link>
    </DropDownListContainer>
  );
}
