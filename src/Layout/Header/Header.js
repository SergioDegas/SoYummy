


import { useState, useEffect } from "react";
import {
  HeaderContainer,
  
  ContainerFor,

} from "../../Components/ComponentsHeader/SwitchToggle/SwitchToggleStyled";

import CustomModal from "Components/CustomModal/CustomModal";
import { UserProfile } from "Components/ComponentsHeader/UserProfile/UserProfile";
import { LogoutModal } from "Components/ComponentsHeader/LogOutModal/LogOutModal";
import { Profile } from "Components/ComponentsHeader/Profile/Profile";
import { NavContainer } from "Components/ComponentsHeader/NavContainer/NavContainer";

const Header = () => {
  const [name, setName] = useState("Name");
  const [photoUrl, setPhotoUrl] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

    const openEditModal = () => setActiveModal("edit");
    const openLogoutModal = () => setActiveModal("logout");
  const [activeModal, setActiveModal] = useState(null);

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
          <NavContainer />
          <Profile
            handleHover={handleHover}
            photoUrl={photoUrl}
            ProfilesName={name}
            hovered={hovered}
            openLogoutModal={openLogoutModal}
            openEditModal={openEditModal}
          />

          {activeModal === "edit" && (
            <CustomModal onClose={closeModal}>
              <UserProfile UserName={name} onClose={closeModal} />
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
