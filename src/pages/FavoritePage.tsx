import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import {
  fetchFavoriteRecipes,
  fetchToggleFavoriteRecipe,
} from "../redux/favoritesSlice/favoritesThunk";

import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectFavoriteRecipesMetaData,
} from "../redux/favoritesSlice/favoritesSelector";

import { PageTitle } from "../components/PageTitle/PageTitle";
import { RecipeList } from "../components/RecipeList/RecipeList";
import { SearchNothingFound } from "../components/Search/SearchNothingFound/SearchNothingFound";
import { Loader } from "../components/Preloader/Loader";

export const FavoritePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toggleEffect, setToggleEffect] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const favoriteRecipes = useAppSelector(selectFavoriteRecipes);
  const metaData = useAppSelector(selectFavoriteRecipesMetaData);
  const isLoading = useAppSelector(selectIsLoading);

  const handleDeleteRecipe = async (_id: string): Promise<void> => {
    await dispatch(fetchToggleFavoriteRecipe(_id));
    if (favoriteRecipes.length === 1 && currentPage !== 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    setToggleEffect(!toggleEffect);
  };

  useEffect(() => {
    dispatch(fetchFavoriteRecipes({ page: currentPage, limit: 4 }));
  }, [currentPage, toggleEffect]);

  const onChangePage = (curPage: number) => {
    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    setCurrentPage(curPage);
  };

  return (
    <section className="px-4 pb-[100px] pt-[50px]  md:pt-[82px] md:px-8 md:pb-[200px] xl:px-[99px]">
      <PageTitle title="Favorites" />
      {isLoading && <Loader />}
      {!isLoading && favoriteRecipes.length === 0 && (
        <SearchNothingFound text="You have not add any favorite recipe yet..." />
      )}
      {!isLoading && favoriteRecipes.length !== 0 && (
        <RecipeList
          recipeData={favoriteRecipes}
          deleteFunc={handleDeleteRecipe}
          metaData={metaData}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      )}
    </section>
  );
};
export default FavoritePage;
