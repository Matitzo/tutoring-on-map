import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function logout(setIsLoged) {
  setIsLoged("");
  cookies.remove("TOKEN", { path: "/" });
}
