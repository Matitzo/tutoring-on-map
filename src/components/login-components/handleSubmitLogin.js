import Axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function handleSubmitLogin(
  setState,
  login,
  password,
  setUserId
) {
  if (login.length < 5) return setState("failed");
  if (password.length < 6) return setState("failed");
  Axios.post(`https://smart-edukacja.onrender.com/login`, {
    login: login,
    password: password,
  })
    .then((res) => {
      setState("success");
      setUserId(res.data.userId);
      cookies.set("TOKEN", res.data.accessToken, {
        path: "/",
      });
    })
    .catch((error) => {
      setState("failed");
      error = new Error();
    });
}
