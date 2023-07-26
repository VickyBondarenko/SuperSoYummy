import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IMainPageResponse, IMainPageRequest } from "../../types/mainPageTypes";

export const fetchMainPageRecipes = createAsyncThunk<
  IMainPageResponse[],
  IMainPageRequest,
  { rejectValue: string }
>(
  "mainPage/fetchMainPageRecipes",
  async ({ categoryLimit, recipeLimit }, { rejectWithValue }) => {
    try {
      const response = await axios.get<IMainPageResponse[]>(
        `/api/recipes/main-page`,
        {
          params: {
            categoryLimit,
            recipeLimit,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        console.log(error.response?.data);
      } else if (error instanceof Error) console.log(error.message);
      return rejectWithValue("Error");
    }
  }
);
