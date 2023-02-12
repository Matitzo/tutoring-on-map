import { useCallback } from "react";
import debounce from "lodash.debounce";
import DropDownList from "./DropDownList";
import subjects from "../data/subjects";
import voivodeships from "../data/voivodeships";
import learningMode from "../data/learningMode";
import styles from "../styles/Filters.module.css";

export default function Filters({
  voivodeshipFilter,
  subjectFilter,
  learningModeFilter,
  cityFilter,
  setVoivodeshipFilter,
  setSubjectFilter,
  setLearningModeFilter,
  setCityFilter,
}) {
  function handleChange(event) {
    setCityFilter(event.target.value ? event.target.value : "");
  }

  const debouncedChangeHandler = useCallback(debounce(handleChange, 400), []);

  return (
    <div className={styles["filters"]}>
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
      <div className="filters__price">Cena</div>
    </div>
  );
}
