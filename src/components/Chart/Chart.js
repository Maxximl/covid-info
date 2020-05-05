import React, { useState, useEffect } from "react";
import { fetchDaily } from "../../api";

import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyApi = async () => {
      setDailyData(await fetchDaily(country));
    };


      fetchDailyApi();
    
   
  }, [country]);

  const chartData = {
    labels: dailyData ? dailyData.map(({ date }) => date) : [],
    datasets: [
      {
        data: dailyData ? dailyData.map(({ confirmed }) => confirmed) : [],
        label: "Инфицировано",
        borderColor: "#3333ff",
        fill: true,
      },
      {
        data: dailyData ? dailyData.map(({ deaths }) => deaths) : [],
        label: "Смертей",
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.5)",

        fill: true,
      },
      {
        data: dailyData ? dailyData.map(({ recovered }) => recovered) : [],
        label: "Выздоровлений",
        borderColor: "green",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2>{country}</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
