import React from "react";
import styles from "./ActivityFeed.module.css";
import { activityData } from "../../data/appointments";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ActivityFeed = () => (
  <div className={styles.activityFeed}>
    <div className={styles.header}>
      Activity <span>3 appointments in last week</span>
    </div>
    <div className={styles.barsWrapper}>
      {days.map((day, dayIdx) => (
        <div key={day} className={styles.dayGroup}>
          <div className={styles.grid3x3}>
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => {
                const barIdx = dayIdx * 9 + row * 3 + col;
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`${styles.bar} ${styles[`bar${col + 1}`]}`}
                    style={{ height: `${30 + 10 * row + 5 * col}px` }} 
                  />
                );
              })
            )}
          </div>
          <div className={styles.dayLabel}>{day}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;