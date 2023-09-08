import React, { lazy, useEffect } from "react";
import { useAppSelector } from "./hooks/reduxHooks";
import { Routes, Route } from "react-router-dom";
import { selectTheme } from "./redux/themeSlice/themeSelector";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Main = lazy(() => import("./components/Main/Main"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const AddRecipePage = lazy(() => import("./pages/AddRecipePage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const ShoppingListPage = lazy(() => import("./pages/ShoppingListPage"));
const MyRecipesPage = lazy(() => import("./pages/MyRecipesPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const RecipePage = lazy(() => import("./pages/RecipePage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const UnSubscribePage = lazy(() => import("./pages/UnSubscribePage"));
const Page404 = lazy(() => import("./pages/Page404"));
const LogInPage = lazy(() => import("./pages/LogInPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const PrivateRoute = lazy(() => import("./hooks/PrivateRoute"));
const PublicRoute = lazy(() => import("./hooks/PublicRoute"));

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
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/unsubscription/:id" element={<UnSubscribePage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
