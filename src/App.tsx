import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/reduxHooks";
import { Routes, Route } from "react-router-dom";

import { selectTheme } from "./redux/themeSlice/themeSelector";

import { Layout } from "./components/Layout/Layout";
import { Main } from "./components/Main/Main";
import { WelcomePage } from "./pages/WelcomePage";
import { AddRecipePage } from "./pages/AddRecipePage";
import { FavoritePage } from "./pages/FavoritePage";
import { ShoppingListPage } from "./pages/ShoppingListPage";
import { MyRecipesPage } from "./pages/MyRecipesPage";
import { SearchPage } from "./pages/SearchPage";
import { RecipePage } from "./pages/RecipePage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { UnSubscribePage } from "./pages/UnSubscribePage";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";

import { PrivateRoute } from "./hooks/PrivateRoute";
import { PublicRoute } from "./hooks/PublicRoute";

const App: React.FC = () => {
  const darkMode = useAppSelector(selectTheme);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Main />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/shopping" element={<ShoppingListPage />} />
          <Route path="/myRecipes" element={<MyRecipesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/unsubscription/:id" element={<UnSubscribePage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
