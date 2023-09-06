import React from "react";
import { IIngrTabHeaderProps } from "../../../../types/RecipeType";

export const IngredientsTableHeader: React.FC<IIngrTabHeaderProps> = ({
  itemName,
  action,
  wrapperStyle,
  actionStyle,
}) => {
  return (
    <div className={wrapperStyle}>
      <span>{itemName}</span>
      <div className={actionStyle}>
        <span>Number</span>
        <span>{action}</span>
      </div>
    </div>
  );
};
