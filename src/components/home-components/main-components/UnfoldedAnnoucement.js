import styles from "../../../styles/UnfoldedAnnoucement.module.css";
import { Link } from "react-router-dom";

export default function UnfoldedAnnoucement({ unfoldedAnnoucement }) {
  return (
    <div className={styles["unfolded-annoucement"]}>
      <Link to="/">
        <span>
          <i className={`${styles["back-arrow"]}`}></i>
        </span>
      </Link>
      <img alt={`${unfoldedAnnoucement.author} zdjecie`} />
      <h2>{unfoldedAnnoucement.subject}</h2>
      <span>
        {unfoldedAnnoucement.type} {JSON.parse(unfoldedAnnoucement.scope)}
      </span>
      <h1>{unfoldedAnnoucement.author}</h1>
      <h2>{JSON.parse(unfoldedAnnoucement.learningMode)}</h2>
      <h3>{unfoldedAnnoucement.phone}</h3>
      <h3>
        {JSON.parse(unfoldedAnnoucement.location)[0].city}{" "}
        {JSON.parse(unfoldedAnnoucement.location)[0].street}{" "}
        {JSON.parse(unfoldedAnnoucement.location)[0].voivodship}
      </h3>
      <h3>{unfoldedAnnoucement.price}</h3>
      <p>{unfoldedAnnoucement.description}</p>
      <p>Dostępność:....</p>
    </div>
  );
}
