import Axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function handleSubmitLogin(setState, login, password) {
  console.log(login.length);
  if (login.length < 5) return setState("failed");
  if (password.length < 6) return setState("failed");
  console.log(`http://localhost:3000/login`);
  Axios.post(`http://localhost:3000/login`, {
    login: login,
    password: password,
  })
    .then((res) => {
      console.log(res.data);
      setState("success");
      cookies.set("TOKEN", res.data.accessToken, {
        path: "/",
      });
    })
    .catch((error) => {
      setState("failed");
      error = new Error();
    });
}
