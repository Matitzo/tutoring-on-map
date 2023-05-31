import { useCallback } from "react";
import debounce from "lodash.debounce";
import DropDownList from "./filters-components/DropDownList";
import subjects from "../../data/subjects";
import voivodeships from "../../data/voivodeships";
import learningMode from "../../data/learningMode";
import CostFilter from "./filters-components/CostFilter";
import {
  DropDownContainer,
  DropDownBtn,
} from "./filters-components/DropDownList.styled";
import { StyledFiltersContainer } from "./Filters.styled";
import { StyledInput } from "../../styles/Input.styled";

export default function Filters({
  voivodeshipFilter,
  subjectFilter,
  learningModeFilter,
  cityFilter,
  costFilter,
  setVoivodeshipFilter,
  setSubjectFilter,
  setLearningModeFilter,
  setCityFilter,
  setCostFilter,
}) {
  const debouncedChangeHandler = useCallback(debounce(handleChange, 400), []);

  function handleChange(event) {
    setCityFilter(event.target.value ? event.target.value : "");
  }

  return (
    <StyledFiltersContainer>
      <DropDownContainer>
        <DropDownBtn filtered={subjectFilter}>
          {subjectFilter ? subjectFilter : "Wszystkie przedmioty"}
        </DropDownBtn>
        <DropDownList
          defaultValue="Wszystkie przedmioty"
          data={subjects}
          filter={subjectFilter}
          setFilter={(value) => setSubjectFilter(value)}
          icon={true}
        />
      </DropDownContainer>
      <StyledInput
        id="input"
        placeholder="Adres"
        onChange={debouncedChangeHandler}
        type="text"
      />
      <DropDownContainer>
        <DropDownBtn filtered={voivodeshipFilter}>
          {voivodeshipFilter ? voivodeshipFilter : "Wszystkie wojewodztwa"}
        </DropDownBtn>
        <DropDownList
          defaultValue="Wszystkie wojewodztwa"
          data={voivodeships}
          filter={voivodeshipFilter}
          setFilter={(value) => setVoivodeshipFilter(value)}
          icon={false}
        />
      </DropDownContainer>
      <DropDownContainer>
        <DropDownBtn filtered={learningModeFilter}>
          {learningModeFilter ? learningModeFilter : "Dowolny tryb nauki"}
        </DropDownBtn>
        <DropDownList
          defaultValue="Dowolny tryb nauki"
          data={learningMode}
          filter={learningModeFilter}
          setFilter={(value) => setLearningModeFilter(value)}
          icon={false}
        />
      </DropDownContainer>
      <DropDownContainer>
        <DropDownBtn filtered={costFilter[0] || costFilter[1]}>
          Cena {costFilter[0] >= 0 ? costFilter[0] : ""} -{" "}
          {costFilter[1] >= 0 ? costFilter[1] : ""}
        </DropDownBtn>
        <CostFilter setCostFilter={setCostFilter} />
      </DropDownContainer>
    </StyledFiltersContainer>
  );
}
