import { Link } from "react-router-dom";
import styles from "../styles/DropDownList.module.css";

export default function DropDownList({ data, filter, setFilter }) {
  return (
    // na divie onClick zmiana state i bd chowac lub sie pojawiac
    // na p zrobic onClick by zmienial url strony (czyli dac Link), dac jakis state i na jego zmianie bd useEffect sie odpalal
    // i pobieral dane pod innym adresem api
    // w roucie wtedy mozliwe ze bd trzeba usunac exact przy stronei glownej i przeniesc ten route na sam koniec by nie bylo bledu
    <div className={styles["drop-down-list"]} style={{ display: "block" }}>
      {data.map((object) => (
        <Link to="/filters">
          <p
            style={
              filter == object
                ? { border: "1px solid green" }
                : { border: "none" }
            }
            // value={object}
            onClick={(e) => {
              // to na dole jest do zmiany bo w wersji koncowej to niebd innerHtTML
              // pozatym zrobic by przyrownalo do state`a i jesli bd takie same to ustawialo setFilter na ""
              filter !== e.target.innerHTML
                ? setFilter(e.target.innerHTML)
                : setFilter("");
              // koniec komentarza
            }}
          >
            {object}
          </p>
        </Link>
      ))}
    </div>
  );
}
