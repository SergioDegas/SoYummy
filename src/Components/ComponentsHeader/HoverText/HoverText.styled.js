
import { HiOutlinePencil } from "react-icons/hi";
import styled from "styled-components";

export const HoveredText = styled.div`
  opacity: 0;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  position: absolute;
  width: 177px;
  height: 134px;
  top: 63px;
  right: 35px;
  border-radius: 8px;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    pointer-events: auto;
  }
`;

export const HoverContainer = styled.div`
  width: 177px;
  height: 134px;
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
  color: ${({ theme }) => theme.colors.textWhite};
`;
