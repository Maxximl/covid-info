import React from "react";
import styles from "./AppHeader.module.css";
import Nav from "../Nav";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <Nav />
    </div>
  );
};

export default AppHeader;
