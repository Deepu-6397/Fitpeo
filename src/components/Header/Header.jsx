import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <div className={styles.searchBar}>
        <i className={`fas fa-search ${styles.searchIcon}`}></i>
        <input type="text" placeholder="Search" />
      </div>
      <button className={styles.notificationBtn}>
        <i className={`fas fa-bell ${styles.notification}`}></i>
      </button>
    </div>
  </header>
);

export default Header;