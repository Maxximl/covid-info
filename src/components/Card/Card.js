import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';

const Card = ({ header, quantity, type}) => {
    return (
        <div className={cn(styles.card, styles[`${type}`])}>
            <div className={styles.header}>{ header }</div>
            <div className={styles.quantity}>{ quantity }</div>
        </div>
    )
}

export default Card;