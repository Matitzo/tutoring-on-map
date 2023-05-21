import Axios from "axios";

export default function handleSubmitAnnouncement(
  checkIfEdition,
  e,
  announcementId,
  author,
  userId,
  imageName,
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

  Axios.post(
    `https://smart-edukacja.onrender.com/${
      checkIfEdition() ? "edytuj-ogloszenie" : "stworz-ogloszenie"
    }`,
    {
      announcementId: announcementId,
      author: author,
      userId: userId,
      imageName: imageName,
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
      navigate("/");
      //setCreatedAnnouncement((prevData) => prevData + 1);
      //   setState("success");
    })
    .catch((error) => {
      //   setState("failed");
      error = new Error();
    });
}
