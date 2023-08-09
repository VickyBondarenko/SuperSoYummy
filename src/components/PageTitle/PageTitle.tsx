import React from "react";
import styles from "./PageTitle.module.css";

interface ITitle {
  title:
    | "Categories"
    | "Add recipe"
    | "Favories"
    | "My Recipes"
    | "Search"
    | "Shopping list";
}

export const PageTitle: React.FC<ITitle> = ({ title }) => {
  return (
    <div className="relative">
      <h1 className={`${styles.title} dark:text-whiteText`}>{title}</h1>
      <div className={styles.first_dot}></div>
      <div className={`${styles.second_dot} dark:bg-whiteText`}></div>
      <div className={styles.third_dot}></div>
    </div>
  );
};
