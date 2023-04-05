import { RecipesCategoryList } from "Components/RecipesCategoryList/RecipesCategoryList";
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
`;
