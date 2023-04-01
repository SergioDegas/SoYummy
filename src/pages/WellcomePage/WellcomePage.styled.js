import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Page = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url('https://res.cloudinary.com/dtv1xlisg/image/upload/v1680299104/so_yummy/BgImages/wellcomePageMobile_xkcnvz.png');
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
@media (min-width: 376px) {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url('https://res.cloudinary.com/dtv1xlisg/image/upload/v1680299088/so_yummy/BgImages/wellcomeBgTablet_lyqqra.png');
}
`
export const LogoBg = styled.li`
width: 54px;
height: 54px;
background-color: #8BAA36;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 767px) {
  width: 68px;
  height: 68px;
}
`

export const List = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 0 10vw;
@media (min-width: 767px) {
  padding: 0 18vw;
}
`

export const Link = styled(NavLink)`
color: white;
border: 1px solid white;
text-decoration: none;
padding: 12px 24px;
border-radius: 15px 40px 15px 40px;
margin-left: 12px;
cursor: pointer;
&:not(:last-child) {
  background-color: #8BAA36;
  color: white;
  border: 0;
}
`