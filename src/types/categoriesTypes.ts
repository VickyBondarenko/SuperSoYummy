import { Draft } from "immer";

export interface ICategoryNameItem {
  _id: string;
  category: string;
}

export interface ICategoryRecipe {
  _id: string;
  title: string;
  preview: string;
  thumb: string;
  description: string;
  time: string;
}

export interface ICategoryRequest {
  _id?: string;
  points?: number;
  category: string;
  recipes: ICategoryRecipe[];
}

export interface ICategoryState {
  categoryList: ICategoryNameItem[];
  category: string;
  categoryRecipes: Draft<ICategoryRecipe>[];
  isLoading: boolean;
  error: string | null;
}
