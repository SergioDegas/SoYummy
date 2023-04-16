import styled from "styled-components";

export const NoRecipesImage = styled.img`
  width: 208px;
  margin: 0 auto;
  margin-bottom: ${(p) => p.theme.space[1] * 6}px;

  @media (min-width: 768px) {
    width: 350px;
    margin-bottom: ${(p) => p.theme.space[1] * 8}px;
  }
`;

export const NoRecipesText = styled.p`
  text-align: center;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.single};
  letter-spacing: -0.02em;

  color: ${(p) => p.theme.colors.errorMsg};
  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xll}px;
  }
`;
