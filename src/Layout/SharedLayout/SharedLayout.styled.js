import styled from "styled-components";
import bgLeftSideM from "images/bg-common/bg-left-mob.png";
import bgLeftSideT from "images/bg-common/bg-left-tab.png";
import bgLeftSideD from "images/bg-common/bg-left-desk.png";

export const LayoutStyled = styled.div`
  background-image: url(${bgLeftSideM});
  background-repeat: no-repeat, no-repeat;
  background-position: left bottom 250px;
  @media (min-width: 768px) {
    background-image: url(${bgLeftSideT});
    background-position: left bottom 150px;
  }
  @media (min-width: 1440px) {
    background-image: url(${bgLeftSideD});
    background-position: left bottom 30px;
  }
`;

export const ContentWrapper = styled.div`
  min-height: calc(100vh - 509px);
`;
