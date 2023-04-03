import { NavLink, Router } from "react-router-dom";
import SwitchToggle from "./SwitchToggle";
import { useState, useEffect } from "react";
import {
  Container,
  HeaderContainer,
  LogoContainer,
  LogoIcon,
  NavContainer,
  Link,
  NavLinksContainer,
  ProfileContainer,
  ProfileDetailsContainer,
  ProfileImage,
  ProfileName,
  SearchIcon,
} from "./SwitchToggleStyled";

const Header = () => {
  const [name, setName] = useState("Name");
  const [photoUrl, setPhotoUrl] = useState();

  const token = localStorage.getItem('token');

  const fetchUserData = async () => {
    try {
      const res = await fetch('http://localhost:4000/auth/current', {
      headers: {
      'Authorization': `Bearer ${token}`
      }
    });
      const userData = await res.json();
      setName(userData.name);
      setPhotoUrl(userData.photoUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <header>
      <HeaderContainer>
        <NavLink to="/">
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>
        </NavLink>

        <NavContainer>
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
        </NavContainer>
        <ProfileContainer>
          <ProfileDetailsContainer>
            <ProfileImage style={{ backgroundImage: `url(${photoUrl})` }} />
            <ProfileName>{name}</ProfileName>
          </ProfileDetailsContainer>
          <SwitchToggle />
        </ProfileContainer>
      </HeaderContainer>
    </header>
  );
};

export default Header;
