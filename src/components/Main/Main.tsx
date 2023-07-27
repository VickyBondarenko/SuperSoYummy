import React from "react";
import styles from "./Main.module.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { changeCategory } from "../../redux/categoriesSlice/categoriesSlice";

import { Link } from "react-router-dom";
import { Hero } from "./Hero/Hero";
import { MainGallery } from "./MainGallery/MainGallery";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <section className={`${styles.main_section} ${styles.main_section_before}`}>
      <Hero />
      <MainGallery />
      <Link
        className={styles.main_link}
        onClick={() => dispatch(changeCategory("Beef"))}
        to="/categories"
      >
        <AsimetricRoundedBtn
          style={`${styles.main_btn} text-accentDark dark:text-whiteText `}
          text="Other categories"
        />
      </Link>
    </section>
  );
};
