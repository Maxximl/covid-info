import React, { useState } from "react";
import styles from "./ChartSearch.module.css";

const ChartSearch = ({ handleSearch }) => {
  const [searched, setSearched] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searched);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          value={searched}
          className={styles.chartSearch}
          onChange={(event) => setSearched(event.target.value)}
          placeholder='Введите название страны'
          required
        ></input>
        <button type="submit" className={styles.searchButton}>
          Найти
        </button>
      </form>
    </div>
  );
};

export default ChartSearch;
