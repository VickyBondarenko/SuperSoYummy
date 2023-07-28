import { IRecipe } from "./RecipeType";

export interface ISearchRecipe {
  _id: string;
  title: string;
  category: string;
  area: string;
  instructions: string;
  description: string;
  thumb: string;
  preview: string;
  time: string;
  popularity: number;
  favorites: string[];
  likes: string[];
  youtube: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  ingredients: {
    id: string;
    measure: string;
  }[];
}

export interface ISearchRecipeResponse {
  totalPages: number;
  data: ISearchRecipe[];
}

export interface ISearchRequest {
  searchParam: "Ingredient" | "Title";
  searchQuery: string;
  page: number;
  limit: number;
}

export interface SearchError {
  message: string;
}

export interface ISearchState {
  totalPages: number;
  searchQuery: string;
  searchParam: "Ingredient" | "Title";
  recipes: IRecipe[];
  isLoading: boolean;
  error: string | null | SearchError;
}

export type SearchPayload = Partial<
  Pick<ISearchState, "totalPages" | "recipes">
>;
