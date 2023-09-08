// import { IRecipeById } from "./RecipeType";

export interface IIngredient {
  ingredient: string;
  measure: string;
}

export interface IAddOwnRecipeForm {
  title: string;
  description: string;
  category: string;
  time: string;
  instructions: string;
  ingredients: IIngredient[];
  isPublic: boolean;
  preview?: string | File;
  _id?: string;
}

export interface IMetaRecipeList {
  totalHits: number;
  currentPage: number;
  totalPages: number;
}

export interface IRecipeList {
  _id: string;
  title: string;
  category: string;
  preview: string;
  time: string;
  thumb?: string;
  favorites: [] | string[];
  instructions: string;
  description: string;
  ingredients: IIngredient[];
}

export interface IRecipeListState {
  metaData: IMetaRecipeList;
  ownRecipe?: IRecipeList | null;
  recipeList: IRecipeList[];
  isLoading: boolean;
  error: string | null;
}

export interface IRecipeListRequest {
  page: number;
  limit: number;
}

export interface IRecipeListResponse {
  metaData: IMetaRecipeList;
  data: IRecipeList[] | [];
}
