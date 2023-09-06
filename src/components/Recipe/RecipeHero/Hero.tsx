import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectOneRecipe } from "../../../redux/recipeSlice/recipeSelect";
import { selectUserId } from "../../../redux/authSlice/authSelectors";
import { ReactComponent as TimeSvg } from "../../../images/svg/time.svg";
import { IHeroProps } from "../../../types/RecipeType";
import { fetchToggleFavoriteRecipe } from "../../../redux/favoritesSlice/favoritesThunk";

export const Hero: React.FC<IHeroProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useAppDispatch();

  const [recipe] = useAppSelector(selectOneRecipe);
  const userId = useAppSelector(selectUserId);

  useEffect(() => {
    if (recipe) {
      const favoritesArr: string[] = recipe.favorites;
      if (favoritesArr && userId && favoritesArr.includes(userId)) {
        setIsFavorite(true);
      }
    }
  }, []);

  const handleClick = () => {
    dispatch(fetchToggleFavoriteRecipe(id));
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className={styles.hero_wrapper}>
      {recipe && (
        <div className={styles.hero_title_wrapper}>
          <h1 className={styles.hero_title}>{recipe.title}</h1>
          <p className={styles.hero_text}>{recipe.description}</p>
          <button
            type="button"
            onClick={handleClick}
            className={styles.hero_button}
          >
            {isFavorite === true
              ? "Remove from favorite recipes"
              : "Add to favorite recipes"}
          </button>
          <p className={styles.hero_time}>
            <TimeSvg className=" w-[14px] md:w-[20px]  h-[14px] md:h-[20px]  stroke-accentDark hover:stroke-accentMain  dark:hover:stroke-accentMain " />
            <span>{recipe.time} min</span>
          </p>
        </div>
      )}
    </div>
  );
};
