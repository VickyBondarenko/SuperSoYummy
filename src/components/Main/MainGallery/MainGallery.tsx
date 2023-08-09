import React, { useEffect, useState } from "react";
import styles from "./MainGallery.module.css";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

import {
  selectMemoMainPageRecipes,
  selectIsLoading,
} from "../../../redux/mainPageSlice/mainPageSelector";
import { fetchMainPageRecipes } from "../../../redux/mainPageSlice/mainPageThunk";
import { changeCategory } from "../../../redux/categoriesSlice/categoriesSlice";

import { Link } from "react-router-dom";
import { Loader } from "../../Preloader/Loader";
import { RecipeCard } from "../../RecipeCard/RecipeCard";

import { IMainPageResponse } from "../../../types/mainPageTypes";

export const MainGallery: React.FC = () => {
  const [categoryLimit, _] = useState<number>(4);
  const recipeList: IMainPageResponse[] = useAppSelector(
    selectMemoMainPageRecipes
  );
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const recipeLimit = isDesktop ? 4 : isTablet ? 2 : 1;

  useEffect(() => {
    dispatch(fetchMainPageRecipes({ categoryLimit, recipeLimit }));
  }, [categoryLimit, recipeLimit]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.gallery_list}>
          {recipeList.map(({ _id, recipes, category }) => {
            return (
              <li key={_id} className={styles.gallery_item}>
                <h2 className={`${styles.gallery_title} dark:text-whiteText`}>
                  {category}
                </h2>
                <ul className={styles.gallery_recipe_list}>
                  {recipes.map((item) => {
                    return (
                      <Link to="/recipe" key={item._id}>
                        <RecipeCard
                          _id={item._id}
                          preview={item.preview}
                          title={item.title}
                          description={item.description}
                          time={item.time}
                        />
                      </Link>
                    );
                  })}
                </ul>
                <Link
                  onClick={() => dispatch(changeCategory(category))}
                  to="/categories"
                  className={`${styles.gallery_link} ml-auto`}
                >
                  <button type="button">See all</button>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
