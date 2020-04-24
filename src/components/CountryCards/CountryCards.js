import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryCards.module.css";

const CountryCards = ({ data }) => {
  if (!data.reports) return <h3>Loading</h3>;
  console.log(data.reports);

  const topCountries = data.reports[0].table[0].slice(1, 6).map((item) => {
    const { Country, TotalCases, TotalDeaths } = item;
    return (
      <CountryCard key={Country} country={Country} cases={TotalCases} deaths={TotalDeaths} />
    );
  });
  return (
    <div className={styles.topCountries}>
      <h2 className={styles.countriesHeader}>Топ стран:</h2>
      <div className={styles.cards}>{topCountries}</div>
    </div>
  );
};

export default CountryCards;
