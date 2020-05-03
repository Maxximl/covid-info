import React, { useState, useEffect } from "react";
import MiniCard from "../MiniCard/MiniCard";
import styles from "./MiniCards.module.css";
import { fetchCountryData } from "../../api";

import ripIcon from "./img/ripIcon.png";
import activeIcon from "./img/activeIcon.png";
import recoveredIcon from "./img/recoveredIcon.png";
import criticalIcon from "./img/criticalIcon.png";
import todayIcon from "./img/todayIcon.png";
import casesIcon from "./img/casesIcon.png";

const MiniCards = ({ country }) => {
  const [data, setData] = useState({ countryData: null, loading: false });
  useEffect(() => {
    setData({ data: null, loading: true });
    const fetchAPI = async () => {
      setData({ countryData: await fetchCountryData(country), loading: false });
    };

    fetchAPI();
  }, [country]);

  const { loading, countryData } = data;
  
  return (
    <div className={styles.container}>
      <MiniCard
        type="death"
        name="Deaths"
        quantity={countryData ? countryData.TotalDeaths : "нет данных"}
        loading={loading}
        icon={ripIcon}
      />
      <MiniCard
        type="active"
        name="Active"
        quantity={countryData ? countryData.ActiveCases : "нет данных"}
        loading={loading}
        icon={activeIcon}
      />
      <MiniCard
        type="cases"
        name="Cases"
        quantity={countryData ? countryData.TotalCases : "нет данных"}
        loading={loading}
        icon={casesIcon}
      />
      <MiniCard
        type="today"
        name="Today"
        quantity={countryData ? countryData.NewCases : "нет данных"}
        loading={loading}
        icon={todayIcon}
      />
      <MiniCard
        type="critical"
        name="Critical"
        quantity={countryData ? countryData.Serious_Critical : "нет данных"}
        loading={loading}
        icon={criticalIcon}
      />
      <MiniCard
        type="recovered"
        name="Recovered"
        quantity={countryData ? countryData.TotalRecovered : "нет данных"}
        loading={loading}
        icon={recoveredIcon}
      />
    </div>
  );
};

export default MiniCards;
