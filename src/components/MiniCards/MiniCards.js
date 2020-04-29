import React, { useState, useEffect } from "react";
import MiniCard from "../MiniCard/MiniCard";
import styles from './MiniCards.module.css';
import { fetchCountryData } from '../../api';

const MiniCards = ({ country }) => {
    const [data, setData] = useState({});
    console.log(country);
    useEffect(() => {
      const fetchAPI = async () => {
        setData(await fetchCountryData(country));
      };
  
      fetchAPI();
    }, [country]);

  return (
      <>
        <div className={styles.container}>
        <MiniCard type="death" name='Deaths' quantity={data ? data.TotalDeaths : 'нет данных'} />
        <MiniCard type="active" name='Active' quantity={data ? data.ActiveCases : 'нет данных'} />
        <MiniCard type="cases" name='Cases'  quantity={data ? data.TotalCases : 'нет данных'} />
        <MiniCard type="today" name='Today' quantity={data ? data.NewCases : 'нет данных'} />
        <MiniCard type="critical" name='Critical' quantity={data ? data.Serious_Critical : 'нет данных'} />
        <MiniCard type="recovered" name='Recovered' quantity={data ? data.TotalRecovered : 'нет данных'} />
    </div>
      </>
    
  );
};

export default MiniCards;
