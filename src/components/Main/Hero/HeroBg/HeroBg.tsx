import React from "react";
import styles from "./HeroBg.module.css";

export const HeroBg: React.FC = () => {
  return (
    <div className={`${styles.hero_angle} ${styles.hero_angle_before}`}></div>
  );
};
