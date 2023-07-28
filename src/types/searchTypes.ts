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
  searchParam: "ingredient" | "title";
  searchQuery: string;
  page: number;
  limit: number;
}

export interface ISearchState {
  totalPages: number;
  searchParam: "ingredient" | "title";
  recipes: IRecipe[];
  isLoading: boolean;
  error: string | null;
}

export type SearchPayload = Partial<
  Pick<ISearchState, "totalPages" | "recipes">
>;
