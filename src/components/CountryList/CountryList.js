import React, { useState, useEffect, useRef } from "react";
import styles from "./CountryList.module.css";
import { fetchCountriesList } from "../../api";
import CountryItem from "../CountryItem";
import Spinner from "../Spinner";

const CountryList = ({ onCountrySelected, searched }) => {
  const [state, setState] = useState({
    countries: [],
    selected: "World",
  });

  const unmounted = useRef(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const countries = await fetchCountriesList();
      if (!unmounted.current) {
        setState((state) => ({ ...state, countries }));
      }
    };

    fetchAPI();

    return () => {
      unmounted.current = true;
    };
  }, []);

  const onItemSelected = (name) => {
    setState({ ...state, selected: name });
    onCountrySelected(name);
  };

  const renderList = (countries) => {
    const { selected } = state;

    return countries.map((country, i) => {
      return (
        <CountryItem
          key={i}
          country={country}
          onClickHandle={onItemSelected}
          isSelected={selected === country.Country}
        />
      );
    });
  };

  const searchCountries = (countries, searched) => {
    if (searched === "") {
      return countries;
    }

    return countries.filter(
      (country) =>
        country.Country.toLowerCase().indexOf(searched.toLowerCase()) !== -1
    );
  };

  const { countries } = state;

  if (countries.length === 0)
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );

  const visibleItems = renderList(searchCountries(countries, searched));
  return (
    <div className={styles.container}>
      <div className={styles.list}>{visibleItems}</div>
    </div>
  );
};

export default CountryList;
