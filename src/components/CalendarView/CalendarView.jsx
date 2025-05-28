import React from "react";
import styles from "./CalendarView.module.css";
import avatar from "../../assets/avatar.png";
import { calendarData, appointments } from "../../data/appointments";

const CalendarView = () => (
  <div className={styles.calendarView}>
    <div className={styles.calendarHeaderRow}>
      <div className={styles.profile}>
        <img src={avatar} alt="User" className={styles.avatar} />
      </div>
      <button className={styles.addBtn}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
    <div className={styles.monthHeader}>October 2021</div>
    <div className={styles.calendarGrid}>
      {calendarData.map(day => (
        <div key={day.date} className={styles.dayColumn}>
          <div className={styles.dayLabel}>
            <span className={styles.dayName}>{day.label.split(" ")[0]}</span>
            <br />
            <span className={styles.dayDate}>{day.label.split(" ")[1]}</span>
          </div>
          {day.times.map(time => (
            <div key={time} className={styles.timeSlot}>{time}</div>
          ))}
        </div>
      ))}
    </div>
    <div className={styles.appointmentCards}>
      {appointments.map(app => (
        <div key={app.title} className={styles.appointmentCard}>
          <div className={styles.appointmentInfo}>
            <div>
              <div className={styles.appointmentTitleRow}>
                <span className={styles.appointmentTitle}>{app.title}</span>
                <span className={styles.appointmentIcon}>{app.icon}</span>
              </div>
              <div className={styles.appointmentTime}>{app.time}</div>
              <div className={styles.appointmentDoctor}>{app.doctor}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarView;