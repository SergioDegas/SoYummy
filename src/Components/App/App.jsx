import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operation';
import { selectTheme } from 'redux/theme/selectors';

import Layout from 'Layout/SharedLayout/SharedLayout';

// import { useAuth } from 'hooks';

import { GlobalStyle } from 'Components/GlobalStyles';
import { themeLight } from 'themes/themeLight';
import { themeDark } from 'themes/themeDark';
import { RestrictedRoute } from 'Components/RestrictedRoute';
import { PrivateRoute } from 'Components/PrivateRoute';

const WelcomePage = lazy(() => import('pages/WellcomePage'));
const SignUpPage = lazy(() => import('pages/SingUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const ShoppingPage = lazy(() => import('pages/ShoppingPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const CategoriesRecipes = lazy(() =>
  import('Components/CategoriesRecipes/CategoriesRecipes')
);

export const App = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();

  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <RestrictedRoute component={WelcomePage} redirectTo="/main" />
              }
            />
            <Route
              path="/main"
              element={<PrivateRoute component={MainPage} redirectTo="/" />}
            />
            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  component={SignUpPage}
                  redirectTo="/main"
                  replace={true}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  component={LoginPage}
                  redirectTo="/main"
                  replace={true}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute component={CategoriesPage} redirectTo="/" />
              }
            >
              {/* TODO: CHECK PRIVACY */}
              <Route path=":categoryName" element={<CategoriesRecipes />} />
            </Route>
            <Route
              path="/add"
              element={
                <PrivateRoute component={AddRecipePage} redirectTo="/" />
              }
            />
            <Route
              path="/favorite"
              element={
                <PrivateRoute component={FavoritesPage} redirectTo="/" />
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={<PrivateRoute component={RecipePage} redirectTo="/" />}
            />
            <Route
              path="/my"
              element={
                <PrivateRoute component={MyRecipesPage} redirectTo="/" />
              }
            />
            <Route
              path="/shopping-list"
              element={<PrivateRoute component={ShoppingPage} redirectTo="/" />}
            />
            <Route
              path="/search"
              element={<PrivateRoute component={SearchPage} redirectTo="/" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </>

      <GlobalStyle />
    </ThemeProvider>
  );
};
