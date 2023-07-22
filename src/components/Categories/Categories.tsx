import React from "react";
import styles from "./Categories.module.css";

import { PageTitle } from "../PageTitle/PageTitle";
import { CategoriesNav } from "./CategoriesNav/CategoriesNav";
import { CategoriesGallery } from "./CategoriesGallery/CategoriesGallery";

export const Categories: React.FC = () => {
  return (
    <section className={styles.categories_section}>
      <PageTitle title={"Categories"} />
      <CategoriesNav />
      <CategoriesGallery />
    </section>
  );
};
