import { IRecipe } from "./RecipeType";

export interface IMainPageRequest {
  categoryLimit?: number;
  recipeLimit: number;
}

export interface IMainPageResponse {
  _id: string;
  recipes: IRecipe[];
  points?: number;
  category: string;
}

export interface IMainPageState {
  mainPageRecipes: IMainPageResponse[];
  isLoading: boolean;
  error: string | null;
}
