export interface IShoppingListRespons {
  totalPages: number;
  data: [
    {
      _id: string;
      measure: string;
      ttl: string;
      thb: string;
    }
  ];
}

export interface IShoppingItem {
  _id: string;
  measure: string;
  ttl: string;
  thb: string;
}

export interface IShoppingListDeleteRequest {
  _id: string;
}

export interface IShoppingListState {
  totalPages: number;
  shoppingIngredients: [] | IShoppingItem[];
  isLoading: boolean;
  error: null | string;
}
