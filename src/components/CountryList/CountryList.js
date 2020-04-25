import React, { useState, useEffect } from "react";
import styles from "./CountryList.module.css";
import { fetchCountriesList } from "../../api";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountriesList());
      console.log(countries);
    };

    fetchAPI();
  }, []);

  if (countries.length === 0) return <h2>Пусто</h2>;

  const list = searchedCountry !== '' ? countries.filter((country) => country.Country.indexOf(searchedCountry) !== -1).map((country) => (
    <div key={country.ISO2} className={styles.listItem}>
      {country.Country}
    </div>

  ))  :
   countries.map((country) => (
    <div key={country.ISO2} className={styles.listItem}>
      {country.Country}
    </div>

  )) 
  
  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.countrySearch}
          value={searchedCountry}
          onChange={(event) => setSearchedCountry(event.target.value)}
        />
        {list}
      </div>
    </div>
  );
};

export default CountryList;
