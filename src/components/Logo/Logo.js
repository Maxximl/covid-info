import React from 'react';
import logo from '../../images/covid-logo.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt='logo'></img>
        </div>
    )
}

export default Logo;