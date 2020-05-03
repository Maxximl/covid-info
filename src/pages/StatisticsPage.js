import React, { useState } from "react";
import styles from "./StatisticsPage.module.css";
import CountryCards from '../components/CountryCards/CountryCards';
import Chart from '../components/Chart/Chart';
import ChartSearch from '../components/ChartSearch/ChartSearch';


const StatisticsPage = ({data}) => {
  const [countryName, setCountryName] = useState('');

  const handleSearch = (country) => {
      setCountryName(country);
  }

  return (
    <div className={styles.container}>
      {/* <Cards data={data} /> */}
      <CountryCards data={data}/>
      <ChartSearch  handleSearch={handleSearch} />
      <Chart country={countryName} />
    </div>
  );
};

export default StatisticsPage;
