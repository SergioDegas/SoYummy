import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RecipeTitle = styled.h2`
font-family: ${p => p.theme.fonts.main};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.s}px;
line-height: ${p => p.theme.lineHeights.single};

letter-spacing: -0.24px;

color: ${p => p.theme.colors.textSubTitle};`

export const RecipeInstrc = styled.p`
font-family: ${p => p.theme.fonts.main};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.regular};
font-size: ${p => p.theme.fontSizes.xs}px;
line-height: ${p => p.theme.lineHeights.single};

letter-spacing: -0.24px;

color: ${p =>p.theme.colors.textPrimary}
`

export const RecipeTime = styled.p`
font-family: ${p => p.theme.fonts.main} ;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.regular};
font-size: ${p => p.theme.fontSizes.xs}px;
line-height: ${p => p.theme.lineHeights.large};

letter-spacing: -0.24px;

color: ${p => p.theme.colors.textSubTitle};
`
export const RecipeImage = styled.image`

`
export const RecipeBtnDelete = styled.button`

`
export const RecipeSeeLink = styled(NavLink)`

`
