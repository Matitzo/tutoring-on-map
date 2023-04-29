import Axios from "axios";
import FormData from "form-data";

export default function handleUploadImage(uploadImage, imageName) {
  const form = new FormData();
  console.log(uploadImage);
  console.log(imageName);

  form.append("file", uploadImage, imageName);

  Axios.post("https://smart-edukacja.onrender.com/upload_image", form, {
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data;`,
    },
  });
}
