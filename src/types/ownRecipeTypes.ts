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
  ownRecipes: IAddOwnRecipeForm[];
  isLoading: boolean;
  error: string | null;
}
