import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import icons from "./Icons";

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
          <Popup>
            <Link
              to={`offers/${announcement.author}`}
              onClick={() => handleUnfoldedAnnoucement(announcement)}
            >
              {announcement.author}
            </Link>
          </Popup>
        </Marker>
      );
    });
  });
}
