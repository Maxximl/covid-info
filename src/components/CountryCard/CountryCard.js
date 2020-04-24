import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ country, cases, deaths }) => {
  return (
    <div className={styles.card}>
      <div className={styles.countryName}>{country}</div>
      <div className={styles.stat}>
        <div className={styles.countryCases}>{cases}</div>
        <div className={styles.countryDeaths}>{deaths}</div>
      </div>
    </div>
  );
};

export default CountryCard;
