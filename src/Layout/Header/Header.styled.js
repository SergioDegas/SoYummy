import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";


export const DropMenuButton = styled(AiOutlineMenu)`
  width: 28px;
  height: 28px;
  color: rgba(34, 37, 42, 1);
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (min-width: 768px) and (max-width: 992px) {
    ${({ theme }) => {
      const location = useLocation();
      if (location.pathname.includes("/main")) {
        return `
        color: black;

      `;
      }
    }}
  }
`;