import GetMarkersOnMap from "./MarkersOnMap";
import styles from "../styles/Map.module.css";
import { useMap, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ announcements, handleUnfoldedAnnoucement }) {
  return (
    <MapContainer
      className={styles["map"]}
      center={[52.06933986747059, 19.480305833934132]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GetMarkersOnMap
        announcements={announcements}
        handleUnfoldedAnnoucement={(announcement) =>
          handleUnfoldedAnnoucement(announcement)
        }
      />
    </MapContainer>
  );
}
