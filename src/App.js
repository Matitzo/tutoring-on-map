import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateAnnouncement from "./components/CreateAnnouncement";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MyAnnouncements from "./components/MyAnnouncements";
import Axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

function App() {
  // zastapic te 2 staty jednym, np lista bo oba ida do tego samego komponentu
  const [isLoged, setIsLoged] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [myAnnouncements, setMyAnnouncements] = React.useState([]);

  // wrzucic tutaj useEffect by odpalalo sie po zmainie userId i tutaj trzymac dane

  React.useEffect(() => {
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
  }, [userId]);

  return (
    <Routes>
      <Route path={`/registration`} element={<Registration />}></Route>
      <Route
        path={`/login`}
        element={
          <Login
            isLoged={isLoged}
            setIsLoged={setIsLoged}
            setUserId={setUserId}
          />
        }
      ></Route>
      <Route
        path={"/stworz-ogloszenie"}
        element={
          <ProtectedRoutes Component={CreateAnnouncement} props={userId} />
        }
      />
      <Route
        path={"/moje-ogloszenia"}
        element={
          <ProtectedRoutes
            Component={MyAnnouncements}
            props={myAnnouncements}
          />
        }
      />
      <Route
        path={`/*`}
        element={
          <Home
            isLoged={isLoged}
            setIsLoged={setIsLoged}
            setUserId={setUserId}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
