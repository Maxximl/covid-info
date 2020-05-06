import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ country, cases, deaths, recovered }) => {
  return (
    <div className={styles.card}>
      <div className={styles.countryName}>{country}</div>
      <div className={styles.stat}>
        <div className={styles.countryRecovered}>{recovered}</div>
        <div className={styles.statContainer}>
          <div className={styles.countryCases}>{cases}</div>
          <div className={styles.countryDeaths}>{deaths}</div>
        </div>
      </div>
      <div className={styles.favoritePanel}></div>
    </div>
  );
};

export default CountryCard;
