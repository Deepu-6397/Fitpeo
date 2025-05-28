import React from "react";
import styles from "./HealthStatusCards.module.css";
import { healthStatusCards } from "../../data/healthData";

const HealthStatusCards = () => (
  <div className={styles.cardsContainer}>
    {healthStatusCards.map(card => (
      <div key={card.label} className={styles.card}>
        <div className={styles.cardHeader}>
          {card.icon} {card.label}
        </div>
        <div className={styles.cardDate}>Date: {card.date}</div>
        <div className={styles.statusBar}>
          <div
            className={styles.statusFill}
            style={{
              width: card.progress + "%",
              background: card.statusColor,
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;