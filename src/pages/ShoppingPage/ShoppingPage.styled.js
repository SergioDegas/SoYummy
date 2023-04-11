import styled from "styled-components";

export const SectionShoppingList = styled.section`
  padding-top: 114px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 200px;
  }
  @media (min-width: 768px) {
    padding-top: 164px;
    padding-bottom: 195px;
  }
`;

export const Wrap = styled.div`
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
`;

export const Info = styled.p`
  font-family: "Poppins";
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`
