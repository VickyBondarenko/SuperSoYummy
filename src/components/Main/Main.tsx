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
          style="flex justify-center items-center cursor-pointer border-2 border-accentMain hover:shadow-[0px_0px_22px_2px_rgba(139,170,54,1)] transition duration-300 w-[195px] h-[46px] md:w-[239px] md:h-[61px] md:text-[16px]  text-accentDark dark:text-whiteText"
          text="Other categories"
        />
      </Link>
    </section>
  );
};
