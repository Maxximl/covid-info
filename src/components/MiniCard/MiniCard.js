import React from "react";
import styles from "./MiniCard.module.css";
import cn from "classnames";
import MiniSpinner from "../MiniSpinner/MiniSpinner";

const MiniCard = ({ type, name, quantity, loading, icon }) => {
  const numbers = loading ? <MiniSpinner /> : quantity;
  return (
    <div className={cn(styles.container, styles[`${type}`])}>
      <div className={styles.dataContainer}>
        <div>{numbers}</div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.imgContainer}>
        <img src={icon} alt="icon"></img>
      </div>
    </div>
  );
};

export default MiniCard;
