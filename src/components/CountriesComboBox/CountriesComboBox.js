import React, { useState, useEffect } from "react";
import styles from "./CountriesComboBox.module.css";
import { fetchCountries } from "../../api/index";
import { getTopConfirmedCountries } from "../../utils/topConfirmedCountries";

const CountriesComboBox = ({ handleSelectCountry }) => {
  const [countries, setCountries] = useState([]);
  const [selectedValue, setSelectedValue] = useState("ru");

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    handleSelectCountry(value);
  };
  const renderOptions = () => {
    return getTopConfirmedCountries(countries, 50).map((item) => (
      <option key={item.code} value={item.code}>
        {item.country}
      </option>
    ));
  };

  return (
    <div className={styles.container}>
      <select
        className={styles.comboBox}
        value={selectedValue}
        onChange={handleOnChange}
      >
        {renderOptions()}
      </select>
    </div>
  );
};

export default CountriesComboBox;
