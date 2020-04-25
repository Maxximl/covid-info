import React from "react";
import styles from "./MiniCard.module.css";
import cn from "classnames";
import ripIcon from "./img/ripIcon.png";
import activeIcon from "./img/activeIcon.png";
import recoveredIcon from "./img/recoveredIcon.png";
import criticalIcon from "./img/criticalIcon.png";
import todayIcon from "./img/todayIcon.png";
import casesIcon from "./img/casesIcon.png";

const MiniCard = ({ type, name, quantity }) => {
  let image;
  switch (type) {
    case "death":
      image = ripIcon;
      break;
    case "cases":
      image = casesIcon;
      break;
    case "today":
      image = todayIcon;
      break;
    case "critical":
      image = criticalIcon;
      break;
    case "recovered":
      image = recoveredIcon;
      break;
    case "active":
      image = activeIcon;
      break;

    default:
      image = "";
  }
  return (
    <div className={cn(styles.container, styles[`${type}`])}>
      <div className={styles.dataContainer}>
        <div>{quantity}</div>
        <div className={styles.name}>{ name }</div>
      </div>
      <div className={styles.imgContainer}>
        <img src={image} alt="RIP"></img>
      </div>
    </div>
  );
};

export default MiniCard;
