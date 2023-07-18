import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryState } from "../../types/categoriesTypes";

const CATEGORIES_REDUCER = "CATEGORIES_REDUCER";

const catInitialState: ICategoryState = {
  category: "",
  categoryRecipes: [],
  isLoading: true,
  error: null,
};

const categorySlice = createSlice({
  name: CATEGORIES_REDUCER,
  initialState: catInitialState,
  reducers: {},
  extraReducers: {},
});

export default categorySlice.reducer;
