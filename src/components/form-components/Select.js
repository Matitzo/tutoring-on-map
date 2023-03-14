import {
  StyledSelection,
  StyledLocationsDiv,
  StyledDeleteButton,
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
              <StyledDeleteButton
                onClick={() => {
                  handleClose(element, setValuesArray);
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
            </StyledSelection>
          ))}
      </StyledLocationsDiv>
    </li>
  );
}
