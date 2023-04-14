import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import ClusterPopup from "./ClusterPopup";
import subjects from "../../../../data/subjects";
import "./clusters.css";

function createClusterCustomIcon(cluster, subject) {
  return L.divIcon({
    html: `<div class="count"><span>${cluster.getChildCount()}</span></div>`,
    className: `cluster-marker ${subject}`,
    iconSize: L.point(40, 40, true),
  });
}

function addPopups(subject) {
  clusters[`${subject}`].on("clusterclick", function (a) {
    a.layer
      .bindPopup(ReactDOMServer.renderToString(<ClusterPopup a={a} />))
      .openPopup();
  });
}

const matematykaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const informatykaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const fizykaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const chemiaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const biologiaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const jezykPolskiCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const jezykAngielskiCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const jezykNiemieckiCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const jezykFrancuskiCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const przyrodaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const geografiaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const historiaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const wiedzaOSpoleczenstwieCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const muzykaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const religiaCluster = L.markerClusterGroup({
  zoomToBoundsOnClick: false,
});

const clusters = {
  matematyka: matematykaCluster,
  biologia: biologiaCluster,
  chemia: chemiaCluster,
  fizyka: fizykaCluster,
  geografia: geografiaCluster,
  historia: historiaCluster,
  informatyka: informatykaCluster,
  muzyka: muzykaCluster,
  przyroda: przyrodaCluster,
  religia: religiaCluster,
  "wiedza o społeczeństwie": wiedzaOSpoleczenstwieCluster,
  "j. polski": jezykPolskiCluster,
  "j. angielski": jezykAngielskiCluster,
  "j. niemiecki": jezykNiemieckiCluster,
  "j. francuski": jezykFrancuskiCluster,
};

//subjects.map((subject) => addPopups(subject));

export default clusters;
