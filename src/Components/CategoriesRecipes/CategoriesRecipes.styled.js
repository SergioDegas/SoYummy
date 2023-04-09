import styled from "styled-components";

export const Error = styled.div`
    margin: 0 auto;
    text-align: center;
    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: ${(p) => p.theme.lineHeights.heading};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.errorMsg};

    width: 206px;

    @media (min-width: 768px) {
        width: 428px;
    }
`;

export const WrapperPagination = styled.div`
    display: flex;
    margin-top: ${(p) => p.theme.space[1] * 10}px;

    @media (min-width: 768px) {
        margin-top: ${(p) => p.theme.space[1] * 12.5}px;
    }
`;
