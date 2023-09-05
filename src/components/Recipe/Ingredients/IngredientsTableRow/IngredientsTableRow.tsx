import React, { useState } from "react";
import { IIngrTabRowProps } from "../../../../types/RecipeType";
import { ReactComponent as CheckSvg } from "../../../../images/svg/check.svg";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import {
  fetchDeleteShoppingIngredient,
  fetchPostShoppingIngredient,
} from "../../../../redux/shoppingListSlice/shoppingListThunk";

import { IShoppingItem } from "../../../../types/shoppingListTypes";

export const IngredientsTableRow: React.FC<IIngrTabRowProps> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [ingrId, setIngrId] = useState(item._id);

  const dispatch = useAppDispatch();

  const ingredient = {
    _id: ingrId,
    measure: item.measure,
    ttl: item.ttl,
    thb: item.thb,
  };

  const handleToggle = async () => {
    if (isSelected) {
      dispatch(fetchDeleteShoppingIngredient(ingrId));
    } else {
      const data = await dispatch(fetchPostShoppingIngredient(ingredient));
      setIngrId((data.payload as IShoppingItem)?._id);
    }

    setIsSelected(!isSelected);
  };

  return (
    <div className="flex justify-between items-center bg-accentLighter dark:bg-accentHalfDark rounded-lg pr-[30px] md:pr-[58px] xl:pr-[70px] pl-[10px] md:pl-10 xl:pl-[58px] py-[15px] md:py-[33px]  font-main ">
      <div className="flex items-center gap-3 md:gap-10 xl:gap-[66px]">
        <img
          src={item.thb}
          alt={item.ttl}
          className="w-[57px] md:w-[112px] xl:w-[128px] h-[57px] md:h-[112px] xl:h-[128px]"
        />
        <div className="text-[12px] leading-[14px] md:text-customBase font-medium dark:text-whiteText">
          {item.ttl}
        </div>
      </div>
      <div className="flex items-center gap-7 md:gap-[78px] xl:gap-[150px]">
        <div className="min-w-[38px]  md:min-w-[68px] text-center font-semibold text-[10px] md:text-[18px] leading-[12px] md:leading-[27px] text-whiteText bg-accentMain p-1 rounded-[4px]">
          {item.measure}
        </div>
        <div onClick={handleToggle}>
          {isSelected ? (
            <CheckSvg className="w-[18px] md:w-[35px] h-[18px] md:h-[35px]" />
          ) : (
            <div className="w-[18px] md:w-[35px] h-[18px] md:h-[35px] border-2 border-[#7E7E7E] border-opacity-[0.5] rounded-sm"></div>
          )}
        </div>
      </div>
    </div>
  );
};
