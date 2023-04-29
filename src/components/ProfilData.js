import React from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ProfilData({ prop }) {
  const [profilData, setProfilData] = React.useState([]);
  const userId = prop;

  React.useEffect(() => {
    getProfilData();
  }, [userId]);

  function getProfilData() {
    const token = cookies.get("TOKEN");
    Axios.get(
      `https://smart-edukacja.onrender.com/profil-data?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setProfilData(res.data);
      })
      .catch((error) => {
        setProfilData([]);
        error = new Error();
      });
  }

  return (
    <div>
      {profilData.map((data) => {
        return (
          <div>
            <p>Email: {data.email}</p>
            <p>Login: {data.login}</p>
          </div>
        );
      })}
    </div>
  );
}
