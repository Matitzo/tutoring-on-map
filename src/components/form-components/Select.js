import {
  StyledSelection,
  StyledLocationsDiv,
  StyledLabelInputContainer,
} from "../../styles/CreateAnnouncement.styled";
import {
  StyledSelectForm,
  StyledSelectFormContainer,
} from "../../styles/Input.styled";

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

  console.log(data);
  return (
    <li>
      <label>{label}</label>
      <StyledSelectFormContainer>
        <StyledSelectForm
          name={name}
          id={name}
          form="create-announcement-form"
          onChange={(e) => handleChange(e.target.value, setValuesArray)}
        >
          <option value=""></option>
          {data.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </StyledSelectForm>
      </StyledSelectFormContainer>
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
