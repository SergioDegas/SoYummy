import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {  AiOutlinePlus, AiOutlineUser } from "react-icons/ai";

import {
  AddPhotoButton,
  Backdrop,
  Button,
  ButtonClose,
  ButtonList,
  CircleImage,
  EditContainer,
  IconPen,
  Input,
  InputContainer,
  InputIcon,
  LogOutButton,
  LogOutContainer,
  LogOutText,
  ModalWindow,
} from "./ModalStyled";
import nonePhoto from "../../images/recipe-photo-small.png";
import axios from "axios";

const modalRoot = document.querySelector("#modal-root");
const CustomModal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
export default CustomModal;




export const EditProfileModal = ({ onClose, photoUrl, UserName }) => {
  const [newName, setNewName] = useState(UserName);
  const [newPhoto, setNewPhoto] = useState(photoUrl);

  useEffect(() => {
    setNewName(UserName);
  }, [UserName]);
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewPhoto(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <EditContainer>
      <CircleImage
        style={{ backgroundImage: `url(${newPhoto ? newPhoto : nonePhoto})` }}
      >
        {" "}
        <AddPhotoButton>
          <AiOutlinePlus
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            hidden
          />
        </AddPhotoButton>
      </CircleImage>

      <InputContainer>
        <Input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={handleNameChange}
        />
        
        <InputIcon>
          <AiOutlineUser
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </InputIcon>
        <IconPen />
      </InputContainer>
      <Button onClick={() => console.log("Save changes")}>Save changes</Button>
      <ButtonClose onClick={onClose} />
    </EditContainer>
  );
};

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
