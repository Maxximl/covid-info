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
  const cardsParameters = [
    {
      type: "death",
      name: "Deaths",
      quantity: countryData ? countryData.TotalDeaths : "no data",
      loading: loading,
      icon: ripIcon,
    },
    {
      type: "active",
      name: "Active",
      quantity: countryData ? countryData.ActiveCases : "no data",
      loading: loading,
      icon: activeIcon,
    },
    {
      type: "cases",
      name: "Cases",
      quantity: countryData ? countryData.TotalCases : "no data",
      loading: loading,
      icon: casesIcon,
    },
    {
      type: "today",
      name: "Today",
      quantity: countryData ? countryData.NewCases : "no data",
      loading: loading,
      icon: todayIcon,
    },
    {
      type: "critical",
      name: "Critical",
      quantity: countryData ? countryData.Serious_Critical : "no data",
      loading: loading,
      icon: criticalIcon,
    },
    {
      type: "recovered",
      name: "Recovered",
      quantity: countryData ? countryData.TotalRecovered : "no data",
      loading: loading,
      icon: recoveredIcon,
    },
  ];

  const renderMiniCards = () => {
    return cardsParameters.map((card) => (
      <MiniCard
        key={card.name}
        type={card.type}
        name={card.name}
        quantity={card.quantity}
        loading={card.loading}
        icon={card.icon}
      />
    ));
  };

  return <div className={styles.container}>{renderMiniCards()}</div>;
};

export default MiniCards;
