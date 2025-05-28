import React from "react";
import styles from "./AnatomySection.module.css";
import anatomyImg from "../../assets/anatomy.png";
import { healthIndicators } from "../../data/healthData";

const AnatomySection = () => (
  <div className={styles.anatomySection}>
    <img src={anatomyImg} alt="Anatomy" className={styles.anatomyImg} />
    {healthIndicators.map(ind => (
      <div
        key={ind.label}
        className={`${styles.indicator} ${styles[ind.status]}`}
        style={{ top: ind.top, left: ind.left }}
      >
        {ind.icon} {ind.label}
      </div>
    ))}
  </div>
);

export default AnatomySection;