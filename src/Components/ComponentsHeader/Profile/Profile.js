import { HoverText } from "Components/ComponentsHeader/HoverText/HoverText";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import {
  ProfileContainer,
  ProfileDetailsContainer,
  ProfileImage,
  ProfileName,
} from "./Profile.styled";

export const Profile = ({
  handleHover,
  photoUrl,
  ProfilesName,
  hovered,
  openEditModal,
  openLogoutModal,
}) => {
  return (
    <ProfileContainer>
      <ProfileDetailsContainer onClick={handleHover}>
        <ProfileImage style={{ backgroundImage: `url(${photoUrl})` }} />
        <ProfileName>{ProfilesName}</ProfileName>

        {hovered && (
          <HoverText
            hovered={hovered}
            openEditModal={openEditModal}
            openLogoutModal={openLogoutModal}
          />
        )}
      </ProfileDetailsContainer>
      <SwitchToggle />
    </ProfileContainer>
  );
};
