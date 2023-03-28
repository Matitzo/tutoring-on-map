import { Marker, Popup } from "react-leaflet";
import { StyledLink } from "../../../styles/Link.styled.js";
import PopupDiv from "./Popup";
import icons from "./Icons";
import L from "leaflet";
import { StyledMarker } from "../../../styles/Markers.styled.js";
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

  return announcements.map((announcement) => {
    console.log(announcement === hoverAnnouncement ? "Równe" : "Nie równe");
    return JSON.parse(announcement.location).map((location) => {
      return (
        <Marker
          position={[location.coordinates[1], location.coordinates[0]]}
          icon={icons[`matematyka`]} // tutaj bd ${announcement.subject}
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
