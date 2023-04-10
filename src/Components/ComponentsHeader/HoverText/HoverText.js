import { BsArrowRightShort } from "react-icons/bs";

import {
  ButtonClose,
  EditContainer,
  EditText,
  HoverContainer,
  HoveredText,
  LogOut,
  LogOutText,
  Pen,
} from "./HoverText.styled";


export const HoverText = ({
  hovered,
  openEditModal,
  openLogoutModal,
  handleHover,
}) => {
  return (
    <HoveredText className={`${hovered ? "active" : ""}`}>
      <HoverContainer>
        <EditContainer onClick={openEditModal}>
          <EditText>Edit profile</EditText>
          <Pen />
        </EditContainer>

        <LogOut onClick={openLogoutModal}>
          <LogOutText>Log out</LogOutText>
          <BsArrowRightShort />
        </LogOut>
        <ButtonClose onClick={handleHover} />
      </HoverContainer>
    </HoveredText>
  );
};
