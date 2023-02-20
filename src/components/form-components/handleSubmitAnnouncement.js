import Axios from "axios";

export default function handleSubmitAnnouncement(
  checkIfEdition,
  e,
  announcementId,
  author,
  userId,
  phoneNumber,
  subject,
  price,
  learningModeValues,
  scopesValues,
  locationArray,
  description
) {
  e.preventDefault();
  Axios.post(
    `http://localhost:3000/${
      checkIfEdition() ? "edytuj-ogloszenie" : "stworz-ogloszenie"
    }`,
    {
      announcementId: announcementId,
      author: author,
      userId: userId,
      subject: subject,
      price: price,
      phone: phoneNumber,
      location: locationArray,
      description: description,
      scope: scopesValues,
      learningMode: learningModeValues,
    }
  )
    .then((res) => {
      console.log(res);
      console.log("submitted");
      //setCreatedAnnouncement((prevData) => prevData + 1);
      //   setState("success");
    })
    .catch((error) => {
      //   setState("failed");
      error = new Error();
    });
}
