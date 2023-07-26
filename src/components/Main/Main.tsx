import React from "react";
import { Hero } from "./Hero/Hero";
import { MainGallery } from "./MainGallery/MainGallery";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";
import styles from "./Main.module.css";

export const Main: React.FC = () => {
  return (
    <section className={`${styles.main_section} ${styles.main_section_before}`}>
      <Hero />
      <MainGallery />
      <AsimetricRoundedBtn text={"Other categories"} />
    </section>
  );
};
