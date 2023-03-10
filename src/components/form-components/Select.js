import {
  StyledSelection,
  StyledLocationsDiv,
  StyledLabelInputContainer,
} from "../../styles/CreateAnnouncement.styled";

export default function Select({
  valuesArray,
  setValuesArray,
  data,
  name,
  label,
}) {
  function handleChange(value, setValuesArray) {
    value &&
      !valuesArray.includes(value) &&
      setValuesArray((prevData) => [...prevData, value]);
  }

  function handleClose(value, setValuesArray) {
    setValuesArray((prevData) => {
      return prevData.filter((element) => value !== element);
    });
  }

  return (
    <li>
      <div>
        <label>{label}</label>
        <select
          name={name}
          id={name}
          form="create-announcement-form"
          onChange={(e) => handleChange(e.target.value, setValuesArray)}
        >
          <option value=""></option>
          {data.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      </div>
      <StyledLocationsDiv>
        {valuesArray.length > 0 &&
          valuesArray.map((element) => (
            <StyledSelection>
              <span>{element}</span>{" "}
              <span
                onClick={() => {
                  handleClose(element, setValuesArray);
                }}
              >
                X
              </span>
            </StyledSelection>
          ))}
      </StyledLocationsDiv>
    </li>
  );
}
