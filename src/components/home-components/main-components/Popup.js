import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "../../../styles/Link.styled";
import { useNavigate } from "react-router-dom";
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
          <StylelPopupPrice>{announcement.author}</StylelPopupPrice>
          <StyledPopupAuthor>
            {announcement.price} <span>zł/h</span>
          </StyledPopupAuthor>
        </StyledPopupInfoWrapper>
      </StyledPopupContainer>
    </div>
  );
}
