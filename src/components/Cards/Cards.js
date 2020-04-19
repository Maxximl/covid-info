import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';

const Cards = ({ data }) => {
    if (!data.reports) return (
        <div className={styles.worldStatistics}>
            <div>
                <Spinner />
            </div>
        </div>
    )
    const { cases, deaths, recovered } = data.reports[0];
    return (
        <div className={styles.worldStatistics}>
            <h2>Ситуация в мире:</h2>
            <div className={styles.cards}>
                <Card header='Инфицирований'
                    quantity={cases}
                    type='infected' />
                <Card header='Смертей'
                    quantity={deaths}
                    type='deaths' />
                <Card header='Выздоровлений'
                    quantity={recovered}
                    type='recovered' />
            </div>
        </div>

    )
}

export default Cards;