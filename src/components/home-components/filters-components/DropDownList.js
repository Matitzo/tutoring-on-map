import React from "react";
import { Link } from "react-router-dom";
import { StyledImageSubjectContainer } from "../../../styles/SubjectImages.styled";
import {
  DropDownListContainer,
  StyledLink,
  StyledListElement,
} from "./DropDownList.styled";
import styles from "../../../styles/DropDownList.module.css";

export default function DropDownList({
  data,
  filter,
  setFilter,
  defaultValue,
  icon,
}) {
  return (
    <DropDownListContainer filter={filter}>
      <ul>
        <StyledLink to="/">
          <StyledListElement
            selected={!filter ? true : false}
            onClick={(e) => {
              filter !== e.target.innerHTML && setFilter("");
            }}
          >
            {defaultValue}
          </StyledListElement>
        </StyledLink>

        {data.map((object) => (
          <StyledLink to="/filters">
            <StyledListElement
              selected={filter == object ? true : false}
              onClick={(e) => {
                filter !== object ? setFilter(object) : setFilter("");
                e.target.innerHTML === defaultValue && setFilter("");
              }}
            >
              {icon && (
                <StyledImageSubjectContainer
                  subject={object}
                ></StyledImageSubjectContainer>
              )}{" "}
              {object}
            </StyledListElement>
          </StyledLink>
        ))}
      </ul>
    </DropDownListContainer>
  );
}
