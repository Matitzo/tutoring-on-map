import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { StyledImageWrapper, StyledImage } from "../styles/Image.styled";
import {
  StyledAnnouncementWrapper,
  StyledAnnoucementInformations,
  StyledSubject,
  StyledPhoneNumber,
  StyledShortDescription,
  StyledPrice,
  StyledSmallText,
  StyledAnnouncementInformationsAuthorPriceContainer,
  StyledAnnouncementInformationsPhoneContainer,
  StyledLearningMode,
} from "../styles/Announcements.styled";
import { Telephone, GeoAlt } from "react-bootstrap-icons";

export function AnnouncementCard({ announcement }) {
  const storage = getStorage();
  const starsRef = ref(storage, `images/${announcement.image}`);
  const [imageUrl, setImageUrl] = React.useState(
    require(`../profileImages/avatar.png`)
  );
  //var image;
  getDownloadURL(starsRef)
    .then((url) => {
      setImageUrl(url);
    })
    .catch((e) => {
      console.log(e);
      setImageUrl("");
    });
  //image = require(`../../../server/upload_images/${announcement.image}`);

  return (
    <StyledAnnouncementWrapper>
      <StyledImageWrapper>
        <StyledImage
          width="175px"
          border="10px"
          src={
            announcement.image !== "avatar.png"
              ? imageUrl
              : require(`../profileImages/avatar.png`)
          }
          alt="Obraz ogloszenia"
        ></StyledImage>
      </StyledImageWrapper>
      <StyledAnnoucementInformations>
        <StyledSubject>{announcement.subject}</StyledSubject>
        <StyledAnnouncementInformationsAuthorPriceContainer>
          <h2>{announcement.author}</h2>
          <StyledPrice>
            {JSON.parse(announcement.price).join(" - ")} zł <span>/ 60min</span>
          </StyledPrice>
        </StyledAnnouncementInformationsAuthorPriceContainer>
        <StyledAnnouncementInformationsPhoneContainer>
          <StyledLearningMode>
            {JSON.parse(announcement.learningMode).join(", ")}
          </StyledLearningMode>
          <StyledPhoneNumber>
            <Telephone />{" "}
            {announcement.phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
          </StyledPhoneNumber>
        </StyledAnnouncementInformationsPhoneContainer>
        <StyledShortDescription>
          {announcement.shortDescription}
        </StyledShortDescription>
        <StyledSmallText>
          <GeoAlt /> {JSON.parse(announcement.location)[0].address}
          {JSON.parse(announcement.location).length > 1 &&
            ` +${JSON.parse(announcement.location).length - 1}`}
        </StyledSmallText>
      </StyledAnnoucementInformations>
    </StyledAnnouncementWrapper>
  );
}
