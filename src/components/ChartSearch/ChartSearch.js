import React, { useState } from "react";
import styles from "./ChartSearch.module.css";

const ChartSearch = ({ handleSearch }) => {
  const [searched, setSearched] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searched);
  };

  const handleInputText = (event) => {
    setSearched(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          value={searched}
          className={styles.chartSearch}
          onChange={handleInputText}
          placeholder="Enter country name"
          required
        ></input>
        <button type="submit" className={styles.searchButton}>
          Find
        </button>
      </form>
    </div>
  );
};

export default ChartSearch;
