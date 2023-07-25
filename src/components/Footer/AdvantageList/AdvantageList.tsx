import React from "react";
import styles from "./AdvantageList.module.css";

export const AdvantageList: React.FC = () => {
  return (
    <ul className={styles.advantage_list}>
      <li>Database of recipes that can be replenished </li>
      <li>Flexible search for desired and unwanted ingredients</li>
      <li>Ability to add your own recipes with photos</li>
      <li>Convenient and easy to use</li>
    </ul>
  );
};
