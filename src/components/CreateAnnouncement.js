import Axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
import { Routes, Route } from "react-router-dom";
import InpuDataForm from "./form-components/InputDataForm";
import SelectLocation from "./form-components/SelectLocation";
import handleSubmitAnnouncement from "./form-components/handleSubmitAnnouncement";
import { useLocation } from "react-router-dom";
import { StyledButton } from "../styles/Button.styled";
import {
  StyledCreateAnnouncementWrapper,
  StyledForm,
  StyledFormDiv,
} from "../styles/CreateAnnouncement.styled";
const cookies = new Cookies();

export default function CreateAnnouncement({ prop }) {
  const location = new useLocation();
  const userId = prop;
  const imageAvatar = require(`../profileImages/avatar.png`);
  const announcementId = checkIfEdition() ? location.state.announcementId : "";
  // zamiast tych wszystkich statow mozna zrobic jeden obiekt ktory bd przechowywal wszystko dzieki czemu bd potem tylko
  // jeden warunek a nie dla kazdej wartosci osobny
  const [author, setAuthor] = React.useState(
    checkIfEdition() ? location.state.author : ""
  );
  const [image, setImage] = React.useState(
    checkIfEdition() ? location.state.image : imageAvatar
  );
  const [imageName, setImageName] = React.useState(
    checkIfEdition() ? location.state.imageName : "avatar"
  );
  console.log(imageName);
  const [phoneNumber, setPhoneNumber] = React.useState(
    checkIfEdition() ? location.state.phoneNumber : ""
  );
  const [subject, setSubject] = React.useState(
    checkIfEdition() ? location.state.subject : ""
  );
  const [price, setPrice] = React.useState(
    checkIfEdition() ? location.state.price : ""
  );
  const [learningModeValues, setLearningModeValues] = React.useState(
    checkIfEdition() ? location.state.learningModeValues : []
  );
  const [scopesValues, setScopesValues] = React.useState(
    checkIfEdition() ? location.state.scopesValues : []
  );
  const [locationArray, setLocationArray] = React.useState(
    checkIfEdition() ? location.state.locationArray : []
  );
  // potem zmienic description state lub wyrzucic
  const [description, setDescription] = React.useState(
    checkIfEdition() ? location.state.description : ""
  );

  function checkIfEdition() {
    return location.pathname === "/edytuj-ogloszenie";
  }

  // wrzucic ta funkcje do osobnego komponentu
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
      };
      fileReader.readAsDataURL(image[0]);
      const random = Math.random() * 100000000000000000;
      setImageName(random + image[0].name);
    } else {
      setImage(imageAvatar);
      setImageName("avatar");
    }
  }

  const token = cookies.get("TOKEN");
  Axios.get(
    `http://localhost:3000/${
      checkIfEdition() ? "edytuj-ogloszenie" : "stworz-ogloszenie"
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
        onSubmit={(e) =>
          handleSubmitAnnouncement(
            e,
            author,
            userId,
            phoneNumber,
            subject,
            price,
            learningModeValues,
            scopesValues,
            locationArray,
            description
          )
        }
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
                  description={description}
                  setDescription={(value) => setDescription(value)}
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
          </Routes>
        </StyledFormDiv>
      </StyledForm>
    </StyledCreateAnnouncementWrapper>
  );
}
