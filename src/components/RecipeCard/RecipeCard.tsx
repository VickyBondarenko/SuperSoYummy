import React, { memo } from "react";
import styles from "./RecipeCard.module.css";
import { truncateText } from "../../services/truncateText";

import { BsClock } from "react-icons/bs";

export interface IRecipeInfo {
  _id: string;
  title: string;
  preview: string;
  thumb?: string;
  description: string;
  time: string;
}

export const RecipeCard: React.FC<IRecipeInfo> = memo((props) => {
  const { preview, title, description, time } = props;

  const defaultDescription =
    description.trim() === "" ? "No description" : description;
  const defaultTime = time.trim() === "" ? "N/A" : `${time}`;
  return (
    <li className="relative overflow-hidden group">
      <img src={preview} className={styles.recipe_image} />
      <p
        className={`${styles.recipe_title} dark:text-whiteText dark:bg-accentHalfDark`}
      >
        {title}
      </p>
      <div className="absolute translate-y-full flex justify-center items-center z-10 top-0 left-0 right-0  h-full  bg-overlayBackdrop rounded-lg p-5 font-main text-whiteText group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-in-out overflow-hidden">
        <p className={styles.recipe_overlay_description}>
          {truncateText(defaultDescription)}
        </p>
        <p className={styles.recipe_overlay_time}>
          <BsClock />
          {`${defaultTime} ${defaultTime.length < 6 ? "min" : ""}`}
        </p>
      </div>
    </li>
  );
});
