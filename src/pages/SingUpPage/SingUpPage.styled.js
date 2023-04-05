import { Field } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgAuth from '../../images/authPages/bgAuth.svg'
import imgMobile from '../../images/authPages/authImgMobile.svg'

export const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
`

export const ImgContainer = styled.div`
height: 250px;
width: 285px;
background-image: url(${imgMobile});
margin-top: auto;
`

export const Background = styled.div`
position: relative;
background-image: url(${bgAuth});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 507px;
`


export const SingUpForm = styled.div`
text-align: center;
position: absolute;
left: 5.5vw;
top: 0;
width: 89.3vw;
height: 350px;
background: #2A2C36;
box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
border-radius: 30px;
@media (min-width: 768px) {
  height: 481px;
  width: 65vw;
  left: 17.5vw;
}
`
export const Title = styled.h2`
color: ${p => p.theme.colors.textWhite};
margin-top: 32px;
margin-bottom: 18px;
@media (min-width: 768px) {
  margin-top: 44px;
  margin-bottom: 32px;
}
`
export const Input = styled(Field)`
height: 45px;
background-color: transparent;
border: 1px solid grey;
border-radius: 5px;
margin-bottom: 12px;
::placeholder {
  color: white;
  padding-left: 40px;
}
@media (min-width: 768px) {
  margin-bottom: 24px;
}
`

export const Button = styled.button`
margin-top: 16px;
padding: 12px 106px;
border-radius: 6px;
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.textWhite};
text-align: center;
`
export const LinkContainer = styled.div`
width: 100%;
height: 50px;
position: absolute;
left: 0;
bottom: -68px;
text-align: center;
`

export const Link = styled(NavLink)`
color: ${p => p.theme.colors.textWhite};
text-decoration: underline;

`