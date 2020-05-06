import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const Cards = ({ data }) => {
  if (!data)
    return (
      <div className={styles.container}>
        <div className={styles.spinner}>
          <Spinner />
        </div>
      </div>
    );
  const { cases, deaths, recovered } = data;
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card header="Infected" quantity={cases} type="infected" />
        <Card header="Deaths" quantity={deaths} type="deaths" />
        <Card header="Recovered" quantity={recovered} type="recovered" />
      </div>
    </div>
  );
};

export default Cards;
