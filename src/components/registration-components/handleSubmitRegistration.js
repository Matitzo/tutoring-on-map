import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function handleSubmitRegistration(
  e,
  setState,
  login,
  password,
  passwordValidation,
  email
) {
  e.preventDefault();
  if (login.length < 5) return setState("invalid_login_lenght");
  if (password.length < 6) return setState("invalid_password_lenght");
  if (password !== passwordValidation)
    return setState("invalid_password_validation");
  Axios.post(`https://smart-edukacja.onrender.com/registration`, {
    email: email,
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
