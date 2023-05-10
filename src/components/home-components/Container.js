import Announcements from "./main-components/Announcements";
import { useLocation } from "react-router-dom";
import Map from "./main-components/Map";
import UnfoldedAnnoucement from "./main-components/UnfoldedAnnoucement";
import styles from "../../styles/Container.module.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledMapButton } from "../../styles/Button.styled";

export default function Container({
  data,
  unfoldedAnnoucement,
  setUnfoldedAnnoucement,
  isFetchingData,
}) {
  const location = new useLocation();
  const [isMobileMapOn, setIsMobileMapOn] = React.useState(false);
  const [coord, setCoord] = React.useState(
    location.pathname.includes("offers")
      ? localStorage.getItem("coord")
        ? JSON.parse(localStorage.getItem("coord"))
        : [52.06933986747059, 19.480305833934132]
      : [52.06933986747059, 19.480305833934132]
  );

  const [zoom, setZoom] = React.useState(
    location.pathname.includes("offers")
      ? localStorage.getItem("mapZoom")
        ? localStorage.getItem("mapZoom")
        : 6
      : 6
  );
  const [hoverAnnouncement, setHoverAnnouncement] = React.useState({});

  const [currentLocation, setCurrentLocation] = React.useState(
    localStorage.getItem("currentLocation")
      ? JSON.parse(localStorage.getItem("currentLocation"))
      : ""
  );

  function handleMapCoord(unfoldedAnnoucement) {
    const locationCoord = JSON.parse(unfoldedAnnoucement.location);
    localStorage.setItem(
      "coord",
      JSON.stringify([
        locationCoord[0].coordinates[1],
        locationCoord[0].coordinates[0],
      ])
    );
    setCoord([
      locationCoord[0].coordinates[1],
      locationCoord[0].coordinates[0],
    ]);
  }

  function handleMapZoom() {
    localStorage.setItem("mapZoom", 10);
    setZoom(10);
  }

  return (
    <div className={styles["container"]}>
      <Routes>
        {Object.keys(unfoldedAnnoucement).length !== 0 && (
          <Route
            path={`/offers/*`}
            element={
              <UnfoldedAnnoucement
                isMobileMapOn={isMobileMapOn}
                unfoldedAnnoucement={unfoldedAnnoucement}
                setCoord={setCoord}
                setZoom={setZoom}
                currentLocation={currentLocation}
                setCurrentLocation={(value) => setCurrentLocation(value)}
              />
            }
          ></Route>
        )}
        <Route
          path="/*"
          element={
            <Announcements
              isMobileMapOn={isMobileMapOn}
              announcements={data}
              handleUnfoldedAnnoucement={(announcement) =>
                setUnfoldedAnnoucement(announcement)
              }
              handleMapCoord={handleMapCoord}
              handleMapZoom={handleMapZoom}
              setHoverAnnouncement={setHoverAnnouncement}
              setCoord={(value) => setCoord(value)}
              setZoom={(value) => setZoom(value)}
              setCurrentLocation={(value) => setCurrentLocation(value)}
              isFetchingData={isFetchingData}
            />
          }
        ></Route>
      </Routes>
      <Map
        isMobileMapOn={isMobileMapOn}
        announcements={data}
        handleUnfoldedAnnoucement={(announcement) =>
          setUnfoldedAnnoucement(announcement)
        }
        coord={coord}
        zoom={zoom}
        setCoord={setCoord}
        handleMapZoom={handleMapZoom}
        hoverAnnouncement={hoverAnnouncement}
        setCurrentLocation={(value) => setCurrentLocation(value)}
      />
      <StyledMapButton
        onClick={() => setIsMobileMapOn((prevData) => !prevData)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-map"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
          />
        </svg>
        {!isMobileMapOn ? "Mapa" : "Zamknij"}
      </StyledMapButton>
    </div>
  );
}
