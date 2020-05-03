import React from 'react';
import styles from './CountrySearch.module.css';

const CountrySearch = ({ searched, handleSearching }) => {
    return (
        <input
        className={styles.countrySearch}
        value={searched}
        onChange={handleSearching}
      />
    )
}

export default CountrySearch;