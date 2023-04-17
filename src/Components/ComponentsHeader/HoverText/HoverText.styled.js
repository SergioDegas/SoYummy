
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import styled from "styled-components";

export const HoveredText = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  width: 177px;
  height: 160px;


  border-radius: 8px;
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const HoverContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 177px;
  height: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LogOut = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 141px;
  border-radius: 30px;
  transform: skewX(10deg);
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EditContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
export const EditText = styled.p`
  margin-right: 53px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const LogOutText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: white;
  transform: skewX(-10deg);
  padding: 12px 20px;
`;

export const Pen = styled(HiOutlinePencil)`
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const ButtonClose = styled(AiOutlineClose)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
