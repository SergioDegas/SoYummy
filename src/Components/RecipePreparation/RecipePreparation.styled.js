import styled from "styled-components";
import Container from "../Container";

export const StyledContainer = styled(Container)`
  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const SectionPreparation = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 200px;
  }
  @media (min-width: 1440px) {
  }
`;

export const TextTumb = styled.div`
  @media (min-width: 1440px) {
    width: 757px;
  }
`;

export const SectionPreparationTitle = styled.h3`
  font-family: "Poppins";
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  font-weight: ${({ theme }) => `${theme.fontWeights.semibold}`};
  font-size: 24px;
  line-height: 1;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ImgThumb = styled.div`
display: flex;
justify-content: center;
    align-items: center;
  background-color: ${({ theme }) => `${theme.colors.backgroundButton}`};
  height: 323px;
  @media (min-width: 768px) {
    width: 433px;
    height: 332px;
  }
  @media (min-width: 1440px) {
    margin-left: 50px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: block;
`;

export const DefaultImg = styled.img`
  width: 84px;
  height: 84px;
`;