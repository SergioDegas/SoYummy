import styled from "styled-components";
import { GiEvilFork } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const LogoContainer = styled.div`
  width: 44px;
  height: 44px;
  background-color: #8baa36;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled(GiEvilFork)`
  width: 30px;
  height: 30px;
  color: white;
`;

export const NavigationContainer = styled.nav`
  margin-right: auto;
  margin-left: auto;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  &:hover {
    color: #8baa36;
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 24px;
  height: 24px;
`;
