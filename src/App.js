import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateAnnouncement from "./components/CreateAnnouncement";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MyAnnouncements from "./components/MyAnnouncements";
import { theme } from "./styles/Theme.js";

function App() {
  // zastapic te 2 staty jednym, np lista bo oba ida do tego samego komponentu
  const [isLoged, setIsLoged] = React.useState("");
  const [userId, setUserId] = React.useState("");

  // zastanowic sie czy use effect z my annoucement nie lepiej by bylo dac tutaj ?
  // wtedy trzeba zrobic nowy state i dac go do [] w useEffect i przeniesc go az do handleSubmitRegistration
  // poki co wydaje mi sie ze lepiej bd jak bd w myAnnoucements ale nwm
  console.log(userId);

  return (
    <ThemeProvider theme={theme}>
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
          path={"/stworz-ogloszenie/*"}
          element={
            <ProtectedRoutes Component={CreateAnnouncement} props={userId} />
          }
        />
        <Route
          path={"/edytuj-ogloszenie"}
          element={
            <ProtectedRoutes Component={CreateAnnouncement} props={userId} />
          }
        />
        <Route
          path={"/moje-ogloszenia"}
          element={
            <ProtectedRoutes Component={MyAnnouncements} props={userId} />
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
    </ThemeProvider>
  );
}

export default App;
