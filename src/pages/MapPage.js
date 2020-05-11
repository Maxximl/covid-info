import React, { useState } from "react";
import styles from "./MapPage.module.css";
import VirusMap from "../components/VirusMap";
import CountryCards from "../components/CountryCards";

const MapPage = () => {
  const [countryName, setCountryName] = useState("World");

  const onCountrySelected = (country) => {
    setCountryName(country);
  };

  return (
    <div className={styles.container}>
      <CountryCards onCountrySelected={onCountrySelected} />
      <div className={styles.mapContainer}>
        <VirusMap
          onCountrySelected={onCountrySelected}
          zoom={1}
          country={countryName}
        />
      </div>
    </div>
  );
};

export default MapPage;
