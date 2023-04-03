import { NavLink, } from "react-router-dom";

import SwitchToggle from "./SwitchToggle";
import { useState, useEffect ,} from "react";
import {
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
  ContainerFor,
  HoverText,
  LogOut,
  HoverContainer,
  LogOutText,
  EditText,
  EditContainer,
} from "./SwitchToggleStyled";
import { HiOutlinePencil } from "react-icons/hi";
import CustomModal, { EditProfileModal, LogoutModal } from "Components/CustomModal/CustomModal";
import { BsArrowRightShort } from "react-icons/bs";

const Header = () => {
  const [name, setName] = useState("Name");
    const [photoUrl, setPhotoUrl] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const [activeModal, setActiveModal] = useState(null);

  const openEditModal = () => setActiveModal("edit");
  const openLogoutModal = () => setActiveModal("logout");
  const closeModal = () => setActiveModal(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:4000/auth/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await res.json();
        setName(userData.name);
        setPhotoUrl(userData.photoUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header>
      <ContainerFor>
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
            <ProfileDetailsContainer onClick={handleHover}>
              <ProfileImage style={{ backgroundImage: `url(${photoUrl})` }} />
              <ProfileName>{name}</ProfileName>
              {hovered && (
                <HoverText className={`${hovered ? "active" : ""}`}>
                  <HoverContainer>
                    <EditContainer onClick={openEditModal}>
                      <EditText>Edit profile</EditText>
                      <HiOutlinePencil />
                    </EditContainer>

                    <LogOut onClick={openLogoutModal}>
                      <LogOutText>Log out</LogOutText>
                      <BsArrowRightShort
                        style={{ height: "18px", width: "18px" }}
                      />
                    </LogOut>
                  </HoverContainer>
                </HoverText>
              )}
            </ProfileDetailsContainer>
            <SwitchToggle />
          </ProfileContainer>
          {activeModal === "edit" && (
            <CustomModal onClose={closeModal}>
              <EditProfileModal UserName={name} onClose={closeModal} />
            </CustomModal>
          )}
          {activeModal === "logout" && (
            <CustomModal onClose={closeModal}>
              <LogoutModal onClose={closeModal} />
            </CustomModal>
          )}
        </HeaderContainer>
      </ContainerFor>
    </header>
  );
};

export default Header;
