import {  Menu, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  align-content: center;
  align-items: center;
  position: relative;
`;

export const ProfileDetailsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  align-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImage = styled.div`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileName = styled(Button)`
  &.MuiButton-root {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-transform: none;
    text-transform: none;

    text-decoration: none;
    font-weight: bold;
    padding: 12px 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 170%;
    ${({ theme }) => {
      const location = useLocation();
      if (location.pathname.includes("/recipe/")) {
        return `
        color: black;

        :hover {
          color: ${theme.colors.accent};
        }
        &.active {
          color: ${theme.colors.accent};
        }
      `;
      }
    }}

    @media (min-width: 1440px) {
      ${({ theme }) => {
        const location = useLocation();
        if (location.pathname.includes("/main")) {
          return `
        color: black;

      `;
        }
      }}
    }
  }
`;
export const MenuHovered = styled(Menu)`
  &.MuiPaper-root,
  .MuiMenu-paper {
    background-color: ${({ theme }) =>
      theme.colors.backgroundPrimary} !important;
  }
`;

export const MenuItemHover = styled(MenuItem)`


  margin: 0;
  padding: 0;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 177px;
  height: 160px;
`;
