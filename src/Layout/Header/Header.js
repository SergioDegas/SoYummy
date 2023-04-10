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
import { getUserData } from "api";
import SwitchToggle from "Components/ComponentsHeader/SwitchToggle/SwitchToggle";

import {
  LogoContainer,
  LogoIcon,
  LogoLink,
} from "Components/ComponentsHeader/NavContainer/NavContainer.styled";
import { useMedia } from "hooks";

import { DropDownMenu } from "Components/ComponentsHeader/DropDownMenu/DropDownMenu";
import { DropMenuButton } from "./Header.styled";
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
  const openMenu = () => setActiveModal("Menu");
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const UserData = async () => {
      try {
        const { name, avatarURL } = await getUserData();

        setName(name);
        if (avatarURL) {
          setPhotoUrl(avatarURL);
          return;
        } else {
          setPhotoUrl(nonePhoto);
          return;
        }
      } catch (error) {
        console.error(error);
      }
    };

    UserData();
  }, []);

  const { isDesktopScreen, isTabletScreen, isMobileScreen } = useMedia();

  const switchToggleStyle = { marginLeft: "50px" };
  return (
    <header style={{position:'absolute',width:"100%"}}>
      <ContainerFor>
        <HeaderContainer>
          <LogoLink to="/">     
            <LogoContainer>
              <LogoIcon />
            </LogoContainer>
          </LogoLink>

          {isDesktopScreen && <NavContainer />}

          {activeModal === "Menu" && (
            <CustomModal onClose={closeModal}>
              <DropDownMenu onClose={closeModal} />
            </CustomModal>
          )}

          <Profile
            handleHover={handleHover}
            photoUrl={photoUrl}
            ProfilesName={name}
            hovered={hovered}
            openLogoutModal={openLogoutModal}
            openEditModal={openEditModal}
          />
          {isTabletScreen || isMobileScreen ? (
            <DropMenuButton onClick={openMenu} />
          ) : null}
          {isDesktopScreen && <SwitchToggle styles={switchToggleStyle} />}

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
