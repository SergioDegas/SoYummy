import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";

import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { refreshUser } from "redux/auth/operation";
import { selectTheme } from "redux/theme/selectors";

import Layout from "Layout/SharedLayout";

import { useAuth } from "hooks";

import { GlobalStyle } from "Components/GlobalStyles";
import { themeLight } from "themes/themeLight";
import { themeDark } from "themes/themeDark";

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
const SearchPage = lazy(() => import("pages/SearchPage"));

export const App = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();

    const theme = useSelector(selectTheme);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme ? themeLight : themeDark}>
            {!isLoggedIn ? (
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
                            <Route
                                path="/categories/:categoryName"
                                element={<CategoriesPage />}
                            />
                            <Route path="/add" element={<AddRecipePage />} />
                            <Route
                                path="/favorite"
                                element={<FavoritesPage />}
                            />
                            <Route
                                path="/recipe/:recipeId"
                                element={<RecipePage />}
                            />
                            <Route path="/my" element={<MyRecipesPage />} />
                            <Route
                                path="/shopping-list"
                                element={<ShoppingPage />}
                            />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                    <Toaster position="top-right" />
                </>
            )}
            <GlobalStyle />
        </ThemeProvider>
    );
};
