import styles from "../styles/Announcements.module.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
//import deleteAnnouncement from "./myAnnoucements-components/deleteAnnouncement";
const cookies = new Cookies();

export default function MyAnnouncements({ prop }) {
  const [myAnnouncements, setMyAnnouncements] = React.useState([]);
  const userId = prop;
  const navigate = new useNavigate();
  console.log("wyrenderowalo my announcements");

  function editAnnouncement(announcement) {
    navigate("/edytuj-ogloszenie", {
      state: {
        announcementId: announcement.announcementId,
        author: announcement.author,
        userId: userId,
        phoneNumber: announcement.phone,
        subject: announcement.subject,
        price: announcement.price,
        learningModeValues: JSON.parse(announcement.learningMode),
        scopesValues: JSON.parse(announcement.scope),
        locationArray: JSON.parse(announcement.location),
        description: announcement.description,
      },
    });
  }

  function deleteAnnouncement(announcementId) {
    Axios.post(`http://localhost:3000/delete`, {
      announcementId: announcementId,
    })
      .then((res) => {
        console.log(res);
        console.log("deleted");
        getMyAnnouncements();
      })
      .catch((error) => {
        error = new Error();
      });
  }

  function getMyAnnouncements() {
    const token = cookies.get("TOKEN");
    Axios.get(`http://localhost:3000/moje-ogloszenia?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setMyAnnouncements(res.data);
      })
      .catch((error) => {
        setMyAnnouncements([]);
        error = new Error();
      });
  }

  React.useEffect(() => {
    getMyAnnouncements();
  }, [userId]);

  return (
    <div>
      {myAnnouncements.map((announcement) => {
        return (
          <div
            key={announcement.author_id}
            //to={`offers/${announcement.author}`}
            className={styles["announcements__announcement"]}
            // onClick={() => handleUnfoldedAnnoucement(announcement)}
          >
            <img alt="To jest obraz"></img>
            <div>
              <h4>{announcement.subject}</h4>
              <h3>{announcement.author}</h3>
              <p>{announcement.description}</p>
              <span>{JSON.parse(announcement.learningMode)}</span>
              <p>{JSON.parse(announcement.location)[0].address}</p>
            </div>
            <div>
              <span>{announcement.price}</span>
              <p>{announcement.phone}</p>
            </div>
            <button onClick={() => editAnnouncement(announcement)}>
              Edit btn
            </button>
            <button
              onClick={() => deleteAnnouncement(announcement.announcementId)}
            >
              Delete btn
            </button>
          </div>
        );
      })}
    </div>
  );
}
