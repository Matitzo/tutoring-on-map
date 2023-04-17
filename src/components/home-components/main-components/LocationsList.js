import {
  StyledLocationList,
  StyledLocationListElement,
} from "../../../styles/LocationList.styled";

export default function LocationList({
  locations,
  setCurrentLocation,
  isListLocationVisible,
  setIsListLocationVisible,
  setCoord,
}) {
  return (
    <StyledLocationList isListLocationVisible={isListLocationVisible}>
      {locations.map((location) => (
        <StyledLocationListElement
          onClick={(e) => {
            setIsListLocationVisible(false);
            setCurrentLocation(location);
            localStorage.setItem("currentLocation", JSON.stringify(location));
            setCoord([location.coordinates[1], location.coordinates[0]]);
            localStorage.setItem(
              "coord",
              JSON.stringify([location.coordinates[1], location.coordinates[0]])
            );
          }}
        >
          {location.address}
        </StyledLocationListElement>
      ))}
    </StyledLocationList>
  );
}
