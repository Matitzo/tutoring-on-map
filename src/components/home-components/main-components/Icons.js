import L from "leaflet";
import styles from "../../../styles/Map.module.css";

const SubjectIcon = L.Icon.extend({
  options: {
    iconSize: [40, 40],
    popupAnchor: [0, -10],
  },
});

const matematykaIcon = new SubjectIcon({
  iconUrl: require("../../../images/matematykaIcon.png"),
});

const icons = { matematyka: matematykaIcon };

export default icons;
