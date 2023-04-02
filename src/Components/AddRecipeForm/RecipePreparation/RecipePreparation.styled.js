import styled from "styled-components";

export const FormSubtitle = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: ${(p) => p.theme.lineHeights.single};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.textSubTitle};
`;

export const RecipeText = styled.textarea`
  width: 343px;
  min-height: 154px;
  padding: 10px 16px;
  margin: 24px 0 18px;
  /* background-color: rgba(217, 217, 217, 0.16); */
  background-color: rgba(245, 245, 245, 1);
  outline: none;
  border: none;
  border-radius: 6px;
  resize: none;

  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainDark};
  opacity: 0.5;

  ::placeholder {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    line-height: ${(p) => p.theme.lineHeights.large};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.mainDark};
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 505px;
    min-height: 224px;
    padding: 16px 22px;
    margin: 32px 0;

    ::placeholder {
      font-size: ${(p) => p.theme.fontSizes.l}px;
    }
  }
`;
