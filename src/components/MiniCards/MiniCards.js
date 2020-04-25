import React, { useState, useEffect } from "react";
import MiniCard from "../MiniCard/MiniCard";
import styles from './MiniCards.module.css';
import { fetchTotal } from '../../api';

const MiniCards = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      const fetchAPI = async () => {
        setData(await fetchTotal());
        console.log(data);
      };
  
      fetchAPI();
    }, []);
  return (
    <div className={styles.container}>
      <MiniCard type="death" name='Deaths' quantity={data.deaths} />
      <MiniCard type="active" name='Active' quantity={data.newDeaths} />
      <MiniCard type="cases" name='Cases'  quantity={data.confirmed} />
      <MiniCard type="today" name='Today' quantity={data.newConfirmed} />
      <MiniCard type="critical" name='Critical' quantity={data.recovered} />
      <MiniCard type="recovered" name='Recovered' quantity={data.newRecovered} />
    </div>
  );
};

export default MiniCards;
