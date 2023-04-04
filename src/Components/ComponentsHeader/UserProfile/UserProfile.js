import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import {
  AddPhotoButton,
  Button,
  ButtonClose,
  CircleImage,
  EditContainer,
  IconPen,
  Input,
  InputContainer,
  InputIcon,
} from "./UserProfile.styled";
import nonePhoto from "../../../images/recipe-photo-small.png";

export const UserProfile = ({ onClose, photoUrl, UserName }) => {
  const [newName, setNewName] = useState(UserName);
  const [newPhoto, setNewPhoto] = useState(photoUrl);

  useEffect(() => {
    setNewName(UserName);
  }, [UserName]);
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    axios
      .post("http://localhost:4000/upload", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <EditContainer>
      <CircleImage
        style={{ backgroundImage: `url(${newPhoto ? newPhoto : nonePhoto})` }}
      >
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
