import React from "react";
import { IIngrTabHeaderProps } from "../../../../types/RecipeType";

export const IngredientsTableHeader: React.FC<IIngrTabHeaderProps> = ({
  action,
}) => {
  return (
    <div className="flex justify-between bg-accentMain rounded-lg px-[14px] md:px-8 xl:px-10 py-3 md:py-[21px]  text-whiteText font-main font-semibold text-customRecipesTime md:text-[18px] md:leading-[27px]">
      <span>Ingredients</span>
      <div className="flex gap-[18px] md:gap-[38px] xl:gap-[109px]">
        <span>Number</span>
        <span>{action}</span>
      </div>
    </div>
  );
};
