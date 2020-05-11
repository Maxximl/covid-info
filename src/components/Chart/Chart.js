import React, { useState, useEffect } from "react";
import { fetchDaily } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { getChartData } from "../../utils/chartData";

const Chart = ({ country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyApi = async () => {
      setDailyData(await fetchDaily(country));
    };

    fetchDailyApi();
  }, [country]);

  return (
    <div className={styles.container}>
      <h2>{country}</h2>
      <Line data={getChartData(dailyData)} />
    </div>
  );
};

export default Chart;
