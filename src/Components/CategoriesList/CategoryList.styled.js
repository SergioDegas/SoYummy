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
        width: 1px;
        border-radius: 1px;
        height: 1px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(p) => p.theme.colors.underline};
        border-radius: 1px;
    }

    @media (min-width: 768px) {
        gap: ${(p) => p.theme.space[3] * 3.5}px;
        margin-bottom: ${(p) => p.theme.space[1] * 13}px;
    }
`;

export const ItemStyled = styled.li`
    position: relative;
    padding: ${(p) => p.theme.space[1] * 2.5}px 0;

    &:first-child {
        margin-left: ${(p) => p.theme.space[1] * 5}px;
    }
`;

export const NavLinkStyled = styled(NavLink)`
    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: ${(p) => p.theme.lineHeights.single};
    color: ${(p) => p.theme.colors.textGrey};

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

        transition: transform 0.25s ease-out;
    }
`;
