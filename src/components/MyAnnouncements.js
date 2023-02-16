import styles from "../styles/Announcements.module.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import React from "react";

export default function MyAnnouncements({ prop }) {
  //const [myAnnouncements, setMyAnnouncements] = React.useState("");

  console.log("wyrenderowalo mnie");

  return (
    <div>
      {prop.map((announcement) => {
        return (
          <Link
            key={announcement.author_id}
            to={`offers/${announcement.author}`}
            className={styles["announcements__announcement"]}
            // onClick={() => handleUnfoldedAnnoucement(announcement)}
          >
            <img alt="To jest obraz"></img>
            <div>
              <h4>{announcement.subject}</h4>
              <h3>{announcement.author}</h3>
              <p>{announcement.description}</p>
              <span>{JSON.parse(announcement.learningMode)}</span>
              <p>
                {JSON.parse(announcement.location)[0].city}{" "}
                {JSON.parse(announcement.location)[0].street}{" "}
                {JSON.parse(announcement.location)[0].voivodship}
              </p>
            </div>
            <div>
              <span>{announcement.price}</span>
              <p>{announcement.phone}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
