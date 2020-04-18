import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = () => {
    return (
        <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Cards;