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
      await axios.post("http://localhost:4000/auth/logout");
      localStorage.removeItem("token");
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
