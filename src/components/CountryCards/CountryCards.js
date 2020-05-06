import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryCards.module.css";
import Spinner from "../Spinner/Spinner";
import { fetchData } from "../../api/index";
import { getTopConfirmedCountries } from "../../utils/topConfirmedCountries";

const CountryCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(null);
    const fetchAPI = async () => {
      setData(await fetchData());
    };

    fetchAPI();
  }, []);

  if (!data)
    return (
      <div className={styles.topCountries}>
        <Spinner />
      </div>
    );

  const topCountries = getTopConfirmedCountries(data, 5).map((item) => {
    const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = item;
    return (
      <CountryCard
        key={Country}
        country={Country}
        cases={TotalConfirmed}
        deaths={TotalDeaths}
        recovered={TotalRecovered}
      />
    );
  });
  return (
    <div className={styles.topCountries}>
      <div className={styles.cards}>{topCountries}</div>
    </div>
  );
};

export default CountryCards;
