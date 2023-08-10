import Axios from "axios";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Cookies from "universal-cookie";
import React from "react";
import { Routes, Route } from "react-router-dom";
import InpuDataForm from "./form-components/InputDataForm";
import SelectLocation from "./form-components/SelectLocation";
import Description from "./form-components/Description";
import handleSubmitAnnouncement from "./form-components/handleSubmitAnnouncement";
import handleUploadImage from "./form-components/handleUploadImage";
import uploadImageFirebase from "./form-components/uploadImageFirebase";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  StyledCreateAnnouncementWrapper,
  StyledForm,
  StyledFormDiv,
  StyledFormProgressContainer,
} from "../styles/CreateAnnouncement.styled";
import { StyledTextEditorWrapper } from "../styles/Description.styled";
import ProgressBar from "./form-components/ProgressBar";

const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const location = new useLocation();
  const navigate = useNavigate();
  const userId = prop;
  const imageAvatar = require(`../profileImages/avatar.png`);
  const [announcementId, setAnnouncementId] = React.useState(
    checkIfState() ? location.state.announcementId : ""
  );

  const [inputValues, setInputValues] = React.useState({
    author: checkIfState() ? location.state.author : "",
    imageName: checkIfState() ? location.state.imageName : "avatar.png",
    image: "",
    uploadImage: "",
    phoneNumber: checkIfState() ? location.state.phoneNumber : "",
    subject: checkIfState() ? location.state.subject : "",
    price: checkIfState() ? location.state.price : [0],
    isSingleCostValue: checkIfState() ? location.state.isSingleCostValue : true,
    learningModeValues: checkIfState() ? location.state.learningModeValues : [],
    scopesValues: checkIfState() ? location.state.scopesValues : [],
    shortDescription: checkIfState() ? location.state.shortDescription : "",
  });
  const [description, setDescription] = React.useState(
    checkIfState() ? location.state.description : ""
  );
  const [locationArray, setLocationArray] = React.useState(
    checkIfState() ? location.state.locationArray : []
  );

  const storage = getStorage();
  const starsRef = ref(storage, `images/${imageName}`);

  try {
    getDownloadURL(starsRef).then((url) => {
      setImage(url);
    });
    //image = require(`../../../server/upload_images/${announcement.image}`);
  } catch {
    setImage("");
  }

  function checkIfState() {
    return location.pathname === "/edytuj-ogloszenie";
  }

  function checkIfEdition() {
    return location.pathname.includes("/edytuj-ogloszenie");
  }

  function handleClose(value, setValuesArray) {
    setValuesArray((prevData) => {
      return prevData.filter((element) => value !== element);
    });
  }

  function handleImage(image) {
    if (image.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        setInputValues.image(e.target.result);
        setInputValues.uploadImage(image[0]);
      };
      fileReader.readAsDataURL(image[0]);
      const random = Math.random() * 100000000000000000;
      setInputValues.imageName(random + image[0].name);
    } else {
      setInputValues.image(imageAvatar);
      setInputValues.imageName("avatar.png");
    }
  }

  const token = cookies.get("TOKEN");
  Axios.get(
    `http://localhost:3000/${
      checkIfState() ? "edytuj-ogloszenie" : "stworz-ogloszenie"
    }`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => {})
    .catch((error) => {
      error = new Error();
    });

  const inputs = [
    {
      id: 1,
      name: "author",
      type: "text",
      errorMessage:
        "Author name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      errorMessage:
        "Author name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
  ];

  // prop to userID
  return (
    <StyledCreateAnnouncementWrapper>
      <StyledForm
        id="create-announcement-form"
        onSubmit={(e) => {
          handleSubmitAnnouncement(
            checkIfEdition,
            e,
            announcementId,
            userId,
            inputValues,
            navigate
          );
          uploadImageFirebase(
            inputValues.uploadImage,
            setInputValues,
            inputValues.imageName
          );
          //handleUploadImage(uploadImage, imageName);
        }}
      >
        <StyledFormDiv>
          <StyledFormProgressContainer>
            <ProgressBar pathname={location.pathname} />
          </StyledFormProgressContainer>
          <Routes>
            <Route
              path={`/`}
              element={
                <InpuDataForm
                  handleImage={(value) => handleImage(value)}
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                  handleClose={(value) => handleClose(value)}
                  announcementId={announcementId}
                  userId={userId}
                />
              }
            ></Route>
            <Route
              path={`/lokalizacja`}
              element={
                <SelectLocation
                  setLocationArray={(value) => setLocationArray(value)}
                  locationArray={locationArray}
                  handleClose={(value, setValue) =>
                    handleClose(value, setValue)
                  }
                />
              }
            ></Route>
            <Route
              path={"/opis"}
              element={
                <StyledTextEditorWrapper>
                  <Description
                    description={description}
                    handleDescription={(value) => setDescription(value)}
                  />
                </StyledTextEditorWrapper>
              }
            ></Route>
          </Routes>
        </StyledFormDiv>
      </StyledForm>
    </StyledCreateAnnouncementWrapper>
  );
}
