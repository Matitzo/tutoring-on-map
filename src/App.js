import "./App.css";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateAnnouncement from "./components/CreateAnnouncement";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Header from "./components/home-components/Header";
import Profile from "./components/Profile";
import Modal from "./components/Modal";
import { theme } from "./styles/Theme.js";

function App() {
  const [isLoged, setIsLoged] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [isHamburgerOpened, setIsHamburgerOpened] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Modal
        isLoged={isLoged}
        setIsLoged={(value) => setIsLoged(value)}
        isHamburgerOpened={isHamburgerOpened}
        setIsHamburgerOpened={(value) => setIsHamburgerOpened(value)}
        setUserId={(value) => setUserId(value)}
      />

      <Header
        isLoged={isLoged}
        setIsLoged={setIsLoged}
        setUserId={setUserId}
        isHamburgerOpened={isHamburgerOpened}
        setIsHamburgerOpened={(value) => setIsHamburgerOpened(value)}
      />
      <Routes>
        <Route
          path={`/login/*`}
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
          path={"/edytuj-ogloszenie/*"}
          element={
            <ProtectedRoutes Component={CreateAnnouncement} props={userId} />
          }
        />
        <Route
          path={"/profil/*"}
          element={<ProtectedRoutes Component={Profile} props={userId} />}
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
