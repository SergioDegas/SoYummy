import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import bgMobX1 from "images/bg-MainHero/MainHero-bg-mobile1x.webp";
import bgMobX2 from "images/bg-MainHero/MainHero-bg-mob-2x.webp";
import bgTabX1 from "images/bg-MainHero/MainHero-bg-tab-1x.webp";
import bgTabX2 from "images/bg-MainHero/MainHero-bg-tab-2x.webp";
import bgDeskX1 from "images/bg-MainHero/MainHero-bg-desktop-1x.webp";
import bgDeskX2 from "images/bg-MainHero/MainHero-bg-desktop-2x.webp";
import bgGreensMobX1 from "images/bg-MainHero/MainHero-bg-greens-mob-1x.webp"
import bgGreensMobX2 from "images/bg-MainHero/MainHero-bg-greens-mob-2x.webp"
import bgGreensTabX1 from "images/bg-MainHero/MainHero-bg-greens-tab-1x.webp"
import bgGreensTabX2 from "images/bg-MainHero/MainHero-bg-greens-tab-2x.webp"
import bgGreensDeskX1 from "images/bg-MainHero/MainHero-bg-greens-desktop-1x.webp"
import bgGreensDeskX2 from "images/bg-MainHero/MainHero-bg-greens-desktop-2x .webp"


export const SectionHero = styled.section`
  width: 100%;
  height: 777px;
  background-image: url(${bgGreensMobX1}), url(${bgMobX1});
  background-size: 55px auto, 375px auto;
  background-position: 0px 20px, 100% 58px;
  background-repeat: no-repeat;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${bgGreensMobX2}), url(${bgMobX2});
  }
  @media (min-width: 768px) {
    background-image:url(${bgGreensTabX1}),url(${bgTabX1});
    text-align:start;
    background-size: 55px auto, 580px auto;
    background-position: 0px 0px, top right;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image:  url(${bgGreensTabX2}),url(${bgTabX2});
    }
    @media (min-width: 1440px) {
      background-image: url(${bgGreensDeskX1}),url(${bgDeskX1});
      background-size: 100px auto, 907px auto;
      background-position: 0px 0px, top right;  
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${bgGreensDeskX2}),url(${bgDeskX2});
      }
    }
  }
`;

export const HeroTitle = styled.h1`
padding-top: 132px;
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
font-size: 60px;
line-height: 60px;
color: ${({ theme }) => `${theme.colors.titleColor}`};
text-align: center;
letter-spacing: -0.005em;
margin-bottom: 14px;
@media (min-width: 768px) {
    text-align:start;
    font-size: 72px;
    line-height: 72px;
    padding-top: 205px;
    }
@media (min-width: 1440px) {
  padding-top: 226px;
font-size: 100px;
line-height: 100px;
}
`

export const HeroSpan = styled.span`
color: ${({ theme }) => `${theme.colors.accent}`};

`
export const HeroText = styled.p`
margin-bottom: 364px;
color: ${({ theme }) => `${theme.colors.titleColor}`};
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
font-size: ${({ theme }) => `${theme.fontSizes.s}`};
line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
text-align: center;
letter-spacing: -0.02em;
@media (min-width: 768px) {
    text-align:start;
    margin-bottom: 32px;
    }
  @media (min-width: 1440px){
     font-size:${({ theme }) => `${theme.fontSizes.l}`};
    line-height: ${({ theme }) => `${theme.lineHeights.regular}`};
  
  }

`
export const HeroForm = styled.form`
position: relative;
`
export const HeroInput = styled.input`
width: 295px;
height: 52px;
background: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
border: 1px solid #F0F0F0;
border-radius: 15px 50px;
padding-top: 17px;
padding-right: 113px;
padding-bottom: 17px;
padding-left: 32px;
margin-bottom: 147px;
::placeholder {
    color: ${({ theme }) => `${theme.colors.textGrey}`};
  }
  &:not(:placeholder-shown) {
   color: ${({ theme }) => `${theme.colors.textGrey}`};
  }
  @media (min-width: 768px) {
    width: 362px;
    height: 59px;
    }
    @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
    }
`
export const HeroBtn = styled.button`
position: absolute;
top: 0;
right: 0;
bottom: 0;
width:113px; 
background-color: #ccc;
border: none;
border-radius: 0 5px 5px 0;
cursor: pointer;
color: ${({ theme }) => `${theme.colors.mainLight}`};
font-weight: bold;
background: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
height:51px;
border-radius: 15px 50px;
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
font-size: ${({ theme }) => `${theme.fontSizes.s}`};
line-height: ${({ theme }) => `${theme.lineHeights.large}`};
color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};

transition: background cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover, 
  &:focus {
    background: ${({ theme }) => `${theme.colors.accent}`};
  }

@media (min-width: 768px) {
    width: 161px;
    height: 59px;
    top: 0;
    left: 30%;
    bottom: 0;
    }
    @media (min-width: 1440px) {
    width: 161px;
    height: 70px;
    top: 0;
    left: 29%;
    bottom: 0;
    }
`
export const HeroRecipe = styled.div`
width: 225px;
height: 92px;
border-radius:8px;
background: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
position: absolute;
top: 435px;
right: 34px;
@media (min-width: 768px) {
   width: 260px;
   height: 100px;
   top: 372px;
    right: 32px;
  }
  @media (min-width: 1440px) {
   width: 260px;
   height: 100px;
   top: 472px;
    right: 122px;
  }
`
export const RecipeText = styled.p`
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
font-size: 12px;
line-height: ${({ theme }) => `${theme.lineHeights.large}`};
letter-spacing: -0.24px;
margin-left: auto;
margin-right: auto;
padding-top: 8px;
color: ${({ theme }) => `${theme.colors.heroTextColor}`};
margin-bottom: 7px;
@media (min-width: 768px) {
   top: 45%;
   left: 63%;
   padding-top: 12px;
   padding-left:12px;
   padding-right: 12px;
    }
  @media (min-width:1440px) {
   
  }
`
export const RecipeIcon = styled(BsArrowRight)`
color: ${({ theme }) => `${theme.colors.heroTextColor}`};
`
export const RecipeSecondaryText = styled(NavLink)`
 font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 10px;
  line-height: 1.2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: ${({ theme }) => `${theme.colors.heroTextColor}`};
  padding-bottom: 11px;
  cursor: pointer;

  &:hover {
    color: green;

    ${RecipeIcon} {
      color: ${({ theme }) => `${theme.colors.accent}`};
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 15px;
  }
`;
export const RecipeSpan = styled.span`
color: ${({ theme }) => `${theme.colors.accent}`};
`
export const RecipeSecondarySpan = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin-left: 7px;
  padding-right: 13px;
`;
