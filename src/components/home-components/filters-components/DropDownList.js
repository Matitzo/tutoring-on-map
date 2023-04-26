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
    // na divie onClick zmiana state i bd chowac lub sie pojawiac
    // na p zrobic onClick by zmienial url strony (czyli dac Link), dac jakis state i na jego zmianie bd useEffect sie odpalal
    // i pobieral dane pod innym adresem api
    // w roucie wtedy mozliwe ze bd trzeba usunac exact przy stronei glownej i przeniesc ten route na sam koniec by nie bylo bledu
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
                // to na dole jest do zmiany bo w wersji koncowej to niebd innerHtTML
                // pozatym zrobic by przyrownalo do state`a i jesli bd takie same to ustawialo setFilter na ""
                filter !== object ? setFilter(object) : setFilter("");
                e.target.innerHTML === defaultValue && setFilter("");
                // koniec komentarza
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
