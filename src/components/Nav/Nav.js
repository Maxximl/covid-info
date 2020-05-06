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
          <li>Main</li>
        </NavLink>
        <NavLink
          to="charts"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>Charts</li>
        </NavLink>
        <NavLink
          to="map"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>Map</li>
        </NavLink>
        <NavLink
          to="news"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <li>News</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
