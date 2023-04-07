import { Field } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgAuth from '../../images/authPages/bgAuth.svg';
import bgAuth2 from '../../images/authPages/bgAuth2.svg';
import imgMobile from '../../images/authPages/authMobile2.svg';
import imgTablet from '../../images/authPages/authTab.svg';
import imgDesktop from '../../images/authPages/authDesktop.svg';


export const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 100vh;
`
export const Container = styled.div`
position: absolute;
left: 20px;
top: 87px;
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 768px) {
  top: 60px;
  left: 134px;
}
@media (min-width: 1440px) {
  flex-direction: row;
  top: 110px;
}
`

export const Img = styled.div`
background-image: url(${imgMobile});
background-size: cover;
height: 209px;
width: 255px;
@media (min-width: 768px) {
  background-image: url(${imgTablet});
  width: 409px;
  height: 359px;
}
@media (min-width: 1440px) {
  background-image: url(${imgDesktop});
  width: 532px;
  height: 468px;
  margin-right: 8vw;
}
`

export const Background = styled.div`
background-image: url(${bgAuth});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 507px;
@media (min-width: 768px) {
  height: 606px;
}
@media (min-width: 1024px) {
  background-image: url(${bgAuth2});
  height: 325px;
}
`


export const SingUpForm = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
width: 89.3vw;
height: 350px;
background: #2A2C36;
box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
border-radius: 30px;
padding: 0 28px;
@media (min-width: 768px) {
  height: 481px;
  width: 500px;
}
@media (min-width: 1440px) {
  height: 484px;
  align-items: baseline;
  padding: 0 50px;
}
`
export const Title = styled.h2`
color: ${p => p.theme.colors.textWhite};
margin-bottom: 40px;
@media (min-width: 768px) {
  margin-bottom: 50px;
}
`
export const Input = styled(Field)`
height: 45px;
background-color: transparent;
border: 1px solid grey;
border-radius: 5px;
margin-bottom: 12px;
padding-left: 40px;
color: ${p => p.theme.colors.textWhite};
::placeholder {
  color: ${p => p.theme.colors.textWhite};
}
@media (min-width: 768px) {
  margin-bottom: 24px;
  height: 59px;
}
@media (min-width: 768px) {
  min-width: 400px;
}
`

export const Button = styled.button`
margin-top: 16px;
padding: 12px 106px;
border-radius: 6px;
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.textWhite};
text-align: center;
@media (min-width: 768px) {
  margin-top: 26px;
}
`
export const LinkContainer = styled.div`
width: 100%;
height: 50px;
position: absolute;
left: 0;
bottom: -70px;
text-align: center;
@media (min-width: 768px) {
  bottom: -80px;
}
`

export const Link = styled(NavLink)`
color: ${p => p.theme.colors.textWhite};
text-decoration: underline;

`