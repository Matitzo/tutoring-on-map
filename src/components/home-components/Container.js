import Announcements from "./main-components/Announcements";
import { useLocation } from "react-router-dom";
import Map from "./main-components/Map";
import UnfoldedAnnoucement from "./main-components/UnfoldedAnnoucement";
import styles from "../../styles/Container.module.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Container({
  data,
  unfoldedAnnoucement,
  setUnfoldedAnnoucement,
}) {
  const location = new useLocation();
  // const [unfoldedAnnoucement, setUnfoldedAnnoucement] = React.useState(
  //   location.state ? location.state.announcement : {}
  // );
  const [coord, setCoord] = React.useState([
    52.06933986747059, 19.480305833934132,
  ]);
  const [zoom, setZoom] = React.useState(6);
  const [hoverAnnouncement, setHoverAnnouncement] = React.useState({});

  const [currentLocation, setCurrentLocation] = React.useState();

  function handleMapCoord(unfoldedAnnoucement) {
    const locationCoord = JSON.parse(unfoldedAnnoucement.location);
    console.log([
      locationCoord[0].coordinates[1],
      locationCoord[0].coordinates[0],
    ]);
    setCoord([
      locationCoord[0].coordinates[1],
      locationCoord[0].coordinates[0],
    ]);
  }

  function handleMapZoom() {
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
            />
          }
        ></Route>
      </Routes>
      <Map
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
    </div>
  );
}
