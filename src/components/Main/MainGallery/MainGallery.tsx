import React, { useEffect, useState } from "react";
import styles from "./MainGallery.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectMemoMainPageRecipes } from "../../../redux/mainPageSlice/mainPageSelector";
import { fetchMainPageRecipes } from "../../../redux/mainPageSlice/mainPageThunk";
import { changeCategory } from "../../../redux/categoriesSlice/categoriesSlice";
import { useMediaQuery } from "react-responsive";

import { RecipeCard } from "../../RecipeCard/RecipeCard";

import { IMainPageResponse } from "../../../types/mainPageTypes";

export const MainGallery: React.FC = () => {
  const [categoryLimit, _] = useState<number>(4);
  const [recipeLimit, setRecipeLimit] = useState<number>(1);
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const dispatch = useAppDispatch();
  const recipeList: IMainPageResponse[] = useAppSelector(
    selectMemoMainPageRecipes
  );

  useEffect(() => {
    if (isTablet) {
      setRecipeLimit(2);
    } else if (isDesktop) {
      setRecipeLimit(4);
    } else {
      setRecipeLimit(1);
    }
  }, [isTablet, isDesktop]);

  useEffect(() => {
    dispatch(fetchMainPageRecipes({ categoryLimit, recipeLimit }));
  }, []);

  return (
    <ul className={styles.gallery_list}>
      {recipeList.map(({ _id, recipes, category }) => {
        return (
          <li key={_id} className={styles.gallery_item}>
            <h2 className={styles.gallery_title}>{category}</h2>
            <ul>
              {recipes.map((item) => {
                return (
                  <RecipeCard
                    key={item._id}
                    _id={item._id}
                    preview={item.preview}
                    title={item.title}
                    description={item.description}
                    time={item.time}
                  />
                );
              })}
            </ul>
            <Link
              to="/categories#scrollToCatWrap"
              className={`${styles.gallery_link} ml-auto`}
            >
              <button
                type="button"
                onClick={() => dispatch(changeCategory(category))}
              >
                See all
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
