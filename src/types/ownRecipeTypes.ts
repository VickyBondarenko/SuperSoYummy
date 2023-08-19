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
}

export interface IOwnRecipesState {
  totalPages: number;
  ownRecipes: IOwnRecipeData[];
  isLoading: boolean;
  error: string | null;
}

export interface IOwnRecipeRequest {
  page: number;
  limit: number;
}

export interface IOwnRecipeResponse {
  totalPages: number;
  data: IOwnRecipeData[] | [];
}

interface IOwnRecipeData {
  preview: string;
  title: string;
  time: string;
  description: string;
  _id: string;
}
