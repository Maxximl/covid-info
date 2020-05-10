import React, { useState } from "react";
import styles from "./NewsPage.module.css";
import NewsCards from "../components/NewsCards";
import CountriesComboBox from "../components/CountriesComboBox";

const NewsPage = () => {

 const [countryCode, setCountryCode] = useState('ru');

 const handleSelectCountry = (code) => {
  setCountryCode(code);
 }
  return (
    <div className={styles.container}>
      <CountriesComboBox handleSelectCountry={handleSelectCountry}/>
      <div className={styles.newsContainer}>
        <h2>News</h2>
        <NewsCards countryCode={countryCode} />
      </div>
    </div>
  );
};

export default NewsPage;
