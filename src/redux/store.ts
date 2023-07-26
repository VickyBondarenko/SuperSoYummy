import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice/categoriesSlice";
import subscribeReducer from "./subscribeSlice/subscribeSlice";
import authReducer from "./authSlice/authSlice";
import mainPageReducer from "./mainPageSlice/mainPageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mainPage: mainPageReducer,
    categories: categoriesReducer,
    subsbcribe: subscribeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
