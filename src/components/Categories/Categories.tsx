import React from "react";
import styles from "./Categories.module.css";

import { CategoriesNav } from "./CategoriesNav/CategoriesNav";
import { CategoriesGallery } from "./CategoriesGallery/CategoriesGallery";

export const Categories: React.FC = () => {
  return (
    <section className={styles.categories_section}>
      <h1 className={styles.categories_title}>Categories</h1>
      <CategoriesNav />
      <CategoriesGallery />
    </section>
  );
};
