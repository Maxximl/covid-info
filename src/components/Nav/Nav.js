import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>Статистика</li>
        <li>Графики</li>
        <li>Карта</li>
        <li>Избранное</li>
      </ul>
    </div>
  );
};

export default Nav;
