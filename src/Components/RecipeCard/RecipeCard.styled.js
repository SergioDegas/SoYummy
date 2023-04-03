import styled from "styled-components";

export const PictureThumb = styled.div`
    position: relative;
    border-radius: ${(p) => p.theme.radius.regular};
    flex-basis: 100%;
    height: 323px;

    overflow: hidden;
`;

export const RecipePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PictureTitleWrap = styled.div`
    position: absolute;
    left: ${(p) => p.theme.space[1] * 4.5}px;
    bottom: ${(p) => p.theme.space[1] * 6.5}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;

    width: 307px;
    height: 52px;
    background-color: ${(p) => p.theme.colors.backgroundPrimary};
    border-radius: ${(p) => p.theme.radius.regular};

    @media (min-width: 768px) {
        width: 300px;
    }

    @media (min-width: 1440px) {
        width: 268px;
    }
`;

export const PictureTitle = styled.h2`
    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: ${(p) => p.theme.fontSizes.m}px;
    line-height: ${(p) => p.theme.lineHeights.heading};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.textSubTitle};
    white-space: nowrap;
    overflow: hidden;
`;
