import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.space[1] * 7}px;
  margin-bottom: ${(p) => p.theme.space[1] * 8}px;
  border-bottom: 1px solid ${(p) => p.theme.colors.underline};

  overflow-x: scroll;

  &::-webkit-scrollbar {
    position: relative;
    width: 0px;
    border-radius: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.underline};
    border-radius: 1px;
    position: absolute;
  }

  @media (min-width: 768px) {
    gap: ${(p) => p.theme.space[3] * 3.5}px;
    margin-bottom: ${(p) => p.theme.space[1] * 13}px;
  }
`;

export const ItemStyled = styled.li`
  position: relative;

  &:first-child {
    margin-left: ${(p) => p.theme.space[1] * 5}px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding-top: ${(p) => p.theme.space[1] * 2.5}px;
  padding-bottom: ${(p) => p.theme.space[1] * 4.5}px;

  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: ${(p) => p.theme.lineHeights.single};
  color: ${(p) => p.theme.colors.textGrey};

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${(p) => p.theme.colors.accent};

    ::after,
    ::after {
      transform: scaleX(1);
    }
  }

  &::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;

    display: block;

    border: 1px solid ${(p) => p.theme.colors.accent};
    border-radius: 1px;
    background-color: ${(p) => p.theme.colors.accent};

    transform: scaleX(0);

    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accent};
    ::after,
    ::after {
      transform: scaleX(1);
    }
  }
`;
