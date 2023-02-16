import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function handleSubmitRegistration(setState, login, password) {
  if (login.length < 5) return setState("failed");
  if (password.length < 6) return setState("failed");
  Axios.post(`http://localhost:3000/registration`, {
    login: login,
    password: password,
    userId: uuidv4(),
  })
    .then((res) => {
      console.log(res);
      setState("success");
    })
    .catch((error) => {
      setState("failed");
      error = new Error();
    });
}
