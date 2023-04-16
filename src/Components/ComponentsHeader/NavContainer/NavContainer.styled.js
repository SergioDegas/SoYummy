import styled from 'styled-components';
import { GiEvilFork } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { NavLink, useLocation,  } from 'react-router-dom';
export const LogoLink = styled(NavLink)`
  margin-right: auto;
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
  color: 'inherit';

  :hover {
    color: 'inherit';
  }
`;

export const NavigationContainer = styled.nav`
  margin-right: auto;
  margin-left: auto;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  gap: 30px;
`;



export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => `${theme.fontSizes.m}px`};
  line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }

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
`;


export const SearchIcon = styled(FiSearch)`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: ${({ theme }) => `${theme.fontSizes.xll}px`};
  height: ${({ theme }) => `${theme.fontSizes.xll}px`};
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
  @media (min-width: 1440px) , (max-width: 1560px) {
    ${({ theme }) => {
      const location = useLocation();
      if (location.pathname.includes("/main")) {
        return `
        color: black;

      `;
      }
    }}
  }
  @media (min-width: 1560px) {
    ${({ theme }) => {
      const location = useLocation();
      if (location.pathname.includes("/main")) {
        return `
        color: white;

      `;
      }
    }}
  }
`;
