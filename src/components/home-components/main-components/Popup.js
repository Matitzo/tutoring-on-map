import React from "react";
import {
  StyledPopupContainer,
  StyledPopupInfoWrapper,
  StylelPopupPrice,
  StyledPopupAuthor,
  StyledPopupImg,
} from "../../../styles/Popup.styled";
import "./map-components/clusters.css";

export default function PopupDiv({ announcement, location, icon }) {
  return (
    <div
      className="markers-single-popup"
      announcement={JSON.stringify(announcement)}
      location={JSON.stringify(location)}
    >
      <StyledPopupContainer>
        <StyledPopupImg src={icon.options.iconUrl} alt="Ikona przedmiotu" />
        <StyledPopupInfoWrapper>
          <StyledPopupAuthor>{announcement.author}</StyledPopupAuthor>
          <StylelPopupPrice>
            {JSON.parse(announcement.price).join(" - ")} <span>zł/h</span>
          </StylelPopupPrice>
        </StyledPopupInfoWrapper>
      </StyledPopupContainer>
    </div>
  );
}
