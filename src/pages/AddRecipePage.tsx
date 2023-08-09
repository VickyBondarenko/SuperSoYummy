import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { fetchPopularRecipes } from "../redux/popularSlice/popularThunk";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  selectIsLoading,
  selectMemoPopularRecipes,
} from "../redux/popularSlice/popularSelect";

import { Loader } from "../components/Preloader/Loader";
import { Link } from "react-router-dom";
import { PopularRecipeCard } from "../components/RecipeCard/PopularRecipeCard";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { AddRecipe } from "../components/AddRecipe/AddRecipe";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";

export const AddRecipePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const popularRecipes = useAppSelector(selectMemoPopularRecipes);
  const isLoading = useAppSelector(selectIsLoading);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const limit = isTablet ? 2 : 4;

  useEffect(() => {
    dispatch(fetchPopularRecipes(limit));
  }, [limit]);

  return (
    <section className="px-4 pb-[100px] pt-3 md:px-8 md:pt-[70px] md:pb-[200px] xl:px-[100px]">
      <PageTitle title="Add recipe" />
      <div className="xl:flex xl:gap-32">
        <AddRecipe />
        <div className="xl:flex-col xl:w-80">
          {isDesktop && (
            <div className="flex flex-col items-start mb-[100px]">
              <h3 className="text-customBase font-semibold tracking-[-0.24px] text-secondaryText dark:text-whiteText mb-10">
                Follow us
              </h3>
              <SocialLinks />
            </div>
          )}

          <div>
            <h3 className="text-customBase font-semibold tracking-[-0.24px] text-secondaryText dark:text-whiteText mb-8 md:mb-10">
              Popular Recipes
            </h3>
            <ul className="flex flex-col gap-6 md:flex-row md:gap-8 md:justify-between xl:flex-col">
              {!isLoading ? (
                popularRecipes.map(({ title, preview, _id, instructions }) => (
                  <Link
                    to="/recipe"
                    key={_id}
                    className=" md:flex-grow xl:flex-grow-0"
                  >
                    <PopularRecipeCard
                      instructions={instructions}
                      title={title}
                      preview={preview}
                    />
                  </Link>
                ))
              ) : (
                <Loader />
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
