import React from "react";
import styles from "./CountryCard.module.css";
import CountUp from "react-countup";
const CountryCard = ({ country, cases, deaths, recovered, handleCardClick }) => {
  const handleClick = () => {

    handleCardClick(country);
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.countryName}>{country}</div>
      <div className={styles.stat}>
        <div className={styles.countryRecovered}>
          <CountUp start={0} end={recovered} duration={2} separator="," />
        </div>
        <div className={styles.statContainer}>
          <div className={styles.countryCases}>
            <CountUp start={0} end={cases} duration={2} separator="," />
          </div>
          <div className={styles.countryDeaths}>
            <CountUp start={0} end={deaths} duration={2} separator="," />
          </div>
        </div>
      </div>
      <div className={styles.favoritePanel}></div>
    </div>
  );
};

export default CountryCard;
