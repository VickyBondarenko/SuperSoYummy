import React from "react";
import { Routes, Route } from "react-router-dom";

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
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        {/* <Route path="/auth" element={<AuthPage />}> */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="register" element={<RegisterForm />} />
        </Route> */}

        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/shopping" element={<ShoppingListPage />} />
          <Route path="/myRecipes" element={<MyRecipesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
