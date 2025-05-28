import React from "react";
import styles from "./Sidebar.module.css";
import { navigationLinks } from "../../data/navigation";

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.logo}>
      <span className={styles.health}>Health</span>
      <span className={styles.care}>care</span>
      <span className={styles.dot}>.</span>
    </div>
    <div className={styles.sectionTitle}>General</div>
    <nav>
      <ul className={styles.navList}>
        {navigationLinks.map(link => (
          <li
            key={link.label}
            className={`${styles.navItem} ${link.label === "Dashboard" ? styles.dashboardLink : ""}`}
          >
            {link.icon && <i className={`${link.icon} ${styles.icon}`}></i>}
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
    <div className={styles.settings}>
      <i className={`fas fa-cog ${styles.icon}`}></i>
      Setting
    </div>
  </aside>
);

export default Sidebar;