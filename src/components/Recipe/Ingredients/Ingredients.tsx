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
      <IngredientsTableHeader
        wrapperStyle="flex justify-between bg-accentMain rounded-lg px-[14px] md:px-8 xl:px-10 py-3 md:py-[21px]  text-whiteText font-main font-semibold text-customRecipesTime md:text-[18px] md:leading-[27px]"
        actionStyle="flex gap-[18px] md:gap-[38px] xl:gap-[109px]"
        action="Add to list"
        itemName="Ingredients"
      />
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
