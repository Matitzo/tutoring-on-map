import styles from "../../styles/Map.module.css";
import React from "react";
import {
  MapContainer,
  Popup,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

export default function FormMap() {
  const [position, setPosition] = React.useState(null);
  const [address, setAdress] = React.useState("");

  function getAdress(coord) {
    fetch(
      `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=${coord.lng},${coord.lat}`
    )
      .then((res) => res.json())
      .then((data) => {
        const addressLabel =
          data.address !== undefined ? data.address.Match_addr : "Unknown";
        setAdress(addressLabel);
      });
  }

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        getAdress(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>{address}</Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      style={{ height: "100%" }}
      center={[52.06933986747059, 19.480305833934132]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
    </MapContainer>
  );
}
