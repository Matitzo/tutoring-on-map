import React from "react";
import {
  MapContainer,
  Popup,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import icons from "../home-components/main-components/Icons";

export default function FormMap({ setLocationArray }) {
  const [position, setPosition] = React.useState(null);
  const [address, setAdress] = React.useState("");
  const [isMarker, setIsMarker] = React.useState(false);

  function addLocation(address, position) {
    setIsMarker(true);
    setLocationArray((prevData) => [
      ...prevData,
      { address: address, coordinates: [position.lng, position.lat] },
    ]);
    setTimeout(() => setIsMarker(false), 100);
  }

  function getAdress(coord) {
    fetch(
      `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=${coord.lng},${coord.lat}`
    )
      .then((res) => res.json())
      .then((data) => {
        const addressLabel =
          data.address !== undefined ? data.address.Match_addr : "Unknown";
        setAdress(addressLabel);
      })
      .catch((e) => setAdress("Unknown"));
  }

  function LocationMarker() {
    useMapEvents({
      click(e) {
        isMarker && e.preventDefault();
        setPosition(e.latlng);
        getAdress(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={icons.pointer}>
        <Popup closeOnClick={false}>
          <div
            onClick={() => addLocation(address, position)}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "2px 4px",
              cursor: "pointer",
            }}
          >
            {address}
          </div>
        </Popup>
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
