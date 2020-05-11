import React, { useState } from "react";
import styles from "./FullCountryInfo.module.css";
import MiniCards from "../MiniCards";
import CountryList from "../CountryList";
import VirusMap from "../VirusMap";
import CountrySearch from "../CountrySearch";

const FullCountryInfo = () => {
  const [state, setState] = useState({
    country: "World",
    searched: "",
  });

  const handleSearching = (event) => {
    setState({ ...state, searched: event.target.value });
  };

  const onCountrySelected = (country) => {
    setState({ ...state, country });
  };

  const { country, searched } = state;
  return (
    <div className={styles.container}>
      <MiniCards country={country} />
      <div>
        <CountrySearch searched={searched} handleSearching={handleSearching} />
        <CountryList
          onCountrySelected={onCountrySelected}
          searched={searched}
        />
      </div>
      <div className={styles.map}>
        <VirusMap
          onCountrySelected={onCountrySelected}
          zoom={0.2}
          country={country}
        />
      </div>
    </div>
  );
};

export default FullCountryInfo;
