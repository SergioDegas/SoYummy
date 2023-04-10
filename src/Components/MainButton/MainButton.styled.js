import styled from "styled-components";

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 195px;
    height: 46px;

    background: transparent;
    border: 2px solid ${(p) => p.theme.colors.accent};

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes.s}px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: ${(p) => p.theme.colors.textDarckGrey};
    border-radius: 24px 44px;

    transition: all 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.accent};
        color: ${(p) => p.theme.colors.textWhite};
    }

    @media (min-width: 768px) {
        width: 239px;
        height: 61px;

        font-size: ${(p) => p.theme.fontSizes.m}px;
    }
`;
