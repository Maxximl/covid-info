import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const routes = [
    {
      to: "/",
      exact: true,
      name: "Main",
    },
    {
      to: "charts",
      exact: true,
      name: "Charts",
    },
    {
      to: "map",
      exact: true,
      name: "Map",
    },
    {
      to: "news",
      exact: true,
      name: "News",
    },
  ];
  const renderRoutes = () => {
    return routes.map((route) => (
      <NavLink
        key={route.name}
        to={route.to}
        exact={route.exact}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <li>{route.name}</li>
      </NavLink>
    ));
  };
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>{renderRoutes()}</ul>
    </div>
  );
};

export default Nav;
