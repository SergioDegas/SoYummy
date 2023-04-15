import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
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
  UserIcon,
} from "./UserProfile.styled";
import Loader from "Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/user/selectors";
import { updateUserData } from "redux/user/operation";

import { updateUserSuccess } from "redux/user/slice";

export const UserProfile = ({ onClose, photoURL, userName, handleChange }) => {
  const [avatar, setAvatar] = useState(photoURL);
  const [file, setFile] = useState();
  const [newName, setNewName] = useState(userName);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const uploadContent = (e) => {
    if (e.target.files[0]) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setAvatar(objectUrl);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (newName) {
      formData.append("name", newName);
    }
    if (file) {
      formData.append("image", file);
    }
    try {
      await dispatch(updateUserData(formData));
      if (newName) {
        dispatch(updateUserSuccess({ name: newName, avatarURL: avatar }));
      }
      if (file) {
        dispatch(
          updateUserSuccess({
            name: newName,
            avatarURL: URL.createObjectURL(file),
          })
        );
      }
      if (newName && file) {
        dispatch(
          updateUserSuccess({
            name: newName,
            avatarURL: URL.createObjectURL(file),
          })
        );
      }
      handleChange(formData);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EditContainer>
      <CircleImage style={{ backgroundImage: `url(${avatar})` }}>
        <AddPhotoButton>
          <AiOutlinePlus
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <input type="file" accept="image/*" onChange={uploadContent} hidden />
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
          <UserIcon />
        </InputIcon>
        <IconPen />
      </InputContainer>
      <Button type="submit" onClick={handleSubmit}>
        Save changes
      </Button>
      <ButtonClose onClick={onClose} />
      {isLoading && !error && <Loader />}
    </EditContainer>
  );
};
