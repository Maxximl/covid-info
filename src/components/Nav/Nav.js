import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>Главная</li>
        </NavLink>
        <NavLink
          to="charts"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>Графики</li>
        </NavLink>
        <NavLink
          to="map"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>Карта</li>
        </NavLink>
        <NavLink
          to="my_page"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>Моя страница</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
