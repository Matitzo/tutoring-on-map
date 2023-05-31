import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
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
  const storage = getStorage();
  const starsRef = ref(storage, `images/${announcement.image}`);
  const [imageUrl, setImageUrl] = React.useState(
    require(`../profileImages/avatar.png`)
  );
  //var image;
  try {
    getDownloadURL(starsRef).then((url) => {
      setImageUrl(url);
    });
    //image = require(`../../../server/upload_images/${announcement.image}`);
  } catch {
    setImageUrl(``);
    //image = require(`../profileImages/avatar.png`);
  }

  return (
    <StyledAnnouncementWrapper>
      <StyledImageWrapper>
        <StyledImage
          width="175px"
          border="10px"
          src={
            announcement.image !== "avatar"
              ? imageUrl
              : require(`../profileImages/avatar.png`)
          }
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
