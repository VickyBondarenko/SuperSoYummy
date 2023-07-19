import React from "react";
import { BsClock } from "react-icons/bs";
import styles from "./RecipeCard.module.css";

export interface IRecipeInfo {
  _id: string;
  title: string;
  preview: string;
  thumb?: string;
  description: string;
  time: string;
}

export const RecipeCard: React.FC<IRecipeInfo> = (props) => {
  const { preview, title, description, time } = props;
  return (
    <li className="relative overflow-hidden group">
      <img src={preview} className={styles.recipe_image} />
      <p className={styles.recipe_title}>{title}</p>
      <div className="absolute translate-y-full flex justify-center items-center z-10 top-0 left-0 right-0  h-full  bg-overlayBackdrop rounded-lg p-5 font-main text-whiteText group-hover:translate-y-0 group-hover:opacity-100 transition duration-400 ease-in-out">
        <p>{description}</p>
        <p className={styles.recipe_overlay_time}>
          <BsClock />
          {time} min
        </p>
      </div>
    </li>
  );
};
