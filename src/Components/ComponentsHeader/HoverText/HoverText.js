import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import {
  EditContainer,
  EditText,
  HoverContainer,
  HoveredText,
  LogOut,
  LogOutText,
} from "./HoverText.styled";

export const HoverText = ({ hovered, openEditModal, openLogoutModal }) => {
  return (
    <HoveredText className={`${hovered ? "active" : ""}`}>
      <HoverContainer>
        <EditContainer onClick={openEditModal}>
          <EditText>Edit profile</EditText>
          <HiOutlinePencil />
        </EditContainer>

        <LogOut onClick={openLogoutModal}>
          <LogOutText>Log out</LogOutText>
          <BsArrowRightShort style={{ height: "18px", width: "18px" }} />
        </LogOut>
      </HoverContainer>
    </HoveredText>
  );
};
