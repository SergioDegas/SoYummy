import { Routes, Route } from "react-router-dom";
import Layout from "Layout/SharedLayout";
import { lazy, Suspense, useState } from "react";
import axios from "axios";

const WelcomePage = lazy(() => import("pages/WellcomePage/"));
const SignUpPage = lazy(() => import("pages/SingUpPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));

const MainPage = lazy(() => import("pages/MainPage"));
const CategoriesPage = lazy(() => import("pages/CategoriesPage"));
const AddRecipePage = lazy(() => import("pages/AddRecipePage/AddRecipePage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));
const RecipePage = lazy(() => import("pages/RecipePage"));
const MyRecipesPage = lazy(() => import("pages/MyRecipesPage"));
const ShoppingPage = lazy(() => import("pages/ShoppingPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const token = localStorage.getItem('token');
  const check = async () => {
    const authCheck = await axios.get('http://localhost:4000/auth/current', {
      headers: {
      'Authorization': `Bearer ${token}`
      }
    });
    if (authCheck) {
      setIsAuth(true)
    }
  }

  check()

  return !isAuth ? (
    <Suspense>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </Suspense>
  ) : (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/categories/:categoryName" element={<CategoriesPage />} />
            <Route path="/add" element={<AddRecipePage />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/shopping-list" element={<ShoppingPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
