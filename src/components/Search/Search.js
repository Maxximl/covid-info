import React from 'react';

import loupe from './img/loupe.png';
import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.container}>
            <img src={loupe} alt="loupe"></img>
        </div>
    )

}

export default Search;