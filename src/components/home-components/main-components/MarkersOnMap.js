import React from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { useMap } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import PopupDiv from "./Popup";
import icons from "./Icons";
import clusters from "./map-components/clusters.js";
import subjects from "../../../data/subjects.js";
import ClusterPopup from "./map-components/ClusterPopup.js";
import "./map-components/clusters.css";
//import StyledLink from "../../../styles/Link.styled";

export default function GetMarkersOnMap({
  announcements,
  handleUnfoldedAnnoucement,
  setCoord,
  handleMapZoom,
  hoverAnnouncement,
  setCurrentLocation,
}) {
  const map = useMap();
  const navigate = new useNavigate();
  const [updatePopups, setUpdatePopups] = React.useState([]);

  function createClusterCustomIconHovered(cluster, subject) {
    return L.divIcon({
      html: `<div class="count"><span>${cluster.getChildCount()}</span></div>`,
      className: `cluster-marker ${subject.split(" ").slice(-1)} hover`,
      iconSize: L.point(40, 40, true),
    });
  }

  function createClusterCustomIcon(cluster, subject) {
    return L.divIcon({
      html: `<div class="count"><span>${cluster.getChildCount()}</span></div>`,
      className: `cluster-marker ${subject.split(" ").slice(-1)}`,
      iconSize: L.point(40, 40, true),
    });
  }

  function handlePopupLink(announcement, location) {
    setCoord([location.coordinates[1], location.coordinates[0]]);
    handleMapZoom();
    handleUnfoldedAnnoucement(announcement);
    setCurrentLocation(location);
    navigate(`offers/${announcement.author}`);
  }

  function handleMarker(announcement) {
    return announcement === hoverAnnouncement
      ? icons[`${announcement.subject}Hovered`]
      : icons[`${announcement.subject}`];
  }

  React.useEffect(() => {
    subjects.map((subject) => {
      clusters[`${subject}`].clearLayers();
    });

    announcements.map((announcement) => {
      JSON.parse(announcement.location).map((location) => {
        const marker = new L.Marker(
          [location.coordinates[1], location.coordinates[0]],
          {
            icon: handleMarker(announcement),
          }
        );
        if (announcement == hoverAnnouncement) {
          clusters[announcement.subject].options.iconCreateFunction = (
            cluster
          ) => createClusterCustomIconHovered(cluster, announcement.subject);
        } else {
          clusters[announcement.subject].options.iconCreateFunction = (
            cluster
          ) => createClusterCustomIcon(cluster, announcement.subject);
        }
        marker
          .addTo(clusters[announcement.subject])
          .bindPopup(
            ReactDOMServer.renderToString(
              <PopupDiv
                announcement={announcement}
                location={location}
                icon={icons[`${announcement.subject}`]}
              />
            )
          )
          .on("click", () =>
            setUpdatePopups(
              Array.from(
                document.getElementsByClassName("markers-single-popup")
              )
            )
          );
      });
    });
  }, [announcements, hoverAnnouncement]);

  React.useEffect(() => {
    updatePopups.map((popup, index) => {
      console.log(popup);
      popup.removeEventListener("click", popupListener);
      popup.addEventListener("click", popupListener);
    });
  }, [updatePopups]);

  function clusterListener(a) {
    a.layer
      .bindPopup(ReactDOMServer.renderToString(<ClusterPopup a={a} />))
      .openPopup();
    setUpdatePopups(
      Array.from(document.getElementsByClassName("markers-single-popup"))
    );
  }

  function popupListener(e) {
    handlePopupLink(
      JSON.parse(e.currentTarget.getAttribute("announcement")),
      JSON.parse(e.currentTarget.getAttribute("location"))
    );
  }

  React.useEffect(() => {
    subjects.map((subject) => {
      map.addLayer(clusters[subject]);
      clusters[`${subject}`].on("clusterclick", clusterListener);
    });
  }, []);

  return <div></div>;
}
