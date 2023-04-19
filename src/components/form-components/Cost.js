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
            maxLength="6"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></StyledNumberInput>
          <span>Cena: </span>
        </StyledLabelForm>
      ) : (
        <StyledContainerFormForCostRange>
          <StyledLabelForm>
            <StyledNumberInput
              required
              type="number"
              name="price"
              max={999}
              value={price[0]}
              onChange={(e) =>
                setPrice((prevData) => [parseInt(e.target.value), prevData[1]])
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></StyledNumberInput>
            <span>Min: </span>
          </StyledLabelForm>
          <span>-</span>
          <StyledLabelForm>
            <StyledNumberInput
              required
              type="number"
              name="price"
              max={1000}
              value={price[1]}
              onChange={(e) =>
                setPrice((prevData) => [prevData[0], parseInt(e.target.value)])
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></StyledNumberInput>
            <span>Max: </span>
          </StyledLabelForm>
        </StyledContainerFormForCostRange>
      )}
    </div>
  );
}
