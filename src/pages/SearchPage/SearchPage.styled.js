import styled from "styled-components";

export const Section = styled.section`
  padding-top: ${(p) => p.theme.space[1] * 12.5}px;
  padding-bottom: ${(p) => p.theme.space[1] * 25}px;

  @media (min-width: 768px) {
    padding-bottom: ${(p) => p.theme.space[1] * 50}px;
  }

  @media (min-width: 1440px) {
    padding-top: ${(p) => p.theme.space[1] * 25}px;
  }
`;

export const WrapperTitle = styled.div`
  margin-bottom: ${(p) => p.theme.space[1] * 15}px;

  @media (min-width: 1440px) {
    margin-bottom: ${(p) => p.theme.space[1] * 27.5}px;
  }
`;

export const Error = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainDark};

  width: 206px;

  @media (min-width: 768px) {
    width: 428px;
  }
`;

export const WrapperPagination = styled.div`
  display: flex;
  margin-top: ${(p) => p.theme.space[1] * 10}px;

  @media (min-width: 768px) {
    margin-top: ${(p) => p.theme.space[1] * 12.5}px;
  }
`;

export const NoRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoRecipesImage = styled.img`
  width: 100%;
  margin: 0 auto;
  max-width: 350px;
  height: auto;
  padding-bottom: 32px;
  padding-top: 50px;
`;

export const NoRecipesText = styled.p`
  font-style: normal;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: ${({ theme }) => `${theme.colors.titleColor}`};
  opacity: 0.5;
  margin: 0;
`;
