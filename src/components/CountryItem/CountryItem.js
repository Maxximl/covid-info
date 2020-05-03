import React from "react";
import styles from "./CountryItem.module.css";
import cn from 'classnames';

const CountryItem = ({ country, onClickHandle, isSelected }) => {
  return (
    <div
      key={country.ISO2}
      className={ cn(styles.listItem, isSelected ? styles.selected : null) }
      onClick={() => onClickHandle(country.Country)}
    >
      <div>{country.Country}</div>
      <div className={styles.continent}>{country.Continent}</div>
    </div>
  );
};

export default CountryItem;
