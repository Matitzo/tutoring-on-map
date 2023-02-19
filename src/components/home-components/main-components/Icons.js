import L from "leaflet";

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
