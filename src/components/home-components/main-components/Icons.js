import L from "leaflet";
import styles from "../../../styles/Marker.module.css";
//import styles from "../../../styles/Map.module.css";

const SubjectIcon = L.Icon.extend({
  options: {
    iconSize: [40, 40],
  },
});

const pointerIcon = new SubjectIcon({
  iconUrl: require("../../../images/pointer.png"),
  className: "",
  iconAnchor: [19, 35],
  popupAnchor: [2, -20],
});

const matematykaIcon = new SubjectIcon({
  iconUrl: require("../../../images/matematyka.png"),
  className: "",
});

const matematykaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/matematyka.png"),
  className: styles["marker"],
});

const biologiaIcon = new SubjectIcon({
  iconUrl: require("../../../images/biologia.png"),
  className: "",
});

const biologiaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/biologia.png"),
  className: styles["marker"],
});

const chemiaIcon = new SubjectIcon({
  iconUrl: require("../../../images/chemia.png"),
  className: "",
});

const chemiaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/chemia.png"),
  className: styles["marker"],
});

const fizykaIcon = new SubjectIcon({
  iconUrl: require("../../../images/fizyka.png"),
  className: "",
});

const fizykaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/fizyka.png"),
  className: styles["marker"],
});

const geografiaIcon = new SubjectIcon({
  iconUrl: require("../../../images/geografia.png"),
  className: "",
});

const geografiaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/geografia.png"),
  className: styles["marker"],
});

const historiaIcon = new SubjectIcon({
  iconUrl: require("../../../images/historia.png"),
  className: "",
});

const historiaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/historia.png"),
  className: styles["marker"],
});

const informatykaIcon = new SubjectIcon({
  iconUrl: require("../../../images/informatyka.png"),
  className: "",
});

const informatykaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/informatyka.png"),
  className: styles["marker"],
});

const muzykaIcon = new SubjectIcon({
  iconUrl: require("../../../images/muzyka.png"),
  className: "",
});

const muzykaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/muzyka.png"),
  className: styles["marker"],
});

const przyrodaIcon = new SubjectIcon({
  iconUrl: require("../../../images/przyroda.png"),
  className: "",
});

const przyrodaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/przyroda.png"),
  className: styles["marker"],
});

const religiaIcon = new SubjectIcon({
  iconUrl: require("../../../images/religia.png"),
  className: "",
});

const religiaIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/religia.png"),
  className: styles["marker"],
});

const wiedzaOSpoleczenstwieIcon = new SubjectIcon({
  iconUrl: require("../../../images/wos.png"),
  className: "",
});

const wiedzaOSpoleczenstwieIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/wos.png"),
  className: styles["marker"],
});

const jezykPolskiIcon = new SubjectIcon({
  iconUrl: require("../../../images/j_polski.png"),
  className: "",
});

const jezykPolskiIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/j_polski.png"),
  className: styles["marker"],
});

const jezykAngielskiIcon = new SubjectIcon({
  iconUrl: require("../../../images/j_angielski.png"),
  className: "",
});

const jezykAngielskiIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/j_angielski.png"),
  className: styles["marker"],
});

const jezykNiemieckiIcon = new SubjectIcon({
  iconUrl: require("../../../images/j_niemiecki.png"),
  className: "",
});

const jezykNiemieckiIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/j_niemiecki.png"),
  className: styles["marker"],
});

const jezykFrancuskiIcon = new SubjectIcon({
  iconUrl: require("../../../images/j_francuski.png"),
  className: "",
});

const jezykFrancuskiIconHovered = new SubjectIcon({
  iconUrl: require("../../../images/j_francuski.png"),
  className: styles["marker"],
});

const icons = {
  pointer: pointerIcon,
  matematyka: matematykaIcon,
  matematykaHovered: matematykaIconHovered,
  bilogia: biologiaIcon,
  biologiaHovered: biologiaIconHovered,
  chemia: chemiaIcon,
  chemiaHovered: chemiaIconHovered,
  fizyka: fizykaIcon,
  fizykaHovered: fizykaIconHovered,
  geografia: geografiaIcon,
  geografiaHovered: geografiaIconHovered,
  historia: historiaIcon,
  historiaHovered: historiaIconHovered,
  informatyka: informatykaIcon,
  informatykaHovered: informatykaIconHovered,
  muzyka: muzykaIcon,
  muzykaHovered: muzykaIconHovered,
  przyroda: przyrodaIcon,
  przyrodaHovered: przyrodaIconHovered,
  religia: religiaIcon,
  religiaHovered: religiaIconHovered,
  "wiedza o społeczeństwie": wiedzaOSpoleczenstwieIcon,
  "wiedza o społeczeństwieHovered": wiedzaOSpoleczenstwieIconHovered,
  "j. polski": jezykPolskiIcon,
  "j. polskiHovered": jezykPolskiIconHovered,
  "j. angielski": jezykAngielskiIcon,
  "j. angielskiHovered": jezykAngielskiIconHovered,
  "j. niemiecki": jezykNiemieckiIcon,
  "j. niemieckiHovered": jezykNiemieckiIconHovered,
  "j. francuski": jezykFrancuskiIcon,
  "j. francuskiHovered": jezykFrancuskiIconHovered,
};

export default icons;
