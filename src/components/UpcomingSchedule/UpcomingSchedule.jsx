import React from "react";
import styles from "./UpcomingSchedule.module.css";
import { upcomingSchedule } from "../../data/appointments";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";

const UpcomingSchedule = () => (
  <div className={styles.upcomingSchedule}>
    <div className={styles.title}>The Upcoming Schedule</div>
    {upcomingSchedule.map(day => (
      <div key={day.day} className={styles.daySection}>
        <div className={styles.dayLabel}>{day.day}</div>
        <div className={styles.cardsRow}>
          {day.appointments.map(app => (
            <SimpleAppointmentCard key={app.title} {...app} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;