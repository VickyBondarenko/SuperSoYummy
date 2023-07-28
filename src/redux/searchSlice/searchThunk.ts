import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ISearchRequest,
  ISearchRecipeResponse,
  SearchPayload,
} from "../../types/searchTypes";

export const fetchSearchRecipes = createAsyncThunk<
  SearchPayload,
  ISearchRequest,
  { rejectValue: string }
>(
  "search/fetchSearchRecipes",
  async ({ page, limit, searchParam, searchQuery }, { rejectWithValue }) => {
    try {
      const response = await axios.get<ISearchRecipeResponse>(`/api/search`, {
        params: {
          page,
          limit,
          [searchParam.toLowerCase()]: searchQuery,
        },
      });
      const filteredRecipes = response.data.data.map((recipe) => ({
        _id: recipe._id,
        title: recipe.title,
        preview: recipe.preview,
        time: recipe.time,
        description: recipe.description,
      }));

      return { totalPages: response.data.totalPages, recipes: filteredRecipes };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        console.log(error.response?.data);
      } else if (error instanceof Error) console.log(error.message);
      return rejectWithValue("Error");
    }
  }
);
