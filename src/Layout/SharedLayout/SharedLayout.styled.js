import styled from "styled-components";
import { Link } from "react-router-dom";
import bgLeftSideM from "images/bg-common/bg-left-mob.png";
import bgRightSideM from "images/bg-common/bg-right-mob.png";
import bgLeftSideT from "images/bg-common/bg-left-tab.png";
import bgRightSideT from "images/bg-common/bg-right-tab.png";
import bgLeftSideD from "images/bg-common/bg-left-desk.png";
import bgRightSideD from "images/bg-common/bg-right-desk.png";

export const LayoutStyled = styled.div`
  background-image: url(${bgLeftSideM}), url(${bgRightSideM});
  background-repeat: no-repeat, no-repeat;
  background-position: left bottom 250px, bottom right;
  @media (min-width: 768px) {
    background-image: url(${bgLeftSideT}), url(${bgRightSideT});
    background-position: left bottom 150px, bottom right;
  }
  @media (min-width: 1440px) {
    background-image: url(${bgLeftSideD}), url(${bgRightSideD});
    background-position: left bottom 30px, bottom right;
  }
`;

export const PolicyWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 28px 0;
  color: ${({ theme }) => `${theme.colors.backgroundSecondary}`};
  font-family: "Poppins";
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
`;
