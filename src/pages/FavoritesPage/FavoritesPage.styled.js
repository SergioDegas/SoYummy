import styled from "styled-components";

export const Section = styled.section`
  padding-top: ${(p) => p.theme.space[1] * 28.5}px;
  padding-bottom: ${(p) => p.theme.space[1] * 25}px;

  @media (min-width: 768px) {
    padding-top: ${(p) => p.theme.space[1] * 34}px;
    padding-bottom: ${(p) => p.theme.space[1] * 50}px;
  }

  @media (min-width: 1440px) {
    padding-top: ${(p) => p.theme.space[1] * 41}px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: ${(p) => p.theme.space[1] * 12.5}px;

  @media (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.space[1] * 27.5}px;
  }

  @media (min-width: 1440px) {
    margin-bottom: ${(p) => p.theme.space[1] * 25}px;
  }
`;
