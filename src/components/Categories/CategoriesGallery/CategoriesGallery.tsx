import React, { useEffect } from "react";
import styles from "./CategoriesGallery.module.css";

import { fetchCurrentCategory } from "../../../redux/categoriesSlice/categoriesThunk";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  selectCategoryRecipes,
  selectIsLoading,
  selectCategory,
} from "../../../redux/categoriesSlice/categoriesSelector";

import { RecipeCard } from "../../RecipeCard/RecipeCard";
import { IRecipeInfo } from "../../RecipeCard/RecipeCard";
import { Loader } from "../../Preloader/Loader";

export const CategoriesGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoryRecipes = useAppSelector(selectCategoryRecipes);
  const activeCategory = useAppSelector(selectCategory);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCurrentCategory(activeCategory));
  }, [dispatch, activeCategory]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.category_gallery_list}>
          {categoryRecipes.map((item: IRecipeInfo) => (
            <RecipeCard
              _id={item._id}
              preview={item.preview}
              title={item.title}
              description={item.description}
              time={item.time}
              key={item._id}
            />
          ))}
        </ul>
      )}
    </>
  );
};
