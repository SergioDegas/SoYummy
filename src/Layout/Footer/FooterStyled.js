import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from "react-icons/si";
import { GiEvilFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
export const FooterContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
  height: 435px;
  width: 100%;
  @media (min-width: 768px) {
    height: 425px;
  }
`;

export const MainBox = styled.div`
@media (min-width: 1440px) {
  padding-top: 64px;
  display: flex;
  justify-content: space-between;
  }
`

export const MainContainer = styled.div`
  @media (min-width: 768px) {
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  
  @media (min-width: 1440px) {
    padding-top: 0;
    display: flex;
    justify-content: none;
  }
`;



export const TitleContainer = styled.div``;
export const TitleBox = styled.div`
  display: flex;
  padding-top: 28px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    padding-top: 0;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 24px;
  }
  @media (min-width: 1240px) {
  }
`;

export const Title = styled.h1`
  margin-left: 8px;
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.bold}`};
  font-size: 18px;
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  letter-spacing: 0.015em;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1240px) {
  }
`;
export const LogoContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media (min-width: 1440px) {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
`;


export const LogoIcon = styled(GiEvilFork)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => `${theme.colors.mainLight}`};
=======
export const BenefitsItem = styled.li`
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
font-size: ${({ theme }) => `${theme.fontSizes.l}`};
line-height: ${({ theme }) => `${theme.lineHeights.regular}`};
letter-spacing: -0.02em;
color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
word-break: break-all;
&:not(:last-child){
margin-bottom:12px;
}


`;

export const MenuList = styled.ul`
  display: block;
  text-align: center;
  margin-bottom: 32px;
  padding-right: 0;
  @media (min-width: 768px) {
    padding-right: 94px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    padding-right: 0;
  }
`;
export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const MenuLink = styled(NavLink)`
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 14px;
  line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
  letter-spacing: -0.02em;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => `${theme.colors.accent}`};
  }
`;

export const EmailForm = styled.form`
  display: block;
  margin-left: 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 72px;
  }
  @media (min-width: 1440px) {
    display: block;
    margin-top: 0;
    
  }
`;
export const EmailBox = styled.div`
  position: relative;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const EmailTitle = styled.h2`
display: none;
@media (min-width: 1440px) {
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #FAFAFA;
    margin-bottom: 14px;

  }
`

export const EmailText = styled.p`
display: none;
@media (min-width: 1440px) {
  display: flex;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: #FAFAFA;
margin-bottom: 28px;
  }
`

export const EmailInput = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid #fafafa;
  background-color: transparent;
  border-radius: 6px;
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 10px;
  line-height: ${({ theme }) => `${theme.lineHeights.large}`};
  letter-spacing: -0.02em;
  ::placeholder {
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
  padding: 12px 42px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => `${theme.colors.green}`};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.green}20`};
  }
  &:focus::placeholder {
    color: ${({ theme }) => `${theme.colors.accent}`};
  }
  &:not(:placeholder-shown) {
    color: #FAFAFA
  }
  @media (min-width: 768px) {
    width: 259px;
    height: 50px;
    font-size: 14px;
    padding-right:40px;
    padding-left:51px;
    padding-top:15px;
    padding-bottom:15px;
  }
  @media (min-width: 1440px) {
    width: 339px;
    height: 59px;
    font-size: 18px;
    padding-right:70px;
    padding-left:50px;
    padding-top:18px;
    padding-bottom:18px;
  }
`;
export const EmailIcon = styled(MdOutlineEmail)`
  position: absolute;
  top: 27%;
  left: 27%;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  @media (min-width: 768px) {
    top: 34%;
    left:11%;
  };
  @media (min-width: 1440px) {
    top: 35%;
    left: 7%;
  };
`;
export const EmailBtn = styled.button`
  cursor: pointer;
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 14px;
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 11px 71px;
  width: 204px;
  height: 38px;
  background: ${({ theme }) => `${theme.colors.accent}`};
  border-radius: 6px;
  margin-right: auto;
  margin-left: auto;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => `${theme.colors.accent}`};
    background: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
  background-color: ${props => props.disabled ? 'grey' : '#8BAA36'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:disabled {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    margin-right: 0;
    margin-left: 12px;
    width: 171px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 339px;
    height: 60px;
    margin-top:16px;
    margin-left: 0;
    font-size: 16px;
    line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 44px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;
export const FacebookIcon = styled(SiFacebook)`
  color: ${({ theme }) => `${theme.colors.accent}`};
  width: 20px;
  height: 20px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease-in-out;
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
`;

export const YTIcon = styled(SiYoutube)`
  color: ${({ theme }) => `${theme.colors.accent}`};
  width: 20px;
  height: 20px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease-in-out;
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
`;

export const TwitterIcon = styled(SiTwitter)`
  color: ${({ theme }) => `${theme.colors.accent}`};
  width: 20px;
  height: 20px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease-in-out;
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
`;

export const InstIcon = styled(SiInstagram)`
  color: ${({ theme }) => `${theme.colors.accent}`};
  width: 20px;
  height: 20px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease-in-out;
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
`;
export const Copyright = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  letter-spacing: -0.01em;
  color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
  opacity: 0.5;
`;
export const CopyrightText = styled.span`
  margin-left: 14px;
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 10px;
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  letter-spacing: -0.01em;
  color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
  opacity: 0.5;
`;
export const Dot = styled.span`
  margin-right: 5px;
`;
export const BenefitsList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const BenefitsItem = styled.li`
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 14px;
  line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
  letter-spacing: -0.02em;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const BenefitText = styled.span`
@media (min-width: 768px) {
    white-space: nowrap;
  }
  @media (min-width: 1440px) {
    display: block;
    text-indent: 13px;
  }
`
