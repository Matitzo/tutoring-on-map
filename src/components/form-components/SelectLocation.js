import React from "react";
import FormMap from "./FormMap";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledLocationInput } from "../../styles/Input.styled";
import {
  StyledFormButton,
  StyledButtonWrapper,
} from "../../styles/Button.styled";
import {
  StyledSelection,
  StyledSelectionLocation,
  StyledDeleteButton,
  StyledFormHeaderWrapper,
} from "../../styles/CreateAnnouncement.styled";

import {
  StyledMapWrapper,
  StyledMapContainer,
  StyledMapDiv,
  StyledLoactionsWrapper,
  StyledLocationsContainer,
  StyledErrorMsg,
} from "../../styles/CreateAnnouncementMap.styled";
import { StyledBackArrowForm } from "../../styles/BackArrow.styled";
import { StyledFormHeader } from "../../styles/CreateAnnouncement.styled";
import { StyledLinkForm } from "../../styles/Link.styled";

export default function SelectLocation({
  setLocationArray,
  locationArray,
  handleClose,
}) {
  const location = new useLocation();
  const navigate = new useNavigate();
  const [invalidForm, setInvalidForm] = React.useState(false);
  const errorMsg = "Należy podać przynajmniej jedną lokalizacje.";

  function handleClickNext(e) {
    e.preventDefault();
    if (locationArray.length > 0) {
      navigate(location.pathname.split("/").slice(0, -1).join("/") + "/opis");
    } else {
      setInvalidForm(true);
    }
  }

  function handleEditAddress(value, index) {
    setLocationArray((prevData) =>
      prevData.map((obj, prevDataIndex) => {
        if (index === prevDataIndex) {
          return { ...obj, address: value };
        }
        return obj;
      })
    );
  }

  return (
    <StyledMapWrapper>
      <StyledFormHeaderWrapper>
        <StyledLinkForm to="/stworz-ogloszenie">
          <StyledBackArrowForm>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </StyledBackArrowForm>
        </StyledLinkForm>
        <StyledFormHeader>Wybierz lokalizacje</StyledFormHeader>
      </StyledFormHeaderWrapper>
      <StyledMapContainer>
        <StyledMapDiv>
          <FormMap setLocationArray={(value) => setLocationArray(value)} />
        </StyledMapDiv>
      </StyledMapContainer>

      <StyledLocationsContainer>
        <StyledLoactionsWrapper>
          {locationArray.length > 0 && (
            <ol>
              {locationArray.map((element, index) => (
                <li>
                  <StyledSelectionLocation>
                    <StyledLocationInput
                      widthLength={element.address.length}
                      type="text"
                      value={element.address}
                      onChange={(e) => handleEditAddress(e.target.value, index)}
                    ></StyledLocationInput>{" "}
                    <StyledDeleteButton
                      onClick={() => {
                        handleClose(element, setLocationArray);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-x-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </StyledDeleteButton>
                  </StyledSelectionLocation>
                </li>
              ))}
            </ol>
          )}
        </StyledLoactionsWrapper>
      </StyledLocationsContainer>
      {invalidForm && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
      {/* <StyledLinkButton
        to={location.pathname.split("/").slice(0, -1).join("/") + "/opis"}
      > */}
      <StyledButtonWrapper>
        <StyledFormButton onClick={(e) => handleClickNext(e)}>
          Dalej
        </StyledFormButton>
      </StyledButtonWrapper>
    </StyledMapWrapper>
  );
}
