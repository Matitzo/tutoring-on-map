import {
  StyledLabelForm,
  StyledNumberInput,
  StyledContainerFormForCostRange,
} from "../../styles/Input.styled";

export default function Cost({
  isSingleCostValue,
  price,
  setPrice,
  handleFocus,
  focused,
}) {
  return (
    <div>
      {isSingleCostValue ? (
        <StyledLabelForm>
          <input
            required
            type="text"
            name="price"
            maxLength="3"
            value={price}
            onChange={(e) =>
              setPrice([
                parseInt(e.target.value) > 0 ? parseInt(e.target.value) : "",
              ])
            }
            min={1}
            max={999}
            pattern="^0*?[1-9]\d*$"
            onBlur={() => handleFocus("cost")}
            focused={focused.cost.toString()}
            onKeyPress={(event) => {
              if (/[+,-]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></input>
          <span>Należy podać cenę.</span>
        </StyledLabelForm>
      ) : (
        <StyledContainerFormForCostRange>
          <StyledLabelForm>
            <input
              required
              type="text"
              name="price"
              min={1}
              max={999}
              maxLength="3"
              value={price[0]}
              onChange={(e) =>
                e.target.value > 0
                  ? setPrice((prevData) => [
                      parseInt(e.target.value),
                      prevData[1],
                    ])
                  : setPrice((prevData) => ["", prevData[1]])
              }
              pattern="^0*?[1-9]\d*$"
              onBlur={() => handleFocus("cost")}
              focused={focused.cost.toString()}
              onKeyPress={(event) => {
                if (/[+,-]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
            <span>Należy podać cenę.</span>
          </StyledLabelForm>
          <StyledLabelForm>
            <input
              required
              type="text"
              name="price"
              min={1}
              max={999}
              maxLength="3"
              value={price[1]}
              onChange={(e) =>
                e.target.value > 0
                  ? setPrice((prevData) => [
                      prevData[0],
                      parseInt(e.target.value),
                    ])
                  : setPrice((prevData) => [prevData[0], ""])
              }
              pattern="^0*?[1-9]\d*$"
              // ^([0-9][0-9]*.{1,}
              onBlur={() => handleFocus("cost")}
              focused={focused.cost.toString()}
              onKeyPress={(event) => {
                if (/[+,-]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
            <span>Należy podać cenę.</span>
          </StyledLabelForm>
        </StyledContainerFormForCostRange>
      )}
    </div>
  );
}
