import React from 'react';
import styles from './CountryItem.module.css';

const CountryItem = ({ name }) => {

    return (
         <div className={styles.listItem}>
             {name}
         </div>
    )
}

export default CountryItem;