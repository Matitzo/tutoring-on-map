import React from "react";
import { StyledImageWrapper, StyledImage } from "../styles/Image.styled";
import {
  StyledAnnouncementsContainer,
  StyledAnnouncementWrapper,
  StyledAnnoucementInformations,
  StyledSubject,
  StyledPhoneNumber,
  StyledShortDescription,
  StyledPrice,
  StyledSmallText,
} from "../styles/Announcements.styled";

export function AnnouncementCard({ announcement }) {
  var image;
  try {
    image = require(`../../../server/upload_images/${announcement.image}`);
  } catch {
    image = require(`../profileImages/avatar.png`);
  }
  return (
    <StyledAnnouncementWrapper>
      <StyledImageWrapper>
        <StyledImage
          width="175px"
          border="10px"
          src={image}
          alt="Obraz ogloszenia"
        ></StyledImage>
      </StyledImageWrapper>
      <StyledAnnoucementInformations>
        <StyledSubject>{announcement.subject}</StyledSubject>
        <div>
          <h2>{announcement.author}</h2>
          <StyledPrice>
            {JSON.parse(announcement.price).join(" - ")} zł <span>/ 60min</span>
          </StyledPrice>
        </div>
        <div>
          <StyledSmallText>
            {JSON.parse(announcement.learningMode).join(", ")}
          </StyledSmallText>
          <StyledPhoneNumber>
            {announcement.phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
          </StyledPhoneNumber>
        </div>
        <StyledShortDescription>
          {announcement.shortDescription}
        </StyledShortDescription>
        <StyledSmallText>
          {JSON.parse(announcement.location)[0].address}{" "}
          {JSON.parse(announcement.location).length > 1 &&
            ` +${JSON.parse(announcement.location).length - 1}`}
        </StyledSmallText>
      </StyledAnnoucementInformations>
    </StyledAnnouncementWrapper>
  );
}
