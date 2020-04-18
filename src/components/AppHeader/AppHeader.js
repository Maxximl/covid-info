import React from 'react';
import styles from './AppHeader.module.css';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';



const AppHeader = () => {
    return (
    <div className={styles.header}>
        <Logo/>
        <Nav/>
    </div>
    )
}

export default AppHeader;