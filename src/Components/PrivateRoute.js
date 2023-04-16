import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const token = useSelector((state) => state.auth.token);
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
