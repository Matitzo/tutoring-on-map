import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { StyledImage, StyledImageWrapper } from "../../../styles/Image.styled";
import {
  StyledUnfoldedAnnouncementContainer,
  StyledHeadContainer,
  StyledHeadInfo,
  StyledPrice,
  StyledSpan,
  StyledParagraph,
  StyledLocation,
  StyledDesriptionContainer,
} from "../../../styles/UnfoldedAnnouncement.styled";
import { StyledBackArrow } from "../../../styles/BackArrow.styled";

export default function UnfoldedAnnoucement({
  unfoldedAnnoucement,
  setCoord,
  setZoom,
}) {
  var image;
  try {
    image = require(`../../../profileImages/${unfoldedAnnoucement.image}`);
  } catch {
    image = require(`../../../profileImages/avatar.png`);
  }

  function handleBackArrow() {
    setCoord([52.06933986747059, 19.480305833934132]);
    setZoom(6);
  }

  return (
    <StyledUnfoldedAnnouncementContainer>
      <Link to="/">
        <StyledBackArrow onClick={() => handleBackArrow()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </StyledBackArrow>
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
      <StyledDesriptionContainer>
        {parse(unfoldedAnnoucement.description)}
      </StyledDesriptionContainer>
    </StyledUnfoldedAnnouncementContainer>
  );
}
