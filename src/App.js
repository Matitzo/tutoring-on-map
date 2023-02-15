import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateAnnouncement from "./components/CreateAnnouncement";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  console.log("tak");
  const [isLoged, setIsLoged] = React.useState("");

  return (
    <Routes>
      <Route path={`/registration`} element={<Registration />}></Route>
      <Route
        path={`/login`}
        element={<Login isLoged={isLoged} setIsLoged={setIsLoged} />}
      ></Route>
      <Route
        path={"/stworz-ogloszenie"}
        element={<ProtectedRoutes Component={CreateAnnouncement} />}
      />
      <Route
        path={`/*`}
        element={<Home isLoged={isLoged} setIsLoged={setIsLoged} />}
      ></Route>
    </Routes>
  );
}

export default App;
