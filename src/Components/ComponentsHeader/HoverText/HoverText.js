import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import {
  EditContainer,
  EditText,
  HoverContainer,
  HoveredText,
  LogOut,
  LogOutText,
  Pen,
} from "./HoverText.styled";

export const HoverText = ({ hovered, openEditModal, openLogoutModal }) => {
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
      </HoverContainer>
    </HoveredText>
  );
};
