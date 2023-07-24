import React from "react";
import { Routes, Route } from "react-router-dom";
import MyAnnouncements from "./MyAnnouncements";
import MyAnnouncementsData from "./MyAnnouncementsData";
import ProfilData from "./ProfilData";
import { StyledLink } from "../styles/Link.styled";
import {
  StyledProfileContainer,
  StyledProfileWrapper,
  StyledProfileListContainer,
  StyledProfileContentContainer,
  StyledProfileUl,
} from "../styles/Profile.styled";

export default function Profile({ prop }) {
  return (
    <StyledProfileContainer>
      <StyledProfileWrapper>
        <StyledProfileContentContainer>
          <Routes>
            <Route path="/dane" element={<ProfilData prop={prop} />}></Route>
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
