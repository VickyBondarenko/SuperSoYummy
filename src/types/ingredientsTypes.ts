export interface IIngredient {
  title: string;
  _id: string;
  thumb: string;
}

export interface IIngredientState {
  ingredientsList: IIngredient[];
  isLoading: boolean;
  error: string | null;
}
