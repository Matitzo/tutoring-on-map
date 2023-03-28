import React from "react";
import {
  StyledPopupContainer,
  StyledPopupInfoWrapper,
  StylelPopupPrice,
  StyledPopupAuthor,
  StyledPopupImg,
} from "../../../styles/Popup.styled";

export default function PopupDiv({ announcement, icon }) {
  return (
    <StyledPopupContainer>
      <StyledPopupImg src={icon.options.iconUrl} alt="Ikona przedmiotu" />
      <StyledPopupInfoWrapper>
        <StylelPopupPrice>{announcement.author}</StylelPopupPrice>
        <StyledPopupAuthor>
          {announcement.price} <span>zł/h</span>
        </StyledPopupAuthor>
      </StyledPopupInfoWrapper>
    </StyledPopupContainer>
  );
}
