import styled from "styled-components";
import { GiEvilFork } from "react-icons/gi";
import { MdOutlineEmail } from 'react-icons/md';
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

export const Container = styled.div`
width: 1440px;
margin: 0 auto;
padding: 0 16px;
`
export const FooterContainer = styled.div`
  background-color:${({theme})=>`${theme.colors.backgroundSecondary}`};
  height: 420px;
  width: 100%;
`;
export const MainContainer = styled.div`
  display: flex;
  padding-top:${({theme})=>`${theme.space[5]}px`};
`;
export const InfoContainer = styled.div`
  padding-left: 100px;
  margin-right: 160px;
`;
export const HeadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
export const LogoContainer = styled.div`
  width: 44px;
  height: 44px;
  background-color: ${({theme})=>`${theme.colors.accent}`};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled(GiEvilFork)`
  width: 30px;
  height: 30px;
  color: ${({theme})=>`${theme.colors.mainLight}`};
`;
export const FooterTitle = styled.h1`
  width: 159px;
  height: 28px;
  font-family: ${({theme})=>`${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({theme})=>`${theme.fontWeights.bold}`};
  font-size: 28px;
  line-height: ${({theme})=>`${theme.lineHeights.single}`};
  letter-spacing: 0.015em;
  color: ${({theme})=>`${theme.colors.backgroundPrimary}`};
  margin-top: auto;
  margin-bottom: auto;
`;
export const BenefitsList = styled.ul`
  margin-top: 40px;
`;

export const BenefitsItem = styled.li`
font-family: ${({theme})=>`${theme.fonts.main}`};
font-style: normal;
font-weight: ${({theme})=>`${theme.fontWeights.regular}`};
font-size: ${({theme})=>`${theme.fontSizes.l}`};
line-height: ${({theme})=>`${theme.lineHeights.regular}`};
letter-spacing: -0.02em;
color: ${({theme})=>`${theme.colors.backgroundPrimary}`};
word-break: break-all;
&:not(:last-child){
margin-bottom:12px;
}
}
`;
export const Dot = styled.span`
  margin-right: 5px;
`;
export const BenefitText = styled.span`
  display: block;
  text-indent: 13px;
`;
export const MenuList = styled.ul`
margin-right: 246px; 
`
export const MenuItem = styled.li`
font-family: ${({theme})=>`${theme.fonts.main}`};
font-style: normal;
font-weight: ${({theme})=>`${theme.fontWeights.medium}`};
font-size: 14px;
line-height: ${({theme})=>`${theme.lineHeights.heading}`};
letter-spacing: -0.02em;
color: ${({theme})=>`${theme.colors.backgroundPrimary}`};
&:not(:last-child){
margin-bottom:24px;
}
`

export const EmailTitle = styled.h2`
font-family: ${({theme})=>`${theme.fonts.main}`};
font-style: normal;
font-weight: ${({theme})=>`${theme.fontWeights.bold}`};
font-size: 18px;
line-height: ${({theme})=>`${theme.lineHeights.large}`};
color: ${({theme})=>`${theme.colors.backgroundPrimary}`};
margin-bottom:${({theme})=>`${theme.space[3]}px`};
`

export const EmailText = styled.p`
font-family: ${({theme})=>`${theme.fonts.main}`};
font-style: normal;
font-weight: ${({theme})=>`${theme.fontWeights.regular}`};
font-size: 14px;
line-height: ${({theme})=>`${theme.lineHeights.heading}`};
letter-spacing: -0.02em;
color: ${({theme})=>`${theme.colors.backgroundPrimary}`};
margin-bottom:${({theme})=>`${theme.space[4]}px`};
`

export const EmailInput = styled.input`
  width: 338px;
  height: 59px;
  background-color: transparent;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 52px;
  padding-right: 71px;
  border: 1px solid #FAFAFA;
  border-radius: 5px;
  font-family: ${({theme})=>`${theme.fonts.main}`};
  font-style: normal;
  font-weight:${({theme})=>`${theme.fontWeights.regular}`};
  font-size: 18px;
  line-height: ${({theme})=>`${theme.lineHeights.large}`};
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  color:${({theme})=>`${theme.colors.backgroundPrimary}`};
  ::placeholder {
    color:${({theme})=>`${theme.colors.backgroundPrimary}`};
  }
`;

export const MailContainer = styled.div`
  position: relative;
`;

export const MailIcon = styled(MdOutlineEmail)`
  position: absolute;
  width: 20px;
  height: 20px;
  color:${({theme})=>`${theme.colors.mainLight}`};
  top: 20px;
  left: 20px;
`;
export const MailBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 21px 138px;
gap: 8px;
width: 339px;
height: 60px;
background: ${({theme})=>`${theme.colors.accent}`};
border-radius: ${({theme})=>`${theme.radius.small}`};
border: none;
color: ${({theme})=>`${theme.colors.backgroundPrimary}`};
`
export const FacebookIcon = styled(BsFacebook)`
 color:${({theme})=>`${theme.colors.accent}`};
 width: 20px;
 height:20px;
`;

export const YTIcon = styled(BsYoutube)`
 color:${({theme})=>`${theme.colors.accent}`};
 width: 20px;
 height:20px;
`;

export const TwitterIcon = styled(BsTwitter)`
 color:${({theme})=>`${theme.colors.accent}`};
 width: 20px;
 height:20px;
`;

export const InstIcon = styled(BsInstagram)`
 color:${({theme})=>`${theme.colors.accent}`};
 width: 20px;
 height:20px;
`;

export const SocialContainer = styled.ul`
display: flex;
justify-content: center;
margin-top: 40px;
padding-bottom: 50px;
gap:20px;
`

