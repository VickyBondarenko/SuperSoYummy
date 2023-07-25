import React from "react";
import styles from "./Hero.module.css";
import SaladImg from "../../../images/1spoon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HeroForm } from "./HeroForm/HeroForm";

export const Hero: React.FC = () => {
  return (
    <div className={styles.hero_wrapper}>
      <h1 className={styles.hero_title}>
        <span className="text-accentMain">So</span>
        <span>Yummy</span>
      </h1>
      <p className={styles.hero_text}>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </p>
      <div className={styles.hero_image_wrapper}>
        <img className={styles.hero_image} src={SaladImg} alt="salad" />
        <div className={styles.hero_message_wrapper}>
          <p className={styles.hero_message_text}>
            <span className="text-accentMain">Delicious and healthy </span>
            way to enjoy a variety of fresh ingredients in one satisfying meal
          </p>
          <button type="button" className={styles.hero_message_button}>
            <Link to="/categories">
              See recipes
              <BsArrowRight size={18} className={styles.hero_message_svg} />
            </Link>
          </button>
        </div>
      </div>
      <HeroForm />
    </div>
  );
};
