import FormMap from "./FormMap";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/Button.styled";
import {
  StyledSelection,
  StyledDeleteButton,
} from "../../styles/CreateAnnouncement.styled";

import {
  StyledMapWrapper,
  StyledMapContainer,
  StyledMapDiv,
  StyledLoactionsWrapper,
  StyledLocationsContainer,
} from "../../styles/CreateAnnouncementMap.styled";

export default function SelectLocation({
  setLocationArray,
  locationArray,
  handleClose,
}) {
  console.log("renderuje mape");
  return (
    <StyledMapWrapper>
      <h2>Wybierz lokalizacje</h2>
      <StyledMapContainer>
        <StyledMapDiv>
          <FormMap setLocationArray={(value) => setLocationArray(value)} />
        </StyledMapDiv>
      </StyledMapContainer>

      <StyledLocationsContainer>
        <StyledLoactionsWrapper>
          {locationArray.length > 0 &&
            locationArray.map((element) => (
              <StyledSelection>
                <span>{element.address}</span>{" "}
                <StyledDeleteButton
                  onClick={() => {
                    handleClose(element, setLocationArray);
                  }}
                >
                  X
                </StyledDeleteButton>
              </StyledSelection>
            ))}
        </StyledLoactionsWrapper>
      </StyledLocationsContainer>
      <Link to="/stworz-ogloszenie/opis">
        <StyledButton>Dalej</StyledButton>
      </Link>
    </StyledMapWrapper>
  );
}
