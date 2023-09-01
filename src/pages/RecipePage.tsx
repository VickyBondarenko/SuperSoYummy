import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchOneRecipe } from "../redux/recipeSlice/recipeThunk";
import { selectOneRecipeImg } from "../redux/recipeSlice/recipeSelect";
import { Hero } from "../components/Recipe/RecipeHero/Hero";

export const RecipePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const recipeImg = useAppSelector(selectOneRecipeImg);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneRecipe(id));
    }
  }, []);

  return (
    <div>
      <div>{id && <Hero id={id} />}</div>
      {/* <div>
        <Ingredients />
      </div> */}
      {/* <div>
        <Preparation />
      </div> */}
      <img src={recipeImg} alt="recipe foto" />
    </div>
  );
};
