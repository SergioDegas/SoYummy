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

import SwitchToggle from "Components/ComponentsHeader/SwitchToggle/SwitchToggle";

import {
  LogoContainer,
  LogoIcon,
  LogoLink,
} from "Components/ComponentsHeader/NavContainer/NavContainer.styled";
import { useMedia } from "hooks";

import { DropDownMenu } from "Components/ComponentsHeader/DropDownMenu/DropDownMenu";
import { DropMenuButton } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhotoUrl } from "redux/user/selectors";
import { fetchUserData, updateUserData } from "redux/user/operation";
const Header = () => {
  const dispatch = useDispatch();

  const [photoUrl, setPhotoUrl] = useState(nonePhoto);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const name = useSelector(selectUserName);
  const avatarURL = useSelector(selectUserPhotoUrl);

  useEffect(() => {
    if (!avatarURL) {
      return;
    }
    setPhotoUrl(avatarURL);
  }, [avatarURL]);

  const openEditModal = () => setActiveModal("edit");
  const openLogoutModal = () => setActiveModal("logout");
  const openMenu = () => setActiveModal("Menu");
  const closeModal = () => setActiveModal(null);

  const handleChange = async (formData) => {
    try {
      dispatch(updateUserData(formData));
    } catch (error) {
      console.log(error);
    }
  };

  const { isDesktopScreen, isTabletScreen, isMobileScreen } = useMedia();

  const switchToggleStyle = { marginLeft: "50px" };
  return (
    <header style={{ position: "absolute", width: "100%" }}>
      <ContainerFor>
        <HeaderContainer>
          <LogoLink to="/" aria-label="go to main page">
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
            photoUrl={photoUrl}
            ProfilesName={name}
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
                onClose={closeModal}
                photoURL={photoUrl}
                userName={name}
                handleChange={handleChange}
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
