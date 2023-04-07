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
import nonePhoto from "../../images/recipe-photo-small.png";
const Header = () => {
  const [name, setName] = useState("Name");
  const [photoUrl, setPhotoUrl] = useState("");
  const [hovered, setHovered] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleHover = () => {
    setHovered(!hovered);
  };

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
       const res = await fetch("http://localhost:4000/user/current", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });

       const { name, avatarURL } = await res.json();

       setName(name);
       if (avatarURL) {
         setPhotoUrl(avatarURL);
       } else {
         setPhotoUrl(nonePhoto);
       }
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
              <UserProfile
                photoUrl={photoUrl}
                userName={name}
                onClose={closeModal}
              />
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
