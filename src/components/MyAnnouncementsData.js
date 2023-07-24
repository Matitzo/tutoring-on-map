import React from "react";
import {
  MyAnnouncementsDataContainer,
  StyledRoundDiv,
  StyledDataContainer,
} from "../styles/MyAnnouncementsData.styled";

export default function MyAnnouncementsData({
  profilData,
  nrOfAnnouncements,
  nrOfLocations,
}) {
  return (
    <MyAnnouncementsDataContainer>
      <StyledDataContainer>
        <h1>{profilData.length > 0 && profilData[0].login}</h1>
        <h3>{profilData.length > 0 && profilData[0].email}</h3>
      </StyledDataContainer>
      <StyledDataContainer>
        <p>Liczba ogłoszeń</p>
        <StyledRoundDiv>
          <p>{nrOfAnnouncements}</p>
        </StyledRoundDiv>
      </StyledDataContainer>
      <StyledDataContainer>
        <p>Liczba lokalizacji</p>
        <StyledRoundDiv>
          <p>{nrOfLocations}</p>
        </StyledRoundDiv>
      </StyledDataContainer>
    </MyAnnouncementsDataContainer>
  );
}
