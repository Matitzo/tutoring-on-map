import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function logout(setIsLoged, setUserId) {
  setUserId("");
  setIsLoged("");
  cookies.remove("TOKEN", { path: "/" });
}
