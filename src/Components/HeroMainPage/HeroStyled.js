import styled from "styled-components";
import bgMobX1 from "images/bg-MainHero/MainHero-bg-1x-mob.png";
import bgMobX2 from "images/bg-MainHero/MainHero-bg-2x-mob.png";
import bgTabX1 from "images/bg-MainHero/MainHero-bg-1x-tab.png";
import bgTabX2 from "images/bg-MainHero/MainHero-bg-2x-tab.png";
import bgDeskX1 from "images/bg-MainHero/MainHero-bg-1x-desk.png";
import bgDeskX2 from "images/bg-MainHero/MainHero-bg-2x-desk.png";

export const SectionHero = styled.section`
  background-image: url(${bgMobX1});
  background-repeat: no-repeat;
  background-position: center;
  background-position: 10px 30px;
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
    @media (min-width: 1440px) {
      background-image: url(${bgDeskX1});
      padding-top: 164px;
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${bgDeskX2});
      }
    }
  }
`;

export const HeroTitle = styled.h1`
padding-top: 132px;
`