import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RecipeInfoWrp = styled.div``




export const TitleWrp = styled.div`
display: flex;
margin-bottom: 14px;
align-items: center;

@media(min-width: 768px) {
	align-items: flex-start;
}
`

export const RecipeBtnDelete = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none;
width: 24px;
height: 24px;

background-color: ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.space[1]}px;

color: ${p => p.theme.colors.backgroundPrimary};

@media (min-width: 768px) {
	width: 38px;
	height: 38px;
}
`

export const RecipeTitle = styled.h3`
margin-right: 27px;
font-family: ${p => p.theme.fonts.main};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.s}px;
line-height: ${p => p.theme.lineHeights.single};

letter-spacing: -0.24px;

color: ${p => p.theme.colors.textSubTitle};

@media (min-width: 768px) {
	font-size: ${p => p.theme.fontSizes.xll}px;
	font-style: medium;
	line-height: 24px;
	margin-right: 122px;
}
`
export const DscrInstrWrp = styled.div`
width: 163px;
@media (min-width: 768px) {
	width: 353px;
}
`

// export const RecipeDescr = styled.p`
// @media(min-width: 768px) {
// 	font-family: ${p => p.theme.fonts.main};
// font-style: regular
// font-size: ${p => p.theme.fontSizes.s}px;
// line-height: 18px
// Letter spacing: -2%;
// overflow: hidden;
// white-space: nowrap;
// text-overflow: ellipsis;
// }
// `

// export const RecipeInstr = styled.p`
// // height: 50px;
// font-family: ${p => p.theme.fonts.main};
// font-style: normal;
// font-weight: ${p => p.theme.fontWeights.regular};
// font-size: ${p => p.theme.fontSizes.xs}px;
// line-height: ${p => p.theme.lineHeights.single};

// letter-spacing: -0.24px;

// color: ${p =>p.theme.colors.textPrimary}

// @media  (min-width: 768px) {
// 	font-size: ${p => p.theme.fontSizes.s}px;
// }
// `
export const RecipeInstr = styled.p`
	font-family: ${p => p.theme.fonts.main};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.regular};
	font-size: ${p => p.theme.fontSizes.xs}px;
	line-height: ${p => p.theme.lineHeights.single};

	letter-spacing: -0.24px;
	color: ${p =>p.theme.colors.textPrimary}

`

export const TimeSeeWrapp = styled.div`
display: flex;
align-items: flex-end;
margin-top: 10px;
`

export const RecipeTime = styled.span`
margin-right: 74px;
font-family: ${p => p.theme.fonts.main} ;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.regular};
font-size: ${p => p.theme.fontSizes.xs}px;
line-height: ${p => p.theme.lineHeights.large};

letter-spacing: -0.24px;

color: ${p => p.theme.colors.textSubTitle};

@media(min-width: 768px) {
	font-size: ${p => p.theme.fontSizes.s}px;
	margin-right: 212px
}
`

export const RecipeSeeLink = styled(NavLink)`
display: inline-block;
align-items: center;
padding: ${p => p.theme.space[2]-2}px	${p => p.theme.space[3]-2}px;
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

@media (min-width: 768px) {
padding: ${p => p.theme.space[1]*3}px ${p => p.theme.space[4]-4}px;
font-size: ${p => p.theme.fontSizes.s}px;
width: 138px;
height: 45px;
}
`