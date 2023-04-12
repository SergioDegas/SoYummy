import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Poppins";
  color: ${({ theme }) => `${theme.colors.textWhite}`};
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (min-width: 768px) {
    padding: 21px 32px;
  }
  @media (min-width: 1440px) {
    padding: 21px 40px;
  }
`;

export const TitleText = styled.p`
  font-family: "Poppins";
  color: ${({ theme }) => `${theme.colors.textWhite}`};
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TitleTextWrap = styled.div`
  display: flex;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 38px;
  }
  @media (min-width: 1440px) {
    gap: 109px;
  }
`;
