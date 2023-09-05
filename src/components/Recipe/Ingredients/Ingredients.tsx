import React from "react";
import styles from "./Ingredients.module.css";
// import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../../hooks/reduxHooks";

import { selectOneRecipeIngredients } from "../../../redux/recipeSlice/recipeSelect";
import { IngredientsTableHeader } from "./IngredientsTableHeader/IngredientsTableHeader";
import { IRecipeIngredient } from "../../../types/RecipeType";
// import { IIngredient } from "../../../types/ingredientsTypes";
import { IngredientsTableRow } from "./IngredientsTableRow/IngredientsTableRow";

export const Ingredients: React.FC = () => {
  const recipeIngredients = useAppSelector(selectOneRecipeIngredients);

  return (
    <div className={styles.ingred_wrapper}>
      <IngredientsTableHeader action="Add to list" />
      {recipeIngredients && (
        <ul className="flex flex-col gap-4 md:gap-6">
          {recipeIngredients.map((item: IRecipeIngredient, index: number) => (
            <li key={index} className="">
              <IngredientsTableRow item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
