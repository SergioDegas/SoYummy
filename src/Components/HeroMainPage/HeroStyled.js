import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import bgMobX1 from "images/bg-MainHero/MainHero-bg-1x-mob.png";
import bgMobX2 from "images/bg-MainHero/MainHero-bg-2x-mob.png";
import bgTabX1 from "images/bg-MainHero/MainHero-bg-1x-tab.png";
import bgTabX2 from "images/bg-MainHero/MainHero-bg-2x-tab.png";
import bgDeskX1 from "images/bg-MainHero/MainHero-bg-1x-desk.png";
import bgDeskX2 from "images/bg-MainHero/MainHero-bg-2x-desk.png";
import bgGreensMobX1 from "images/bg-MainHero/MainHero-bg-greens-1x-mob.png"
import bgGreensMobX2 from "images/bg-MainHero/MainHero-bg-greens-2x-mob.png"
import bgGreensTabX1 from "images/bg-MainHero/MainHero-bg-greens-1x-tab.png"
import bgGreensTabX2 from "images/bg-MainHero/MainHero-bg-greens-2x-tab.png"
import bgGreensDeskX1 from "images/bg-MainHero/MainHero-bg-greens-1x-desk.png"
import bgGreensDeskX2 from "images/bg-MainHero/MainHero-bg-greens-2x-desk.png"
import bgDishMobX1 from "images/bg-MainHero/MainHero-bg-dish-1x-mob.png"
import bgDishMobX2 from "images/bg-MainHero/MainHero-bg-dish-2x-mob.png"
import bgDishTabX1 from "images/bg-MainHero/MainHero-bg-dish-1x-tab.png"
import bgDishTabX2 from "images/bg-MainHero/MainHero-bg-dish-2x-tab.png"
import bgDishDeskX1 from "images/bg-MainHero/MainHero-bg-dish-1x-desk.png"
import bgDishDeskX2 from "images/bg-MainHero/MainHero-bg-dish-2x-desk.png"


export const SectionHero = styled.section`
  background-image: url(${bgDishMobX1}),url(${bgGreensMobX1}), url(${bgMobX1});
  background-repeat: no-repeat;
  background-position: 50% 62%, 85% 30px, 150px -15px;
  background-size: 320px 296px, cover, cover;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${bgDishMobX2}),url(${bgGreensMobX2}), url(${bgMobX2});
  }
  @media (min-width: 768px) {
    background-image:url(${bgDishTabX1}),url(${bgGreensTabX1}),url(${bgTabX1});
    text-align:start;
    background-position: 100% 55%, 100% 50%, 111% 50%;
    background-size: 378px 351px, 65%, 42%;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image:  url(${bgDishTabX2}),url(${bgGreensTabX2}),url(${bgTabX2});
    }
    @media (min-width: 1440px) {
      background-image: url(${bgDishDeskX1}),url(${bgGreensDeskX1}),url(${bgDeskX1});
      background-position: 85% 55%, 99% 65%, 110% 150%;
      background-size: 378px 351px, 45%, 42%;   
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${bgDishDeskX2}),url(${bgGreensDeskX2}),url(${bgDeskX2});
      }
    }
  }
`;

export const HeroTitle = styled.h1`
padding-top: 132px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 60px;
color: #22252a;
text-align: center;
letter-spacing: -0.005em;
margin-bottom: 14px;
@media (min-width: 768px) {
    text-align:start;
    font-size: 72px;
    line-height: 72px;
    }
`

export const HeroSpan = styled.span`
color: #8BAA36;

`
export const HeroText = styled.p`
margin-bottom: 364px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: -0.02em;
@media (min-width: 768px) {
    text-align:start;
    margin-bottom: 32px;
    }

`
export const HeroForm = styled.form`
position: relative;
`
export const HeroInput = styled.input`

width: 295px;
height: 52px;
background: #FAFAFA;
border: 1px solid #F0F0F0;
border-radius: 15px 50px;
padding-top: 17px;
padding-right: 113px;
padding-bottom: 17px;
padding-left: 32px;
margin-bottom: 147px;
::placeholder {
    color: #BDBDBD;
  }
  &:not(:placeholder-shown) {
    color: #BDBDBD;
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
color: #fff;
font-weight: bold;
background: #22252A;
height:51px;
border-radius: 15px 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FAFAFA;
@media (min-width: 768px) {
    width: 161px;
    height: 59px;
    top: 0;
    left: 30%;
    bottom: 0;
    }
    @media (min-width: 768px) {
    width: 161px;
    height: 70px;
    top: 0;
    left: 28%;
    bottom: 0;
    }
`
export const HeroRecipe = styled.div`
width: 225px;
height: 92px;
border-radius:8px;
background: #FAFAFA;
position: absolute;
top: 67%;
left: 31%;
@media (min-width: 768px) {
   width: 260px;
   height: 100px;
   top: 45%;
   left: 63%;
  }
  @media (min-width: 1440px) {
   width: 260px;
   height: 100px;
   top: 45%;
   left: 75%;
  }
`
export const RecipeText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
letter-spacing: -0.24px;
margin-left: auto;
margin-right: auto;
padding-top: 8px;
color: #3E4462;
margin-bottom: 7px;
@media (min-width: 768px) {
   top: 45%;
   left: 63%;
   padding-top: 12px;
   padding-left:12px;
   padding-right: 12px;
    }
`
export const RecipeSecondaryText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: #3E4462;
  padding-bottom: 11px;
  @media (min-width: 768px) {
    padding-bottom: 15px;
    }
`;
export const RecipeSpan = styled.span`
color: #8baa36;
`
export const RecipeSecondarySpan = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin-left: 7px;
  padding-right: 13px;
`;

export const RecipeIcon = styled(BsArrowRight)`
color: #3E4462;
`