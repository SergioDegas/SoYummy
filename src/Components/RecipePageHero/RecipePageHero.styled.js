import styled from "styled-components";
import bgMobX1 from "images/bg-recipePageHero/recipe-page-hero-bg-mob-1x.jpg";
import bgMobX2 from "images/bg-recipePageHero/recipe-page-hero-bg-mob-2x.jpg";
import bgTabX1 from "images/bg-recipePageHero/recipe-page-hero-bg-tab-1x.jpg";
import bgTabX2 from "images/bg-recipePageHero/recipe-page-hero-bg-tab-2x.jpg";
import bgDeskX1 from "images/bg-recipePageHero/recipe-page-hero-bg-desk-1x.jpg";
import bgDeskX2 from "images/bg-recipePageHero/recipe-page-hero-bg-desk-2x.jpg";

export const SectionHero = styled.section`
  background-image: url(${bgMobX1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 144px;
  padding-bottom: 90px;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobX2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgTabX1});
    padding-top: 136px;
    padding-bottom: 32px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabX2});
    }
  }
  @media (min-width: 1440px) {
    background-image: url(${bgDeskX1});
    padding-top: 164px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDeskX2});
    }
  }
`;

export const SectionHeroTitle = styled.h1`
  font-family: "Poppins";
  color: ${({ theme }) => `${theme.colors.accent}`};
  font-weight: ${({ theme }) => `${theme.fontWeights.semibold}`};
  font-size: 24px;
  line-height: 1;
  max-width: 360px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    font-size: 44px;
    max-width: 700px;
    margin-bottom: 24px;
  }
`;

export const SectionHeroDesc = styled.p`
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 1.33;
  color: ${({ theme }) => `${theme.colors.textPrimary}`};
  @media (min-width: 768px) {
    max-width: 506px;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    max-width: 656px;
    margin-bottom: 30px;
  }
`;

export const SectionHeroBtn = styled.button`
  background-color: transparent;
  color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
  border-radius: 24px 44px;
  border: 1px solid ${({ theme }) => `${theme.colors.accent}`};
  padding: 10px 18px;
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: 0.6;
  margin-bottom: 42px;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
    margin-bottom: 60px;
    border: 2px solid ${({ theme }) => `${theme.colors.accent}`};
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
  :hover,
  :focus {
    background-color: ${({ theme }) => `${theme.colors.accent}`};
    color: ${({ theme }) => `${theme.colors.textWhite}`};
  }
`;

export const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${({ theme }) => `${theme.colors.textPrimary}`};
  margin-left: 4px;
  @media (min-width: 768px) {
    font-size: 14px;
    margin-left: 8px;
  }
`;
