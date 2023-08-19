import React, { useEffect, useState } from "react";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { RecipeList } from "../components/RecipeList/RecipeList";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  fetchOwnRecipes,
  fetchDeleteOwnRecipe,
} from "../redux/ownRecipeSlice/ownRecipeThunk";
import {
  selectOwnRecipes,
  selectOwnRecipesTotalPages,
} from "../redux/ownRecipeSlice/ownRecipeSelector";

export const MyRecipesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toggleEffect, setToggleEffect] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const ownRecipes = useAppSelector(selectOwnRecipes);
  const totalPages = useAppSelector(selectOwnRecipesTotalPages);

  const handleDeleteRecipe = (_id: string): void => {
    dispatch(fetchDeleteOwnRecipe(_id));
    if (ownRecipes.length === 1 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    setToggleEffect(!toggleEffect);
  };

  useEffect(() => {
    dispatch(fetchOwnRecipes({ page: currentPage, limit: 4 }));
  }, [currentPage, toggleEffect]);

  const onChangePage = (curPage: number) => {
    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    setCurrentPage(curPage);
  };

  return (
    <section className="px-4 pb-[100px] pt-[50px] md:px-8 md:pb-[200px] xl:px-[99px]">
      <PageTitle title="My Recipes" />
      <RecipeList
        recipeData={ownRecipes}
        deleteFunc={handleDeleteRecipe}
        totalPages={totalPages}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </section>
  );
};
