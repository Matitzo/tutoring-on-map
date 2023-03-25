import Axios from "axios";

export default function handleSubmitAnnouncement(
  checkIfEdition,
  e,
  announcementId,
  author,
  userId,
  imageName,
  uploadImage,
  phoneNumber,
  subject,
  price,
  learningModeValues,
  scopesValues,
  locationArray,
  shortDescription,
  description,
  navigate
) {
  e.preventDefault();
  console.log(uploadImage);

  Axios.post(
    `http://localhost:3000/${
      checkIfEdition() ? "edytuj-ogloszenie" : "stworz-ogloszenie"
    }`,
    {
      announcementId: announcementId,
      author: author,
      userId: userId,
      imageName: imageName,
      uploadImage: uploadImage,
      subject: subject,
      price: price,
      phone: phoneNumber,
      location: locationArray,
      shortDescription: shortDescription,
      description: description,
      scope: scopesValues,
      learningMode: learningModeValues,
    }
  )
    .then((res) => {
      console.log(res);
      console.log("submitted");
      navigate("/");
      //setCreatedAnnouncement((prevData) => prevData + 1);
      //   setState("success");
    })
    .catch((error) => {
      //   setState("failed");
      console.log("error");
      error = new Error();
    });
}
