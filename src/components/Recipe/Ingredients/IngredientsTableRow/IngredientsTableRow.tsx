import React, { useState } from "react";
import { IIngrTabRowProps } from "../../../../types/RecipeType";
import { ReactComponent as CheckSvg } from "../../../../images/svg/check.svg";

export const IngredientsTableRow: React.FC<IIngrTabRowProps> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="flex justify-between items-center bg-accentLighter rounded-lg pr-[30px] pl-[10px] py-[15px] font-main">
      <div className="flex items-center gap-3 ">
        <img src={item.thb} alt={item.ttl} className="w-[57px] h-[57px]" />
        <div className="text-[12px] leading-[14px] font-medium">{item.ttl}</div>
      </div>
      <div className="flex gap-7">
        <div className="font-semibold text-[10px] leading-[12px] text-whiteText bg-accentMain p-1 rounded-[4px]">
          {item.measure}
        </div>
        <div onClick={handleToggle}>
          {isSelected ? (
            <CheckSvg className="w-[18px] h-[18px]" />
          ) : (
            <div className="w-[18px] h-[18px] border-2 border-[#7E7E7E] border-opacity-[0.5] rounded-sm"></div>
          )}
        </div>
      </div>
    </div>
  );
};
