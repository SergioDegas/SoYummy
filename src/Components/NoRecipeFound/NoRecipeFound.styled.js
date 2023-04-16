import styled from "styled-components";

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
