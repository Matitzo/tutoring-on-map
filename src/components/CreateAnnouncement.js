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
} from "../styles/CreateAnnouncement.styled";
import { StyledTextEditorWrapper } from "../styles/Description.styled";

const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const location = new useLocation();
  const navigate = useNavigate();
  const userId = prop;
  const imageAvatar = require(`../profileImages/avatar.png`);
  const [announcementId, setAnnouncementId] = React.useState(
    checkIfState() ? location.state.announcementId : ""
  );
  const [author, setAuthor] = React.useState(
    checkIfState() ? location.state.author : ""
  );

  const [imageName, setImageName] = React.useState(
    checkIfState() ? location.state.imageName : "avatar.png"
  );

  const storage = getStorage();
  const starsRef = ref(storage, `images/${imageName}`);

  const [image, setImage] = React.useState();
  try {
    getDownloadURL(starsRef).then((url) => {
      setImage(url);
    });
    //image = require(`../../../server/upload_images/${announcement.image}`);
  } catch {
    setImage("");
  }
  const [uploadImage, setUploadImage] = React.useState();

  const [phoneNumber, setPhoneNumber] = React.useState(
    checkIfState() ? location.state.phoneNumber : ""
  );
  const [subject, setSubject] = React.useState(
    checkIfState() ? location.state.subject : ""
  );
  const [price, setPrice] = React.useState(
    checkIfState() ? location.state.price : [0]
  );

  const [isSingleCostValue, setIsSingleCostValue] = React.useState(
    checkIfState() ? location.state.isSingleCostValue : true
  );

  const [learningModeValues, setLearningModeValues] = React.useState(
    checkIfState() ? location.state.learningModeValues : []
  );
  const [scopesValues, setScopesValues] = React.useState(
    checkIfState() ? location.state.scopesValues : []
  );
  const [locationArray, setLocationArray] = React.useState(
    checkIfState() ? location.state.locationArray : []
  );

  const [shortDescription, setShortDescription] = React.useState(
    checkIfState() ? location.state.shortDescription : ""
  );

  const [description, setDescription] = React.useState(
    checkIfState() ? location.state.description : ""
  );

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
        setImage(e.target.result);
        setUploadImage(image[0]);
      };
      fileReader.readAsDataURL(image[0]);
      const random = Math.random() * 100000000000000000;
      setImageName(random + image[0].name);
    } else {
      setImage(imageAvatar);
      setImageName("avatar.png");
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
          );
          uploadImageFirebase(uploadImage, setUploadImage, imageName);
          //handleUploadImage(uploadImage, imageName);
        }}
      >
        <StyledFormDiv>
          <Routes>
            <Route
              path={`/`}
              element={
                <InpuDataForm
                  handleImage={(value) => handleImage(value)}
                  image={image}
                  author={author}
                  setAuthor={setAuthor}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={(value) => setPhoneNumber(value)}
                  subject={subject}
                  setSubject={(value) => setSubject(value)}
                  price={price}
                  setPrice={(value) => setPrice(value)}
                  scopesValues={scopesValues}
                  setScopesValues={(value) => setScopesValues(value)}
                  learningModeValues={learningModeValues}
                  setLearningModeValues={(value) =>
                    setLearningModeValues(value)
                  }
                  handleClose={(value) => handleClose(value)}
                  announcementId={announcementId}
                  userId={userId}
                  shortDescription={shortDescription}
                  setShortDescription={(value) => setShortDescription(value)}
                  isSingleCostValue={isSingleCostValue}
                  setIsSingleCostValue={(value) => setIsSingleCostValue(value)}
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
                  {/* <StyledSubmitButton variant="primary" type="submit">
                    Stwórz ogłoszenie
                  </StyledSubmitButton> */}
                </StyledTextEditorWrapper>
              }
            ></Route>
          </Routes>
        </StyledFormDiv>
      </StyledForm>
    </StyledCreateAnnouncementWrapper>
  );
}
