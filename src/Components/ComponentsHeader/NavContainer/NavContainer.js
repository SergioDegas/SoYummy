import { NavLink } from "react-router-dom";
import {
    Link,

    NavigationContainer,
    NavLinksContainer,
    SearchIcon,
} from "./NavContainer.styled";

export const NavContainer = () => {
    return (
      <>
        <NavigationContainer>
          <NavLinksContainer>
            <li>
              <Link  to="/categories/Beef">
                Categories
              </Link>
            </li>
            <li>
              <Link  to="/add">
                Add Recipe
              </Link>
            </li>
            <li>
              <Link  to="/my">
                My Recipes
              </Link>
            </li>
            <li>
              <Link  to="/favorite">
                Favorites
              </Link>
            </li>
            <li>
              <Link  to="/shopping-list">
                Shopping List
              </Link>
            </li>
            <li>
              <Link
              
                to={{
                  pathname: "/SearchPage",
                  search: "?type=query",
                }}
              >
                <SearchIcon /> Search
              </Link>
            </li>
          </NavLinksContainer>
        </NavigationContainer>
      </>
    );
};
