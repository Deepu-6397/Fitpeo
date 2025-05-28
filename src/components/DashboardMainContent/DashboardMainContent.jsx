import React from "react";
import styles from "./DashboardMainContent.module.css";
import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import ActivityFeed from "../ActivityFeed/ActivityFeed";


const DashboardMainContent = () => (
  <main className={styles.dashboardMain}>
    <section className={styles.leftPanel}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.anatomyAndStatus}>
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <ActivityFeed />
    </section>
  </main>
);

export default DashboardMainContent;