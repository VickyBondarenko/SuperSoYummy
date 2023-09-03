import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchOneRecipe } from "../redux/recipeSlice/recipeThunk";

import { Hero } from "../components/Recipe/RecipeHero/Hero";
import { Preparation } from "../components/Recipe/Preparetion/Preparation";
import { Ingredients } from "../components/Recipe/Ingredients/Ingredients";

export const RecipePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneRecipe(id));
    }
  }, []);

  return (
    <div>
      <div>{id && <Hero id={id} />}</div>

      <div className="flex flex-col px-4 md:px-8 xl:px-[100px] pt-8 md:pt-[50px] xl:pt-[100px] pb-[100px] md:pb-[200px] gap-[50px] md:gap-[96px] xl:gap-[50px]">
        <Ingredients />
        <Preparation />
      </div>
    </div>
  );
};
