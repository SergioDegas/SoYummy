import styled from "styled-components";
import { GiEvilFork } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
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

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
  height: 435px;
  @media (min-width: 768px) {
    height: 425px;
  }
  @media (min-width: 1240px) {
    height: 420px;
  }
  width: 100%;
`;
export const MainContainer = styled.div`
  padding-top: 28px;
  display: block;
  @media (min-width: 768px) {
    padding-top: 50px;
    display: block;
  }
  @media (min-width: 1240px) {
    display: flex;
    padding-top: ${({ theme }) => `${theme.space[5]}px`};
    justify-content: space-between;
  } ;
`;
export const MenuContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 1240px) {
    display: flex;
    gap: 120px;
  } ;
`;
export const InfoContainer = styled.div``;
export const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;
  }
  @media (min-width: 1240px) {
    gap: 12px;
    justify-content: flex-start;
    margin-bottom: 0;
  } ;
`;
export const LogoContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1240px) {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
`;

export const LogoIcon = styled(GiEvilFork)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => `${theme.colors.mainLight}`};
`;
export const FooterTitle = styled.h1`
  width: 102px;
  height: 18px;
  font-size: 18px;
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.bold}`};
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  margin-top: auto;
  margin-bottom: auto;
  @media (min-width: 768px) {
    width: 159px;
    height: 28px;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0.015em;
  }
  @media (min-width: 1240px) {
    width: 159px;
    height: 28px;
    font-size: 28px;
    letter-spacing: 0.015em;
  }
`;
export const BenefitsList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1240px) {
    display: block;
    margin-top: 40px;
  }
`;

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
}
`;

export const Dot = styled.span`
  margin-right: 5px;
`;
export const BenefitText = styled.span`
  @media (min-width: 768px) {
    white-space: nowrap;
  }
  @media (min-width: 1240px) {
    display: block;
    text-indent: 13px;
  }
`;
export const MenuList = styled.ul``;

export const MenuItem = styled.li`
display: block;
text-align: center;
&:not(:last-child) {
    margin-bottom: 14px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
@media (min-width: 1240px) {
  &:not(:last-child) {
    margin-bottom: 24px;
  };
  }
`;

export const ContactBox = styled.div`
  @media (min-width: 768px) {
    gap: 12px;
    margin-top: 72px;
    display: flex;
    justify-content: center;
    margin-bottom: 38px;
  }
  @media (min-width: 1240px) {
    margin-top: 0;
    display: block;
  }
`;

export const EmailTitle = styled.h2`
  display: none;
  @media (min-width: 1240px) {
    display: block;
    &:not(:last-child) {
      margin-bottom: 24px;
      font-family: ${({ theme }) => `${theme.fonts.main}`};
      font-style: normal;
      font-weight: ${({ theme }) => `${theme.fontWeights.bold}`};
      font-size: 18px;
      line-height: ${({ theme }) => `${theme.lineHeights.large}`};
      color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
      margin-bottom: ${({ theme }) => `${theme.space[3]}px`};
    }
  }
`;

export const EmailText = styled.p`
  display: none;
  
  @media (min-width: 1240px) {
    display: block;
    font-family: ${({ theme }) => `${theme.fonts.main}`};
    font-style: normal;
    font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
    font-size: 14px;
    line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
    letter-spacing: -0.02em;
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
    margin-bottom: ${({ theme }) => `${theme.space[4]}px`};
  }
`;

export const EmailInput = styled.input`
  width: 206px;
  height: 38px;
  background-color: transparent;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 42px;
  padding-right: 42px;
  margin-top: 32px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 10px;
  line-height: ${({ theme }) => `${theme.lineHeights.large}`};
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  cursor: pointer;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  ::placeholder {
    color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
  @media (min-width: 768px) {
    margin-top: 0px;
    width: 259px;
    height: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 51px;
    padding-right: 40px;
    font-size: 14px;
    line-height: ${({ theme }) => `${theme.lineHeights.large}`};
    margin-bottom:0;
  }
  @media (min-width: 1240px) {
    width: 339px;
    height: 59px;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 52px;
    padding-right: 71px;
    margin-bottom: 16px;
    font-size: 18px;
  }
`;

export const MailContainer = styled.div`
  position: relative;
`;

export const MailIcon = styled(MdOutlineEmail)`
  position: absolute;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => `${theme.colors.mainLight}`};
  top: 8px;
  left: 75px;
  cursor: pointer;
  @media (min-width: 768px) {
    left: 20px;
    top: 15px;
  }
  @media (min-width: 1240px) {
    top: 20px;
    left: 20px;
  }
`;
export const MailBtn = styled.button`
  font-family: ${({ theme }) => `${theme.fonts.main}`};
  font-style: normal;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  font-size: 14px;
  line-height: ${({ theme }) => `${theme.lineHeights.single}`};
  text-align: center;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 46px;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 71px;
  width: 206px;
  height: 38px;
  background: ${({ theme }) => `${theme.colors.accent}`};
  border-radius: ${({ theme }) => `${theme.radius.small}`};
  border: none;
  color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => `${theme.colors.accent}`};
    background: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
  }
  @media (min-width: 768px) {
    margin: 0;
    width: 171px;
    height: 50px;
    font-size: 16px;
  }
  @media (min-width: 1240px) {
    width: 339px;
    height: 60px;
    padding: 21px 138px;
    font-size: 16px;
    margin-bottom: 0;
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

export const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 0;
  /* padding-bottom: 20px; */
  gap: 20px;
  @media (min-width: 1240px) {
    padding-bottom: 50px;
    margin-top: 40px;
  }
`;

export const Copyright = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #22252a;
  opacity: 0.5;
  @media (min-width: 1240px) {
    margin-top: 50px;
    padding-bottom: 50px;
    margin-top: 40px;
    font-size: 14px;
    line-height: 14px;
  }
`;

export const CopyrightText = styled.span`
  margin-left: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #22252a;
  opacity: 0.5;
  @media (min-width: 1240px) {
    font-size: 14px;
    line-height: 14px;
    margin-left: 40px;
  }
`;
