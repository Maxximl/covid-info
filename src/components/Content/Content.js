import React from 'react';
import styles from './Content.module.css';
import Cards from '../Cards/Cards';


const Content = () => {
    return (
        <div className={styles.content}>
            <Cards/>
        </div>
    )
}

export default Content;