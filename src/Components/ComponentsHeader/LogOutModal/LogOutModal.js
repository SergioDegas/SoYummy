import axios from "axios";
import {
  ButtonList,
  LogOutButton,
  LogOutContainer,
  LogOutText,
} from "./LogOutModal.styled";

export const LogoutModal = ({ onClose }) => {
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/user/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LogOutContainer>
      <LogOutText>Are you sure you want to log out?</LogOutText>
      <ButtonList>
        {" "}
        <LogOutButton
          style={{ background: "#D9D9D9", color: "#23262A" }}
          onClick={handleLogout}
        >
          Log out
        </LogOutButton>
        <LogOutButton onClick={onClose}>Cancel</LogOutButton>
      </ButtonList>
    </LogOutContainer>
  );
};
