import { StyledLink } from "../../../styles/Link.styled";
import {
  StyledAnnouncementsContainer,
  StyledAnnouncementWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledAnnoucementInformations,
  StyledSubject,
  StyledPhoneNumber,
  StyledDescription,
  StyledPrice,
  StyledSmallText,
} from "../../../styles/Announcements.styled";

export default function Announcements({
  announcements,
  handleUnfoldedAnnoucement,
}) {
  return (
    <StyledAnnouncementsContainer>
      {announcements.map((announcement) => {
        const image = require(`../../../profileImages/${"profileImage1.jpg"}`);
        return (
          <StyledLink
            key={announcement.author_id}
            to={`offers/${announcement.author}`}
            onClick={() => handleUnfoldedAnnoucement(announcement)}
          >
            <StyledAnnouncementWrapper>
              <StyledImageWrapper>
                <StyledImage src={image} alt="Obraz ogloszenia"></StyledImage>
              </StyledImageWrapper>
              <StyledAnnoucementInformations>
                <StyledSubject>{announcement.subject}</StyledSubject>
                <div>
                  <h2>{announcement.author}</h2>
                  <StyledPrice>
                    {announcement.price} zł <span>/ 60min</span>
                  </StyledPrice>
                </div>
                <div>
                  <StyledSmallText>
                    {JSON.parse(announcement.learningMode).join(", ")}
                  </StyledSmallText>
                  <StyledPhoneNumber>
                    {announcement.phone.replace(
                      /(\d{3})(\d{3})(\d{3})/,
                      "$1 $2 $3"
                    )}
                  </StyledPhoneNumber>
                </div>
                <StyledDescription>
                  {announcement.description}
                </StyledDescription>
                <StyledSmallText>
                  {JSON.parse(announcement.location)[0].address}{" "}
                  {JSON.parse(announcement.location).length > 1 &&
                    ` +${JSON.parse(announcement.location).length - 1}`}
                </StyledSmallText>
              </StyledAnnoucementInformations>
            </StyledAnnouncementWrapper>
          </StyledLink>
        );
      })}
    </StyledAnnouncementsContainer>
  );
}
