import React, { useState, useCallback } from "react";
import styles from "./FullCountryInfo.module.css";
import MiniCards from "../MiniCards";
import CountryList from "../CountryList";
import VirusMap from "../VirusMap";
import CountrySearch from "../CountrySearch";

const FullCountryInfo = () => {
  const [state, setState] = useState({
    country: "World",
    searched: "",
    selected: ''
  });

  const handleSearching = (event) => {
    setState({ ...state, searched: event.target.value });
  };
 
  // const onCountrySelected = useCallback((country) => {
  //   setState({ ...state, country })
  // }, [state, setState]);

  const onCountrySelected = useCallback((country) => {
    setState({ ...state, selected: country, country })
  }, [state, setState]);
  
  const { country, searched,selected } = state;
  return (
    <div className={styles.container}>
      <MiniCards country={country} />
      <div>
        <CountrySearch searched={searched} handleSearching={handleSearching} />
        <CountryList
          onCountrySelected={onCountrySelected}
          searched={searched}
          selected={selected}
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
