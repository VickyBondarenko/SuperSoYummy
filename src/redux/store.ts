import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import categoriesReducer from "./categoriesSlice/categoriesSlice";
import subscribeReducer from "./subscribeSlice/subscribeSlice";
import authReducer from "./authSlice/authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainPageReducer from "./mainPageSlice/mainPageSlice";
import searchReducer from "./searchSlice/searchSlice";
import themeReducer from "./themeSlice/themeSlise";

const authPersistConfig = {
  key: "auth",
  storage,
};

const themePersistConfig = {
  key: "theme",
  storage,
};

const customMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: categoriesReducer,
    mainPage: mainPageReducer,
    search: searchReducer,
    subsbcribe: subscribeReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: customMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
