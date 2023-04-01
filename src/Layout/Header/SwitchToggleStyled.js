import styled from "styled-components";
import { GiEvilFork } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 61px;
  height: 27px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efefef;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    transition: 0.4s;
    border-radius: 20px;
    ::before {
      position: absolute;
      content: "";
      height: 21px;
      width: 21px;
      left: 3px;
      bottom: 3px;
      background: linear-gradient(180deg, #ffffff 0%, #8baa36 100%);
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + span {
    background-color: #8baa36;
  }
  input:focus + span {
    box-shadow: 0 0 1px #8baa36;
  }
  input:checked + span:before {
    transform: translateX(34px);
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: 1200px) {
    padding: 0 50px;
  }

  @media (max-width: 992px) {
    padding: 0 32px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
    max-width: 375px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding-top: 18px;
  justify-content: center;
  align-items: center;
`;

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

export const NavContainer = styled.nav`
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

export const SearchContainer = styled.div`
  display: flex;
  gap: 14px;
  align-content: center;
  align-items: center;
`;

export const SearchIcon = styled(FiSearch)`
  width: 24px;
  height: 24px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  align-content: center;
  align-items: center;
`;

export const ProfileDetailsContainer = styled.div`
  display: flex;
  gap: 14px;
  align-content: center;
  align-items: center;
`;

export const ProfileImage = styled.div`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: gray;
    border-radius: 50%;
  }
`;

export const ProfileName = styled.div`
  font-weight: bold;

  &::before {
    content: "Name";
    color: gray;
  }
`;
