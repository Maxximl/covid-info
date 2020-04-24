import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';
import CountUp from 'react-countup';


const Card = ({ header, quantity, type}) => {
    return (
        <div className={cn(styles.card, styles[`${type}`])}>
            <div className={styles.header}>{ header }</div>
            <div className={styles.quantity}>
                
                <CountUp
                    start={0}
                    end={quantity}
                    duration={2.5}
                    separator=','/>
                </div>
        </div>
    )
}

export default Card;