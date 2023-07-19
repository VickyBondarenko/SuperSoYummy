import React, { useEffect } from "react";

import { fetchCategories } from "../../redux/categoriesSlice/categoriesThunk";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import {
  selectMemoCategoryList,
  // selectIsLoading,
} from "../../redux/categoriesSlice/categoriesSelector";

interface ICategoriesNavProps {
  handleCategoryChange: (category: string) => void;
  activeCategory: string;
}

export const CategoriesNav: React.FC<ICategoriesNavProps> = ({
  handleCategoryChange,
  activeCategory,
}) => {
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(selectMemoCategoryList);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="w-full h-[55px] overflow-hidden hover:overflow-auto border-b-4 hover:border-b-0 scrollbar-track-listUnderline border-listUnderline scrollbar scrollbar-thumb-accentMain scrollbar-medium mb-8 ">
      <ul className="flex flex-row gap-[28px] md:gap-[55px] p-2">
        {categoryList.map((item: string, index: number) => (
          <li
            key={index}
            onClick={() => handleCategoryChange(item)}
            className={`font-main text-customXxs md:text-[18px] cursor-pointer ${
              item !== activeCategory
                ? "text-listUnderline"
                : "text-accentMain scale-125"
            } transition duration-300 ease-in-out hover:text-accentMain`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
