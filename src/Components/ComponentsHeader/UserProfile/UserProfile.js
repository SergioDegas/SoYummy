import axios from "axios";
import { useState } from "react";
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

export const UserProfile = ({ onClose, photoUrl, userName }) => {
  const [newName, setNewName] = useState(userName);
  console.log(newName);
  

  const handleChange = async (event) => {
    const formData = new FormData();
  
    formData.append("image", event.target.files[0]);
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const res = await axios.post(
        "http://localhost:4000/user/updateAvatar",
        formData,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
         
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
   const handleNameChange = async () => {
   
     try {
       const token = localStorage.getItem("token");
       if (!token) {
         return;
       }

       const res = await axios.post(
         "http://localhost:4000/user/updateAvatar",
    

         {
           headers: {
             Authorization: `Bearer ${token}`,
           name: newName
           },
         }
       );
       console.log(res.data);
     } catch (error) {
       console.log(error);
     }
   };
  return (
    <EditContainer>
      <CircleImage style={{ backgroundImage: `url(${photoUrl})` }}>
        <AddPhotoButton>
          <AiOutlinePlus
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <input type="file" accept="image/*" onChange={handleChange} hidden />
        </AddPhotoButton>
      </CircleImage>

      <InputContainer>
        <Input
          type="text"
          placeholder="name"
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value);
          }}
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
      <Button onClick={handleNameChange}>Save changes</Button>
      <ButtonClose onClick={onClose} />
    </EditContainer>
  );
};