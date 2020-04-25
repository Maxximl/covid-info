import React from "react";
import styles from "./AppHeader.module.css";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
      <Search/>
    </div>
  );
};

export default AppHeader;
