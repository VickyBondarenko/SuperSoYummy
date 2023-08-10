import { IRecipe } from "./RecipeType";

export interface IPopularRecipesState {
  popularRecipes: IRecipe[];
  isLoading: boolean;
  error: string | null;
}
