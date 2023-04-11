import { useState } from "react";


import {

  MenuHovered,
  MenuItemHover,
  ProfileContainer,
  ProfileDetailsContainer,
  ProfileImage,
  ProfileName,
} from "./Profile.styled";
import {
  EditContainer,
  EditText,
  HoverContainer,
  LogOut,
  LogOutText,
  Pen,
} from "../HoverText/HoverText.styled";
import { BsArrowRightShort } from "react-icons/bs";

export const Profile = ({
  photoUrl,
  ProfilesName,

  openEditModal,
  openLogoutModal,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ProfileContainer>
      <ProfileDetailsContainer>
        <ProfileImage style={{ backgroundImage: `url(${photoUrl})` }} />
        <ProfileName
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {ProfilesName}
        </ProfileName>
        <MenuHovered
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItemHover
            key={`${ProfilesName}+ ${photoUrl}`}
            onClick={handleClose}
          >
            <HoverContainer>
              <EditContainer onClick={openEditModal}>
                <EditText>Edit profile</EditText>
                <Pen />
              </EditContainer>

              <LogOut onClick={openLogoutModal}>
                <LogOutText>Log out</LogOutText>
                <BsArrowRightShort />
              </LogOut>
            </HoverContainer>
          </MenuItemHover>
        </MenuHovered>
      </ProfileDetailsContainer>
    </ProfileContainer>
  );
};
