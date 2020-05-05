import React from "react";
import styles from "./CountryCard.module.css";
// import star from "./img/star.png";
// import starSelected from "./img/starSelected.png";

const CountryCard = ({ country, cases, deaths, recovered }) => {
  // const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.countryName}>{country}</div>
      <div className={styles.stat}>
        <div className={styles.countryRecovered}>{recovered}</div>
        <div className={styles.statContainer}>
          <div className={styles.countryCases}>{cases}</div>
          <div className={styles.countryDeaths}>{deaths}</div>
        </div>
      </div>
      <div className={styles.favoritePanel}>
        {/* <img
          src={isFavorite ? starSelected : star}
          onClick={() => setIsFavorite(!isFavorite)}
          alt=""
        ></img> */}
      </div>
    </div>
  );
};

export default CountryCard;
