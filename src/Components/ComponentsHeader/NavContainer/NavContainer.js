import { NavLink } from "react-router-dom";
import {
  Link,
  LogoContainer,
  LogoIcon,
  NavigationContainer,
  NavLinksContainer,
  SearchIcon,
} from "./NavContainer.styled";

export const NavContainer = () => {
  return (
    <>
      <NavLink to="/">
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>
      </NavLink>

      <NavigationContainer>
        <NavLinksContainer>
          <div>
            <Link to="/CategoriesPage">Categories</Link>
          </div>
          <div>
            <Link to="/add">Add Recipe</Link>
          </div>
          <div>
            <Link to="/my">My Recipes</Link>
          </div>
          <div>
            <Link to="/favorite">Favorites</Link>
          </div>
          <div>
            <Link to="/shopping-list">Shopping List</Link>
          </div>
          <div>
            <Link to={{ pathname: "/SearchPage", search: "?type=query" }}>
              <SearchIcon />
            </Link>
          </div>
        </NavLinksContainer>
      </NavigationContainer>
    </>
  );
};
