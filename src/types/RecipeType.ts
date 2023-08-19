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
  thumb?: string;
  instructions?: string;
  youtube?: string;
  description: string;
  popularity?: string;
  ingredients: IRecipeIngredient[];
  time: string;
  point?: string;
  favorites: string[] | [];
  likes: string[] | [];
  tags: string[] | [];
  isPublic: boolean;
}
