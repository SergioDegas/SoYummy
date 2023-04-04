import styled from "styled-components";
// import backgroundImgS from "../../images/background-1x.png";
// import backgroundImgL from "../../images/background-2x.png";

export const Container = styled.div`
  width: 375px;
  padding: 0 16px 100px;
  margin: 0 auto;

  /* background-image: url();
  background-repeat: no-repeat;
  background-position: 0 124%; */

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 200px;
    /* background-image: url();
    background-position: 0 175%; */
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px 200px;
    background-position: 0 215%;
  }
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 28px;
  line-height: ${(p) => p.theme.lineHeights.single};
  letter-spacing: -0.02em;

  color: ${(p) => p.theme.colors.textTitle};
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SideWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: block;
    width: 319px;
  }
`;
