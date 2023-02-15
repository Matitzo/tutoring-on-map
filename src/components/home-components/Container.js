import Announcements from "./main-components/Announcements";
import Map from "./main-components/Map";
import UnfoldedAnnoucement from "./main-components/UnfoldedAnnoucement";
import styles from "../../styles/Container.module.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Container({ data }) {
  const [unfoldedAnnoucement, setUnfoldedAnnoucement] = React.useState({});

  return (
    <div className={styles["container"]}>
      <Routes>
        <Route
          path={`/offers/${unfoldedAnnoucement.author}`}
          element={
            <UnfoldedAnnoucement unfoldedAnnoucement={unfoldedAnnoucement} />
          }
        ></Route>
        <Route
          path="/*"
          element={
            <Announcements
              announcements={data}
              handleUnfoldedAnnoucement={(announcement) =>
                setUnfoldedAnnoucement(announcement)
              }
            />
          }
        ></Route>
      </Routes>
      {/* <Map
        announcements={data}
        handleUnfoldedAnnoucement={(announcement) =>
          setUnfoldedAnnoucement(announcement)
        }
      /> */}
    </div>
  );
}
