import styled from "styled-components";

export const SectionPreparationDesc = styled.ul`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const TextCount = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  color: ${({ theme }) => `${theme.colors.textWhite}`};
  font-family: "Poppins";
`;

export const Count = styled.span`
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  border-radius: 50%;
  display: block;
  width: 21px;
  height: 21px;
  padding: 2px;
  text-align: center;
`;

export const Text = styled.p`
  line-height: 1.5;
  margin-left: 14px;
  font-size: 12px;
  line-height: 1.33;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;