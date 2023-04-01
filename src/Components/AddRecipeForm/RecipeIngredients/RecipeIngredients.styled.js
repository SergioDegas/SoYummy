import styled from "styled-components";
import arror from "../../../images/chevron-down.png";

export const IngredientsWrap = styled.div`
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const FormSubtitle = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: ${(p) => p.theme.lineHeights.single};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.textSubTitle};
`;

export const CalcWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const Calculator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92px;
  height: 28px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 32px;
  }
`;

export const CalcButton = styled.button`
  background-color: transparent;
  border: none;
  /* border-radius: ${(p) => p.theme.radius.round}; */
`;

export const Number = styled.p`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: #333333;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    line-height: ${(p) => p.theme.lineHeights.large};
  }
`;

export const IngredientItem = styled.li`
  width: 343px;
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const IngrInput = styled.input`
  width: 194px;
  height: 53px;
  margin-right: 14px;
  padding: 16px;
  background-color: rgba(245, 245, 245, 1);
  border-radius: ${(p) => p.theme.radius.small};
  border: none;
  outline: none;

  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainDark};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    margin-right: 32px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const IngrNumberLabel = styled.label`
  position: relative;
  width: 84px;
  height: 53px;
  margin-right: 33px;

  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    margin-right: 157px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 60px;
  }
`;

export const NumberInput = styled.input`
  width: 84px;
  height: 53px;
  padding: 16px 0 16px 16px;
  background-color: #f5f5f5;
  outline: none;
  border: none;
  border-radius: ${(p) => p.theme.radius.small};

  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.textPrimary};

  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const UnitSelect = styled.select`
  position: absolute;
  right: 0;

  width: 45px;
  height: 53px;
  padding: 16px 0;
  background-color: #f5f5f5;
  outline: none;
  border: none;
  border-radius: ${(p) => p.theme.radius.small};

  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.textPrimary};

  appearance: none;
  overflow: hidden;
  background-image: url(${arror});
  background-repeat: no-repeat;
  background-position: 26px 19px;
  background-size: 16px;

  @media screen and (min-width: 768px) {
    width: 52px;
    height: 59px;
    font-size: 18px;
    background-position: 28px 22px;
  }
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: border-color 250ms linear;

  :hover {
    border-color: #8baa36;
  }
`;
