import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import styled from "styled-components";

export const EditContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 375px) {
    width: 330px;
    height: 327px;
    padding: 24px;
  }
  @media (min-width: 768px) {
    width: 480px;
    height: 402px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    height: 425px;
    padding: 50px;
  }
`;

export const CircleImage = styled.div`
  position: relative;
  margin-top: 10px;

  border-radius: 50%;

  background-size: cover;
  /* background-size: contain; */
  background-position: center;
  @media (min-width: 375px) {
    width: 88px;
    height: 88px;
  }
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
  @media (min-width: 1440px) {
    width: 103px;
    height: 103px;
  }
`;

export const AddPhotoButton = styled.label`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.textTitle};
  cursor: pointer;
`;

export const StyledInput = styled.input`
  margin-top: 16px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.textTitle};
  border-radius: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-size: 14px;
  line-height: 21px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (min-width: 375px) {
    left: 10px;
    width: 20px;
  }
  @media (min-width: 768px) {
    left: 20px;
    width: 30px;
  }
  @media (min-width: 1440px) {
    left: 10px;
    width: 20px;
  }
`;
export const IconPen = styled(HiOutlinePencil)`
  position: absolute;
  top: 50%;

  height: 20px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: 375px) {
    right: 20px;
    width: 20px;
  }
  @media (min-width: 768px) {
    right: 30px;
    width: 30px;
  }
  @media (min-width: 1440px) {
    right: 10px;
    width: 20px;
  }
`;
export const UserIcon = styled(AiOutlineUser)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};

`;

export const Input = styled.input`
  padding: 8px 8px 8px 36px;
  border: 1px solid ${({ theme }) => theme.colors.textTitle};
  border-radius: 8px;

  font-size: 14px;
  line-height: 21px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    size: 18px;
  }
  ::placeholder {
    width: 52px;
    height: 27px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;

    opacity: 0.8;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  @media (min-width: 375px) {
    width: 282px;
    height: 49px;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 60px;
  }
`;

export const Button = styled.button`
  margin-top: 32px;
  padding: 21px 138px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;

  line-height: 18px;
  color: ${({ theme }) => theme.colors.textWhite};
  cursor: pointer;
  @media (min-width: 375px) {
    width: 282px;
    height: 49px;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 60px;
  }
`;
export const ButtonClose = styled(AiOutlineClose)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
`;
