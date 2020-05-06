import React from "react";
import styles from "./CountrySearch.module.css";

const CountrySearch = ({ searched, handleSearching }) => {
  return (
    <input
      className={styles.countrySearch}
      value={searched}
      onChange={handleSearching}
      placeholder='Enter contry name'
    />
  );
};

export default CountrySearch;
