import React, { useState } from "react";
import styles from "./MapPage.module.css";
import VirusMap from "../components/VirusMap/VirusMap";


const StatisticsPage = ({data}) => {
  const [countryName, setCountryName] = useState('');

  const onCountrySelected = (country) => {
      setCountryName(country);
  }

  return (
    <div className={styles.container}>
      <VirusMap onCountrySelected={onCountrySelected} zoom={1} />
    </div>
  );
};

export default StatisticsPage;
