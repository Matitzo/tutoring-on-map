import { Link } from "react-router-dom";
import React from "react";
import {
  DropDownListContainer,
  StyledCenteredDiv,
} from "./DropDownList.styled";
import { StyledSmallInout } from "../../../styles/Input.styled";
import { StyledSmallButton } from "../../../styles/Button.styled";

export default function CostFilter({ setCostFilter }) {
  const [minPrice, setMinPrice] = React.useState();
  const [maxPrice, setMaxPrice] = React.useState();

  return (
    <DropDownListContainer>
      <StyledCenteredDiv>
        <StyledSmallInout
          placeholder="Od"
          name="min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ width: "50px" }}
        ></StyledSmallInout>
        <span> - </span>
        <StyledSmallInout
          placeholder="Do"
          name="max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ width: "50px" }}
        ></StyledSmallInout>
      </StyledCenteredDiv>
      <Link to="/filters">
        <StyledSmallButton onClick={() => setCostFilter([minPrice, maxPrice])}>
          Ok
        </StyledSmallButton>
      </Link>
    </DropDownListContainer>
  );
}
