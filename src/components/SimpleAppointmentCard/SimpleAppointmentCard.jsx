import React from "react";
import styles from "./SimpleAppointmentCard.module.css";

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>{time}</div>
    </div>
    <div className={styles.icon}>{icon}</div>
  </div>
);

export default SimpleAppointmentCard;