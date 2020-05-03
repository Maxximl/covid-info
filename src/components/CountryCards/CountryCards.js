import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryCards.module.css";
import Spinner from "../Spinner/Spinner";

const CountryCards = ({ data }) => {
  if (!data) return <div className={styles.topCountries}><Spinner/></div>

  const topCountries = data.table[0].slice(1, 6).map((item) => {
    const { Country, TotalCases, TotalDeaths } = item;
    return (
      <CountryCard key={Country} country={Country} cases={TotalCases} deaths={TotalDeaths} />
    );
  });
  return (
    <div className={styles.topCountries}>
      <div className={styles.cards}>{topCountries}</div>
    </div>
  );
};

export default CountryCards;
