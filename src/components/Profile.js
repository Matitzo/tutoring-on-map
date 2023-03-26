import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledLink } from "../styles/Link.styled";
import {
  StyledProfileContainer,
  StyledProfileWrapper,
  StyledProfileListContainer,
  StyledProfileContentContainer,
  StyledProfileUl,
} from "../styles/Profile.styled";
import MyAnnouncements from "./MyAnnouncements";

export default function Profile({ prop }) {
  return (
    <StyledProfileContainer>
      <StyledProfileWrapper>
        <StyledProfileListContainer>
          <StyledProfileUl>
            <StyledLink to="/profil/dane">
              <li>Dane</li>
            </StyledLink>
            <StyledLink to="/profil/moje-ogloszenia">
              <li>Moje ogłoszenia</li>
            </StyledLink>
          </StyledProfileUl>
        </StyledProfileListContainer>
        <StyledProfileContentContainer>
          <Routes>
            <Route path="/dane" element={<div>asd</div>}></Route>
            <Route
              path="/moje-ogloszenia"
              element={<MyAnnouncements prop={prop} />}
            ></Route>
          </Routes>
        </StyledProfileContentContainer>
      </StyledProfileWrapper>
    </StyledProfileContainer>
  );
}
