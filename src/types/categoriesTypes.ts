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
  _id: string;
  points?: number;
  category: string;
  recipe: ICategoryRecipe[];
}

export interface ICategoryState {
  category: string;
  categoryRecipes: ICategoryRecipe[];
  isLoading: boolean;
  error: string | null;
}
