import React from "react";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import RightSection from "./components/RightSection/RightSection";

const App = () => (
  <div className={styles.appContainer}>
    <Sidebar />
    <div className={styles.dashboardLayout}>
      <div className={styles.mainColumn}>
        <Header />
        <DashboardMainContent />
      </div>
      <div className={styles.rightSidebar}>
        <RightSection />
      </div>
    </div>
  </div>
);

export default App;