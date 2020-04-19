import React from 'react';
import styles from './CountryCard.module.css';


const CountryCard = ({ country, cases, deaths }) => {
    return (
        <div className={styles.card}>
            <div className={styles.countryName}>{country}</div>
            <div>{cases}</div>
            <div>{deaths}</div>
        </div>
    )
}

export default CountryCard;