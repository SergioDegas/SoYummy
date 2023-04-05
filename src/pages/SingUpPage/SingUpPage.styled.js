import { Field } from "formik";
import styled from "styled-components";

export const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
`

export const Img = styled.img`
margin-top: auto;
margin-left: 45px;
margin-right: 45px;
max-width: 285px;
`

export const BgImg = styled.div`
width: 100vw;
height: 470px;
background: #1E1F28;
position: relative;
&::before {
  content: "";
	position: absolute;
	bottom: 0;
	left: 0;    
	border-top: 37px solid white;
	border-left: 135px solid #1E1F28;
	border-right: 135px solid #1E1F28;
	width: 100vw;
	height: 507px;
}
`

export const SingUpForm = styled.div`
position: absolute;
left: 5.5vw;
top: -37px;
width: 89.3vw;
height: 335px;
background: #2A2C36;
box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
border-radius: 30px;
`
export const Title = styled.h2`
color: ${p => p.theme.colors.textWhite};
margin-top: 32px;
margin-bottom: 18px;
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
`

export const Button = styled.button`
margin-top: 16px;
padding: 12px 106px;
border-radius: 6px;
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.textWhite};
text-align: center;
`
