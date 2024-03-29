import React from "react";
import GetMarkersOnMap from "./MarkersOnMap";
import styles from "../../../styles/Map.module.css";
import { useMap, MapContainer, TileLayer } from "react-leaflet";
import { useLocation } from "react-router-dom";
import { StyledMapWrapper } from "../../../styles/MapWrapper.styled";

export default function Map({
  isMobileMapOn,
  setIsMobileMapOn,
  announcements,
  handleUnfoldedAnnoucement,
  coord,
  setCoord,
  zoom,
  handleMapZoom,
  hoverAnnouncement,
  setCurrentLocation,
}) {
  const location = useLocation();

  function SetMapView() {
    const map = useMap();
    location.pathname !== "/"
      ? map.setView(coord, zoom)
      : map.setView([52.06933986747059, 19.480305833934132], 6);
  }

  return (
    <StyledMapWrapper isMobileMapOn={isMobileMapOn}>
      <MapContainer
        className={`${styles.map}`}
        center={coord}
        zoom={zoom}
        scrollWheelZoom={true}
        maxZoom={18}
      >
        <SetMapView />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GetMarkersOnMap
          announcements={announcements}
          handleUnfoldedAnnoucement={(announcement) =>
            handleUnfoldedAnnoucement(announcement)
          }
          setCoord={setCoord}
          handleMapZoom={handleMapZoom}
          hoverAnnouncement={hoverAnnouncement}
          setCurrentLocation={(value) => setCurrentLocation(value)}
          setIsMobileMapOn={setIsMobileMapOn}
        />
      </MapContainer>
    </StyledMapWrapper>
  );
}
