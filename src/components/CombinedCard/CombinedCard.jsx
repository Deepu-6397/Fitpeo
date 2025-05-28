import React from "react";
import styles from "./CombinedCard.module.css";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";

const avatarUrl = "/assets/avatar.png";

const CombinedCard = () => (
  <div className={styles.combinedCard}>
    <div className={styles.headerRow}>
      <div className={styles.avatarGroup}>
        <button className={styles.avatarBtn}>
          <img src={avatarUrl} alt="Avatar" className={styles.avatarImg} />
        </button>
      </div>
      <button className={styles.plusBtn}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
    <div className={styles.sections}>
      <div className={styles.calendarSection}>
        <CalendarView />
      </div>
      <div className={styles.scheduleSection}>
        <UpcomingSchedule />
      </div>
    </div>
  </div>
);

export default CombinedCard;