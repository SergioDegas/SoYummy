import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${(p) => p.theme.space[1] * 8}px;

    @media (min-width: 768px) {
        gap: ${(p) => p.theme.space[1] * 12.5}px;
    }

    @media (min-width: 1440px) {
        gap: ${(p) => p.theme.space[1] * 25}px;
    }
`;

export const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    margin-top: ${(p) => p.theme.space[1] * 8}px;
    margin-bottom: ${(p) => p.theme.space[1] * 6}px;

    @media (min-width: 768px) {
        margin-top: ${(p) => p.theme.space[1] * 10}px;
        margin-bottom: ${(p) => p.theme.space[1] * 10}px;
    }

    @media (min-width: 1440px) {
        margin-top: ${(p) => p.theme.space[1] * 12.5}px;
        margin-bottom: ${(p) => p.theme.space[1] * 12.5}px;
    }
`;

export const Button = styled(NavLink)`
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    width: 94px;
    height: 38px;

    background: ${(p) => p.theme.colors.accent};
    border-radius: ${(p) => p.theme.radius.small};
    color: ${(p) => p.theme.colors.textWhite};

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes.s}px;
    line-height: ${(p) => p.theme.lineHeights.heading};
    opacity: 1;

    transition: all 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.backgroundSecondary};
        opacity: 0.9;
    }
`;
