import React from "react";
import styles from "./Nav.module.css";
import loupe from './img/loupe.png';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <NavLink to='/statistics'><li>Статистика</li></NavLink>
        <li>Графики</li>
        <li>Карта</li>
        <li>Избранное</li>
        <NavLink to='/search'><li><img className={styles.loupe} src={loupe} alt="loupe"></img></li></NavLink>
      </ul>
    </div>
  );
};

export default Nav;
