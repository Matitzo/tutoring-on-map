import styles from "../../../styles/DropDownList.module.css";
import { Link } from "react-router-dom";
import React from "react";

export default function CostFilter({ setCostFilter }) {
  const [minPrice, setMinPrice] = React.useState();
  const [maxPrice, setMaxPrice] = React.useState();

  return (
    <form className={styles["drop-down-list"]} style={{ display: "block" }}>
      <div>tutaj bd suwak</div>
      <div>
        <input
          placeholder="Od"
          name="min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ width: "50px" }}
        ></input>
        <div>-</div>
        <input
          placeholder="Do"
          name="max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ width: "50px" }}
        ></input>
      </div>
      <Link to="/filters">
        <button onClick={() => setCostFilter([minPrice, maxPrice])}>Ok</button>
      </Link>
    </form>
  );
}
