import { IRecipeById } from "./RecipeType";

export interface IFavoritesState {
  totalPages: number;
  favoriteRecipes: IRecipeById[];
  isLoading: boolean;
  error: string | null;
}

export interface IFavoritesRequest {
  page: number;
  limit: number;
}

export interface IFavoritesResponse {
  totalPages: number;
  data: IRecipeById[] | [];
}
