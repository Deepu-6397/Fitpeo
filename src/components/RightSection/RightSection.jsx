import React from "react";
import styles from "./RightSection.module.css";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";

const RightSection = () => (
  <aside className={styles.rightSection}>
    <div className={styles.combinedCard}>
      <CalendarView />
      <UpcomingSchedule />
    </div>
  </aside>
);

export default RightSection;