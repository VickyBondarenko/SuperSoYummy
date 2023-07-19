import React, { useEffect } from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { IRecipeInfo } from "../RecipeCard/RecipeCard";
import { fetchCurrentCategory } from "../../redux/categoriesSlice/categoriesThunk";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import {
  selectCategoryRecipes,
  // selectIsLoading,
} from "../../redux/categoriesSlice/categoriesSelector";

export const CategoriesGallery: React.FC<{ activeCategory: string }> = ({
  activeCategory,
}) => {
  const dispatch = useAppDispatch();
  const categoryRecipes = useAppSelector(selectCategoryRecipes);

  useEffect(() => {
    dispatch(fetchCurrentCategory(activeCategory));
  }, [dispatch, activeCategory]);

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {categoryRecipes.map((item: IRecipeInfo) => (
        <RecipeCard
          key={item._id}
          _id={item._id}
          preview={item.preview}
          title={item.title}
          description={item.description}
          time={item.time}
        />
      ))}
    </ul>
  );
};
