import styled from "styled-components";

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
