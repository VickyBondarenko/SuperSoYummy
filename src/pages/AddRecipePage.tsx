import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { AddRecipe } from "../components/AddRecipe/AddRecipe";
import { fetchPopularRecipes } from "../redux/popularSlice/popularThunk";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  selectIsLoading,
  selectMemoPopularRecipes,
} from "../redux/popularSlice/popularSelect";
import { PopularRecipeCard } from "../components/RecipeCard/PopularRecipeCard";
import { Link } from "react-router-dom";

export const AddRecipePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const popularRecipes = useAppSelector(selectMemoPopularRecipes);
  const isLoading = useAppSelector(selectIsLoading);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const limit = isTablet ? 2 : 4;

  useEffect(() => {
    dispatch(fetchPopularRecipes(limit));
  }, [limit]);

  return (
    <section className="px-4 pb-[100px] pt-3">
      <PageTitle title="Add recipe" />
      <div>
        <AddRecipe />
      </div>
      <div>
        <h3 className="text-customBase font-semibold tracking-[-0.24px] text-secondaryText dark:text-whiteText mb-8 md:mb-10">
          Popular Recipes
        </h3>
        <ul className="flex flex-col gap-6 md:flex-row md:gap-8 md:justify-between">
          {!isLoading &&
            popularRecipes.map(({ title, preview, _id, instructions }) => (
              <Link to="/recipe" key={_id} className=" md:flex-grow">
                <PopularRecipeCard
                  instructions={instructions}
                  title={title}
                  preview={preview}
                />
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
};
