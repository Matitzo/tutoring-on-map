import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { StyledImage, StyledImageWrapper } from "../../../styles/Image.styled";
import {
  StyledUnfoldedAnnouncementContainer,
  StyledBackArrow,
  StyledHeadContainer,
  StyledHeadInfo,
  StyledPrice,
  StyledSpan,
  StyledParagraph,
  StyledLocation,
} from "../../../styles/UnfoldedAnnouncement.styled";

export default function UnfoldedAnnoucement({ unfoldedAnnoucement }) {
  var image;
  try {
    image = require(`../../../profileImages/${unfoldedAnnoucement.image}`);
  } catch {
    image = require(`../../../profileImages/avatar.png`);
  }
  return (
    <StyledUnfoldedAnnouncementContainer>
      <Link to="/">
        <span>
          <StyledBackArrow></StyledBackArrow>
        </span>
      </Link>
      <StyledHeadContainer>
        <StyledImageWrapper>
          <StyledImage
            width="200px"
            border="15px"
            src={image}
            alt={`${unfoldedAnnoucement.author} zdjecie`}
          />
        </StyledImageWrapper>
        <StyledHeadInfo>
          <h3>{unfoldedAnnoucement.subject}</h3>
          <h2>{unfoldedAnnoucement.author}</h2>
          <StyledPrice>
            {unfoldedAnnoucement.price} zł <span>/ 60min</span>
            <StyledParagraph>
              {unfoldedAnnoucement.phone.replace(
                /(\d{3})(\d{3})(\d{3})/,
                "$1 $2 $3"
              )}
            </StyledParagraph>
          </StyledPrice>
          <StyledParagraph>
            <StyledSpan>Tryb nauki: </StyledSpan>
            {JSON.parse(unfoldedAnnoucement.learningMode).join(", ")}
          </StyledParagraph>
          <StyledParagraph>
            {" "}
            <StyledSpan>Zakres materiału: </StyledSpan>{" "}
            {JSON.parse(unfoldedAnnoucement.scope).join(", ")}
          </StyledParagraph>
          <StyledLocation>
            {JSON.parse(unfoldedAnnoucement.location)[0].address}
          </StyledLocation>
        </StyledHeadInfo>
      </StyledHeadContainer>
      {parse(unfoldedAnnoucement.description)}
    </StyledUnfoldedAnnouncementContainer>
  );
}
