import styled from "styled-components";

export const PageTitleText = styled.h1`
    font-family: ${(p) => p.theme.fonts.main};
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeights.semibold};
    font-size: ${(p) => p.theme.fontSizes.xxl}px;
    line-height: ${(p) => p.theme.lineHeights.single};

    letter-spacing: -0.24px;

    color: ${(p) => p.theme.colors.textTitle};

    @media (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.xxxl}px;
    }

    @media (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.xxxxl}px;
    }
`;
