import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function ProtectedRoutes({ Component }) {
  // get cookie from browser if logged in
  const token = cookies.get("TOKEN");
  const navigate = useNavigate();

  token && console.log(token);
  // returns route if there is a valid token set in the cookie
  if (token) {
    return <Component />;
  }
  navigate("/login");
  // returns the user to the landing page if there is no valid token set
  return;
  //   to={"/"}
  //   // state: {
  //   //   // sets the location a user was about to access before being redirected to login
  //   //   from: props.location,
  //   // },
  // />
}
