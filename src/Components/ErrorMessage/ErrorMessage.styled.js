import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: ${(p) => p.theme.space[1] * 17}px;
    margin-right: ${(p) => p.theme.space[1] * 17}px;

    text-align: center;

    @media (min-width: 768px) {
        margin-left: ${(p) => p.theme.space[1] * 35.75}px143px;
        margin-right: ${(p) => p.theme.space[1] * 35.75}px143px;
    }

    @media (min-width: 1440px) {
        margin-left: ${(p) => p.theme.space[1] * 101.5}px;
        margin-right: ${(p) => p.theme.space[1] * 101.5}px;
    }
`;

export const ErrorTitle = styled.p`
    margin-bottom: ${(p) => p.theme.space[1] * 2}px;

    font-weight: ${(p) => p.theme.fontWeights.semibold};
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: 1.11;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.errorMsg};

    @media (min-width: 768px) {
        margin-bottom: ${(p) => p.theme.space[1] * 3.5}px;
        font-size: ${(p) => p.theme.fontSizes.xll}px;
        line-height: ${(p) => p.theme.lineHeights.single};
    }
`;

export const ErrorText = styled.p`
    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes.s}px;
    line-height: ${(p) => p.theme.lineHeights.heading};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.errorMsg};

    opacity: 0.5;

    @media (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.l}px;
        line-height: ${(p) => p.theme.lineHeights.regular};
    }
`;
