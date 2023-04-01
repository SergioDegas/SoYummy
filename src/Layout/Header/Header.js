import { Router } from "react-router-dom";
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

  const fetchUserData = async () => {
    try {
      const res = await fetch();
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
            <LogoContainer>
              <LogoIcon />
            </LogoContainer>
            <NavContainer>
              <NavLinksContainer>
                <div>
                  <Link href="/CategoriesPage">Categories</Link>
                </div>
                <div>
                  <Link href="/AddRecipePage">Add Recipe</Link>
                </div>
                <div>
                  <Link href="/MyRecipesPage">My Recipes</Link>
                </div>
                <div>
                  <Link href="/FavoritePage">Favorites</Link>
                </div>
                <div>
                  <Link href="/ShoppingPage">Shopping List</Link>
                </div>
                <div>
                  <Link
                    href={{ pathname: "/SearchPage", search: "?type=query" }}
                  >
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
