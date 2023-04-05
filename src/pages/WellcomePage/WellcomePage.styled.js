import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiEvilFork } from "react-icons/gi";
import bgWellcomePage from "images/bg-wellcomePage/bgWellcomePage";

const { 
  bgMobile1x,
  bgMobile2x,
  bgMobile3x,
  bgTablet1x,
  bgTablet2x,
  bgTablet3x,
  bgDesktop1x,
  bgDesktop2x,
  bgDesktop3x,
 } = bgWellcomePage;

const gradient = (img) => {
   return (`linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${img})`)
 }





export const Page = styled.div`
display: flex;
height: 100vh;
background: ${gradient(bgMobile1x)};
@media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background: ${gradient(bgMobile2x)};
  };
@media (min-device-pixel-ratio: 3),
  (min-resolution: 288dpi),
  (min-resolution: 3dppx) {
    background: ${gradient(bgMobile3x)};
  }
@media (min-width: 768px) {
  background: ${gradient(bgTablet1x)};
  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background: ${gradient(bgTablet2x)};
  };
@media (min-device-pixel-ratio: 3),
  (min-resolution: 288dpi),
  (min-resolution: 3dppx) {
    background: ${gradient(bgTablet3x)};
  }
}
@media (min-width: 1024px) {
  background: ${gradient(bgDesktop1x)};
  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background: ${gradient(bgDesktop2x)};
  };
@media (min-device-pixel-ratio: 3),
  (min-resolution: 288dpi),
  (min-resolution: 3dppx) {
    background: ${gradient(bgDesktop3x)};
  }
}
`
export const LogoBg = styled.li`
width: 54px;
height: 54px;
background-color: ${p => p.theme.colors.accent};
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 274px;
margin-bottom: 28px;
@media (min-width: 768px) {
  margin-top: 342px;
  width: 68px;
  height: 68px;
  margin-bottom: 44px;
}
@media (min-width: 1024px) {
  background-position: center;
  margin-top: 214px;
  width: 68px;
  height: 68px;
  margin-bottom: 44px;
}
`

export const Logo = styled(GiEvilFork)`
width: 44px;
height: 44px;
fill: ${p => p.theme.colors.textWhite};
`

export const List = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 0 35px;
@media (min-width: 767px) {
  margin: 0 134px;
}
@media (min-width: 1024px) {
  margin: 0 448px;
}
`
export const Title = styled.li`
color: ${p => p.theme.colors.textWhite};
font-weight: ${p => p.theme.fontWeights.semibold};
line-height: ${p => p.theme.lineHeights.single};
margin-bottom: 14px;
`
export const Text = styled.li`
color: ${p => p.theme.colors.textWhite};
font-size: ${p => p.theme.fontSizes.s}px;
font-weight: ${p => p.theme.fontWeights.regular};
line-height: ${p => p.theme.lineHeights.regular};
margin-bottom: 54px;
@media (min-width: 1024px) {
  margin-bottom: 62px;
}
`

export const Link = styled(NavLink)`
color: ${p => p.theme.colors.textWhite};
border: 1px solid white;
background-color: ${p => p.theme.colors.accent} ;
text-decoration: none;
padding: 12px 24px;
border-radius: 15px 40px 15px 40px;
cursor: pointer;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:focus,
&:hover {
  background-color: transparent;
}
&:not(:first-child) {
  margin-left: 12px;
}
`