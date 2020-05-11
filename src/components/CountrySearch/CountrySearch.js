import React from "react";
import styles from "./CountrySearch.module.css";

const CountrySearch = ({ searched, handleSearching }) => {
  return (
    <input
      className={styles.countrySearch}
      value={searched}
      onChange={handleSearching}
      placeholder="Enter country name"
    />
  );
};

export default CountrySearch;
