import styled from "styled-components";

export const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
`

export const Img = styled.img`
margin-top: auto;
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