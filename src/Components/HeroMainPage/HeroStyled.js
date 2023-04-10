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
import bgDishMobX1 from "images/bg-MainHero/MainHero-bg-dish-1x-mob.png"
import bgDishMobX2 from "images/bg-MainHero/MainHero-bg-dish-2x-mob.png"

export const SectionHero = styled.section`
  background-image: url(${bgDishMobX1}),url(${bgGreensMobX1}), url(${bgMobX1});
  background-repeat: no-repeat;
  background-position: 50% 50%, 85% -45px, 150px -150px;
  background-size: 320px 296px, cover, cover;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${bgDishMobX2}),url(${bgGreensMobX2}), url(${bgMobX2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgTabX1});
    padding-top: 136px;
    padding-bottom: 32px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabX2});
    }
    @media (min-width: 1440px) {
      background-image: url(${bgDeskX1});
      padding-top: 164px;
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${bgDeskX2});
      }
    }
  }
`;

export const HeroTitle = styled.h1`
margin-top: 71px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 60px;
color: #22252a;
text-align: center;
letter-spacing: -0.005em;
margin-bottom: 14px;
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
`
export const HeroRecipe = styled.div`
width: 225px;
height: 92px;
border-radius:8px;
background: #FAFAFA;
position: absolute;
top: 63%;
left: 31%;
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