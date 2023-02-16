import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const token = cookies.get("TOKEN");
  Axios.get(`http://localhost:3000/stworz-ogloszenie`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {})
    .catch((error) => {
      error = new Error();
    });

  return <div>{prop}</div>;
}
