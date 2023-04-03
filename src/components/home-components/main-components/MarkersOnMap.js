import React from "react";
import { Marker, Popup } from "react-leaflet";
import { StyledLink } from "../../../styles/Link.styled.js";
import PopupDiv from "./Popup";
import icons from "./Icons";
//import StyledLink from "../../../styles/Link.styled";

export default function GetMarkersOnMap({
  announcements,
  handleUnfoldedAnnoucement,
  setCoord,
  handleMapZoom,
  hoverAnnouncement,
}) {
  function handlePopupLink(announcement, location) {
    setCoord([location.coordinates[1], location.coordinates[0]]);
    handleMapZoom();
    handleUnfoldedAnnoucement(announcement);
  }

  function handleMarker(announcement) {
    return announcement === hoverAnnouncement
      ? icons[`matematykaHovered`] // tutaj bd `${announcement.subject}Hovered`
      : icons[`matematyka`]; // a tutaj bd ${announcement.subject}
  }

  return announcements.map((announcement) => {
    return JSON.parse(announcement.location).map((location) => {
      return (
        <Marker
          position={[location.coordinates[1], location.coordinates[0]]}
          icon={handleMarker(announcement)}
        >
          <Popup style={{ width: "250px" }}>
            <StyledLink
              to={`offers/${announcement.author}`}
              onClick={() => handlePopupLink(announcement, location)}
            >
              <PopupDiv
                announcement={announcement}
                icon={icons[`matematyka`]}
              />
            </StyledLink>
          </Popup>
        </Marker>
      );
    });
  });
}
