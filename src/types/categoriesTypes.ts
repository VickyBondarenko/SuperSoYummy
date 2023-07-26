import { Draft } from "immer";
import { IRecipe } from "./RecipeType";

export interface ICategoryNameItem {
  _id: string;
  category: string;
}

export interface ICategoryRequest {
  _id?: string;
  points?: number;
  category: string;
  recipes: IRecipe[];
}

export interface ICategoryState {
  categoryList: ICategoryNameItem[];
  category: string;
  categoryRecipes: Draft<IRecipe>[];
  isLoading: boolean;
  error: string | null;
}
