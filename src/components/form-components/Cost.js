import {
  StyledLabelForm,
  StyledNumberInput,
  StyledContainerFormForCostRange,
} from "../../styles/Input.styled";

export default function Cost({ isSingleCostValue, price, setPrice }) {
  return (
    <div>
      {isSingleCostValue ? (
        <StyledLabelForm>
          <StyledNumberInput
            required
            type="text"
            name="price"
            maxLength="3"
            value={price}
            onChange={(e) =>
              setPrice([
                parseInt(e.target.value) > 0 ? parseInt(e.target.value) : " ",
              ])
            }
            min="0"
            max={999}
            onKeyPress={(event) => {
              if (/[+,-]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></StyledNumberInput>
        </StyledLabelForm>
      ) : (
        <StyledContainerFormForCostRange>
          <StyledLabelForm>
            {/* <label style={{ fontWeight: "normal" }}>Min: </label> */}
            <StyledNumberInput
              required
              type="number"
              name="price"
              max={999}
              value={price[0]}
              onChange={(e) =>
                e.target.value.length <= 3 &&
                setPrice((prevData) => [parseInt(e.target.value), prevData[1]])
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></StyledNumberInput>
          </StyledLabelForm>
          <StyledLabelForm>
            {/* <label style={{ fontWeight: "normal" }}>Max: </label> */}
            <StyledNumberInput
              required
              type="number"
              name="price"
              max={999}
              value={price[1]}
              onChange={(e) =>
                e.target.value.length <= 3 &&
                setPrice((prevData) => [prevData[0], parseInt(e.target.value)])
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></StyledNumberInput>
          </StyledLabelForm>
        </StyledContainerFormForCostRange>
      )}
    </div>
  );
}
