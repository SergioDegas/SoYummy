import styled from "styled-components";

export const LinksWrap = styled.div`
  display: none;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const LinksTitle = styled.h3`
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: ${(p) => p.theme.lineHeights.single};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.textSubTitle};
  margin-bottom: 40px;
`;

export const LinksList = styled.ul`
  width: 163px;
  height: 26px;
  display: flex;
  justify-content: space-between;
`;
