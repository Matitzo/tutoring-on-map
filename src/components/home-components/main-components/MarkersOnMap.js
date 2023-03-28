import { Marker, Popup } from "react-leaflet";
import { StyledLink } from "../../../styles/Link.styled.js";
import PopupDiv from "./Popup";
import icons from "./Icons";
//import StyledLink from "../../../styles/Link.styled";

export default function GetMarkersOnMap({
  announcements,
  handleUnfoldedAnnoucement,
}) {
  return announcements.map((announcement) => {
    return JSON.parse(announcement.location).map((location) => {
      return (
        <Marker
          position={[location.coordinates[1], location.coordinates[0]]}
          icon={icons[`matematyka`]} // tutaj bd ${announcement.subject}
        >
          <Popup style={{ width: "250px" }}>
            <StyledLink
              to={`offers/${announcement.author}`}
              onClick={() => handleUnfoldedAnnoucement(announcement)}
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
