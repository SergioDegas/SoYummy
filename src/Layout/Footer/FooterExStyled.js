import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from "react-icons/si";
import { GiEvilFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
export const FooterContainer = styled.div`
background-color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};;
height:435px;
width:100%;
`

export const TitleBox = styled.div`
display: flex;
padding-top: 28px;
align-items: center;
justify-content: center;
margin-bottom: 32px;
`

export const Title = styled.h1`
margin-left: 8px;
height: 18px;
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight: ${({ theme }) => `${theme.fontWeights.bold}`};
font-size: 18px;
line-height: ${({ theme }) => `${theme.lineHeights.single}`};
letter-spacing: 0.015em;
color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
@media (min-width: 768px) {
  }
@media (min-width: 1240px) {
  }
`
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

export const MenuList = styled.ul`
display: block;
text-align: center;
margin-bottom: 32px;
`
export const MenuItem = styled.li`
 &:not(:last-child) {
    margin-bottom: 14px;
    }
`
export const MenuLink = styled(NavLink)`
font-family: ${({ theme }) => `${theme.fonts.main}`};
font-style: normal;
font-weight:${({ theme }) => `${theme.fontWeights.medium}`};
font-size: 14px;
line-height: ${({ theme }) => `${theme.lineHeights.heading}`};
letter-spacing: -0.02em;
color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => `${theme.colors.accent}`};
  }
`
export const EmailBox = styled.div`
position: relative;
margin-bottom: 8px;
display: flex;
justify-content: center;
`
export const EmailInput = styled.input`
width: 204px;
height: 38px;
border: 1px solid #FAFAFA;
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
`
export const EmailIcon = styled(MdOutlineEmail)`
position: absolute;
top: 27%;
left: 27%;
color: ${({ theme }) => `${theme.colors.backgroundPrimary}`};
`
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
`

export const SocialList = styled.ul`
display: flex;
gap: 16px;
justify-content: center;
margin-top: 44px;
`
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
