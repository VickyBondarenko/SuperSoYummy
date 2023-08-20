import { IIngredient } from "./ingredientsTypes";

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
  measure: string;
  _id: string;
  ttl: string;
  desc: string;
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
  ingredients: IRecipeIngredient[] | IIngredient[];
  time: string;
  point?: string;
  favorites: string[] | [];
  likes: string[] | [];
  tags: string[] | [];
  isPublic: boolean;
}
