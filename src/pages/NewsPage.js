import React from 'react';
import styles from './NewsPage.module.css';
import NewsCards from '../components/NewsCards/NewsCards';
import CountryCards from '../components/CountryCards/CountryCards';

const NewsPage = () => {
    return (
        <div className={styles.container}>
            <CountryCards/>
            <div className={styles.newsContainer}>
            <h2>Новости</h2>
             <NewsCards />
        </div>
        </div>
        
    )
}

export default NewsPage;