import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RecipeInfoWrp = styled.div`
	position: relative;
`
export const TitleWrp = styled.div`
display: flex;
margin-bottom: 14px;
align-items: center
`

export const RecipeTitle = styled.h2`
width: 145px;

font-family: ${p => p.theme.fonts.main};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.s}px;
line-height: ${p => p.theme.lineHeights.single};

letter-spacing: -0.24px;

color: ${p => p.theme.colors.textSubTitle};`

export const RecipeInstrc = styled.p`
width: 163px;
margin-bottom: 37px;
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
export const RecipeBtnDelete = styled.button`
display: flex;
align-items: center;
border: none;
width: 24px;
height: 24px;

background-color: ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.space[1]}px;

color: ${p => p.theme.colors.backgroundPrimary};

`
export const RecipeSeeLink = styled(NavLink)`
position: absolute;
display: inline-block;
padding: 6px 14px;
border-radius: 12px 25px;
width: 87px;
height: 27px;
left: 80px;
top: 97px;

background: ${p => p.theme.colors.accent};

font-family: ${p => p.theme.fonts.main};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.regular}s;
font-size: 10px;
line-height: ${p => p.theme.lineHeights.large};

color: ${p => p.theme.colors.backgroundPrimary};
`