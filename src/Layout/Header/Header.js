import React from "react";
import { Link, NavLink } from "react-router-dom";
import SwitchToggle from "./SwitchToggle";

const Header = () => {
  return (
    <header>
      <div style={{ display: "flex" }}>
        <div>logo</div>
        <nav>
          <div style={{ display: "flex" }}>
            <div>
              <a to="/CategoriesPage">Categories</a>
            </div>
            <div>
              <a to="/AddRecipePage">Add Recipe</a>
            </div>
            <div>
              <a to="/MyRecipesPage">My Recipes</a>
            </div>
            <div>
              <a to="/FavoritePage">Favorites</a>
            </div>
            <div>
              <a to="/ShoppingPage">Shopping List</a>
            </div>
            <div>
              <a to={{ pathname: "/SearchPage", search: "?type=query" }}>
                <i></i>
              </a>
            </div>
          </div>
        </nav>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "block",
              backgroundColor: "red",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
            }}
          ></div>
          <div>name</div>
          <SwitchToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
