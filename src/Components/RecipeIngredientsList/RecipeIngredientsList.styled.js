import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

export const SectionIngredients = styled.section`
  padding-top: 32px;
  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const IngedientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const IngedientsItem = styled.li`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => `${theme.colors.backgroundCardIngredients}`};
  padding: 14px 29px 14px 14px;
  justify-content: space-between;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }
  @media (min-width: 768px) {
    padding: 27px 70px 27px 58px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const IngedientsImg = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const IngedientsTitle = styled.p`
  font-family: "Poppins";
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 12px;
  line-height: 1.16;
  max-width: 200px;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  @media (min-width: 768px) {
    max-width: 220px;
    font-size: 24px;
    line-height: 1;
  }
  @media (min-width: 1440px) {
    max-width: 420px;
  }
`;

export const IngedientsMeasure = styled.span`
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px;
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  font-family: "Poppins";
  font-weight: ${({ theme }) => `${theme.fontWeights.semiBold}`};
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => `${theme.colors.textWhite}`};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 78px;
  }
  @media (min-width: 1440px) {
    margin-right: 151px;
  }
`;

export const CheckBoxWrap = styled.span`
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: transparent;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const IngedientsCheck = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  cursor: pointer;
  ${IngedientsCheck}:checked + ${CheckBoxWrap} {
    color: ${({ theme }) => `${theme.colors.accent}`};
  }
`;

export const CheckMarkIcon = styled(BsCheck)`
  width: 18px;
  height: 18px;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
