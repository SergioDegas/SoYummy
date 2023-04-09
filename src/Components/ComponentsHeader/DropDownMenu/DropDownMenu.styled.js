
import styled from "styled-components";
import { GiEvilFork } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import modal from "../../../images/modal.png";
export const DropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modal};
  z-index: 2;
`;

export const LogoContainer = styled.div`
  width: ${({ theme }) => `${theme.fontSizes.xxxxl}px`};
  height: ${({ theme }) => `${theme.fontSizes.xxxxl}px`};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textWhite};

  :hover {
    background-color: ${({ theme }) => theme.colors.textWhite};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const LogoIcon = styled(GiEvilFork)`
  width: ${({ theme }) => `${theme.fontSizes.xxxl}px`};
  height: ${({ theme }) => `${theme.fontSizes.xxxl}px`};
  color: "inherit";

  :hover {
    color: "inherit";
  }
`;

export const NavigationContainer = styled.nav`
  margin-top: ${({ theme }) => `${theme.space[6]}px`};
  margin-right: auto;
  margin-left: auto;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => `${theme.space[4]}px`};
`;

const activeClassName = "active";
export const Link = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => `${theme.fontSizes.xll}px`};
  line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: ${({ theme }) => theme.colors.textPrimary};

  width: ${({ theme }) => `${theme.fontSizes.l}px`};
  height: ${({ theme }) => `${theme.fontSizes.l}px`};
  margin-right: ${({ theme }) => `${theme.space[1]}px`};
`;

export const ButtonClose = styled(AiOutlineClose)`
  width: ${({ theme }) => `${theme.space[4]}px`};
  height: ${({ theme }) => `${theme.space[4]}px`};
  color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FrameLogoAndButtonClose = styled.div`
  padding: ${({ theme }) => `${theme.space[4]}px`};
  padding-top: ${({ theme }) => `${theme.space[3]}px`};
  display: flex;
  justify-content: space-between;
`;

export const ImageModal = styled.div`
  background-image: url(${modal});
  position: absolute;
  width: 80%;
  height: 25%;
  background-size: cover;
  right: 0px;
 bottom:  0px; 
  filter: blur(2.5px);
`;

export const FrameSwitcher = styled.div`
  position: fixed;
  bottom: ${({ theme }) => `${theme.space[4]}px`};
  left: ${({ theme }) => `${theme.space[4]}px`};
`;