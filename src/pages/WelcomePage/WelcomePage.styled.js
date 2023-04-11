import styled from "styled-components";
import { Link } from "react-router-dom";
import bgWellcomePage from "images/bg-wellcomePage/bgWellcomePage";
import { GiEvilFork } from "react-icons/gi";

const { 
  bgMobile1x,
  bgMobile2x,
  bgTablet1x,
  bgTablet2x,
  bgDesktop1x,
  bgDesktop2x,
 } = bgWellcomePage;

export const ContainerWelcome = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgMobile1x});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgMobile2x});
  }
  @media screen and (min-width: 768px) {
    padding: 0 135px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgTablet1x});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${bgTablet2x});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgDesktop1x});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${bgDesktop2x});
    }
  }
`;

export const Logo = styled(GiEvilFork)`
  color: ${p => p.theme.colors.accent};
  width: 54px;
  height: 54px;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const Title = styled.h1`
  margin-top: 28px;
  font-weight: 600;
  font-size: 24px;
  color: ${p => p.theme.colors.textWhite};
  @media screen and (min-width: 768px) {
    margin-top: 44px;
    font-size: 28px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  max-width: 305px;
  margin-top: 14px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: ${p => p.theme.colors.textWhite};
  text-align: center;
  line-height: 1.5;
  letter-spacing: -0.06em;
  font-stretch: ultra-expanded;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 500px;
  }
  @media screen and (min-width: 768px) {
    max-width: 540px;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 12px;
  margin-top: 44px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 20px 60px;
  border: 2px solid #fafafa;
  padding: 12px 24px;
  font-size: 14px;
  padding: 12px 24px;
  background-color: transparent;
  text-decoration: none;
  color: #fafafa;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  &:hover {
    background-color: #fafafa;
    border: 2px solid #8baa36;
    color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
  }
  &:first-of-type {
    background-color: #8baa36;
    border: none;
    &:hover {
      background-color: #22252a;
      color: #fafafa;
    }
  }
`;