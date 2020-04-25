import React from 'react';
import styles from './CountryInfo.module.css';
import MiniCards from '../MiniCards/MiniCards';
import CountryList from '../CountryList/CountryList';
import Maps from '../Maps/Maps';

const CountryInfoPage = () => {
    return (
        <div className={styles.container}>
            <MiniCards />
            <CountryList />
            <Maps />
        </div>
    )
}

export default CountryInfoPage;