import styled from "styled-components";

export const PopularSection = styled.div`
  /* padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  } */
`;

export const Title = styled.h3`
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: ${(p) => p.theme.lineHeights.single};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.textSubTitle};
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularList = styled.ul`
  width: 343px;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
    display: block;
  }
`;

export const PopularItem = styled.li`
  width: 343px;
  height: 98px;
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const PopularImage = styled.img`
  width: 104px;
  height: 85px;
  margin-right: 12px;
  border-radius: ${(p) => p.theme.radius.regular};
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1440px) {
    width: 97px;
    margin-right: 11px;
  }
`;

export const PopularSubtitle = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.textSubTitle};
  width: 212px;
  margin-bottom: 3px;
`;

export const PopularText = styled.p`
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.regular};
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.textSecondary};

  width: 212px;
  height: 56px;

  @media screen and (min-width: 768px) {
    width: 208px;
  }

  @media screen and (min-width: 1440px) {
    width: 196px;
  }
`;
