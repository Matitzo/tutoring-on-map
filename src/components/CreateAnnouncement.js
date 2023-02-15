import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
const cookies = new Cookies();

export default function CreateAnnouncement() {
  const [message, setMessage] = React.useState("");

  const token = cookies.get("TOKEN");
  console.log(token);
  Axios.get(`http://localhost:3000/stworz-ogloszenie`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      setMessage("Swtorz ogloszenie");
    })
    .catch((error) => {
      setMessage("Error");
      error = new Error();
    });

  return <div>{message}</div>;
}
