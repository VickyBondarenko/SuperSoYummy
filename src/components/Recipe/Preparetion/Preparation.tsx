import React from "react";
import styles from "./Preparation.module.css";
// import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../../hooks/reduxHooks";

import {
  selectOneRecipeImg,
  selectOneRecipePreparation,
} from "../../../redux/recipeSlice/recipeSelect";

export const Preparation: React.FC = () => {
  //   const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const recipeImg = useAppSelector(selectOneRecipeImg);
  const recipePreparation = useAppSelector(selectOneRecipePreparation);
  let preparationArr: string[] = [];
  if (recipePreparation) {
    preparationArr = recipePreparation.split(". ");
    preparationArr = preparationArr.map((item, index) =>
      index === preparationArr.length - 1 ? item : item + "."
    );
  }

  return (
    <div className={styles.prep_wrapper}>
      <div>
        {" "}
        <h2 className={styles.prep_title}>Recipe Preparation</h2>
        <ul className={styles.prep_list}>
          {preparationArr.map((item: string, index: number) => (
            <li key={index} className={styles.prep_item}>
              <div className={styles.prep_item_number}>{index + 1}</div>
              <span className={styles.prep_item_text}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <img src={recipeImg} alt="recipe foto" className={styles.prep_img} />
    </div>
  );
};
