import { useCallback } from "react";
import debounce from "lodash.debounce";
import DropDownList from "./filters-components/DropDownList";
import subjects from "../../data/subjects";
import voivodeships from "../../data/voivodeships";
import learningMode from "../../data/learningMode";
import CostFilter from "./filters-components/CostFilter";
import styles from "../../styles/Filters.module.css";

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
  function handleChange(event) {
    setCityFilter(event.target.value ? event.target.value : "");
  }

  const debouncedChangeHandler = useCallback(debounce(handleChange, 400), []);

  return (
    <form className={styles["filters"]}>
      <div className="filters__subjects">
        Przedmiot
        <DropDownList
          data={subjects}
          filter={subjectFilter}
          setFilter={(value) => setSubjectFilter(value)}
        />
      </div>
      <input
        id="input"
        placeholder="Miejscowość"
        onChange={debouncedChangeHandler}
        type="text"
      />
      <div className="filters__voivodeship">
        Wojewodztwo
        <DropDownList
          data={voivodeships}
          filter={voivodeshipFilter}
          setFilter={(value) => setVoivodeshipFilter(value)}
        />
      </div>
      <div className="filters__learning-mode">
        Tryb nauki
        <DropDownList
          data={learningMode}
          filter={learningModeFilter}
          setFilter={(value) => setLearningModeFilter(value)}
        />
      </div>
      <div className="filters__price">
        Cena
        <CostFilter setCostFilter={setCostFilter} />
      </div>
    </form>
  );
}
