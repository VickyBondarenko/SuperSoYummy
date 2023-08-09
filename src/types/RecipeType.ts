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
