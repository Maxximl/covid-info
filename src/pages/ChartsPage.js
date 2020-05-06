import React, { useState } from "react";
import styles from "./ChartsPage.module.css";
import Chart from "../components/Chart/Chart";
import ChartSearch from "../components/ChartSearch/ChartSearch";

const ChartsPage = ({ data }) => {
  const [countryName, setCountryName] = useState("");

  const handleSearch = (country) => {
    setCountryName(country);
  };

  return (
    <div className={styles.container}>
      <ChartSearch handleSearch={handleSearch} />
      <div className={styles.chartContainer}>
        <Chart country={countryName} />
      </div>
    </div>
  );
};

export default ChartsPage;
