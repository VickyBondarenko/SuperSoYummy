// import { IIngredient } from "./ingredientsTypes";

export interface IRecipe {
  _id: string;
  title: string;
  preview: string;
  thumb?: string;
  instructions?: string;
  description: string;
  time: string;
  point?: string;
}

export interface IRecipeIngredient {
  desc: string;
  measure: string;
  _id: string;
  ttl: string;
  t: string;
  thb: string;
}

export interface IRecipeById {
  _id: string;
  title: string;
  category: string;
  preview: string;
  area?: string;
  createdAt?: string;
  updatedAt?: string;
  thumb?: string;
  instructions?: string;
  youtube?: string;
  description: string;
  popularity?: number;
  ingredients: IRecipeIngredient[];
  time: string;
  point?: string;
  favorites: string[] | [];
  likes: string[] | [];
  tags: string[] | [];
  isPublic: boolean;
}

export interface IRecipeState {
  recipe: IRecipeById[];
  isLoading: boolean;
  error: string | null;
}

export interface IHeroProps {
  id: string;
}

export interface IIngrTabHeaderProps {
  action: string;
}

export interface IIngrTabRowProps {
  item: IRecipeIngredient;
}
