import styled from "styled-components";

export const Item = styled.li`
    position: relative;
    display: flex;
    gap: ${(p) => p.theme.space[1] * 3.5}px;
    padding: ${(p) => p.theme.space[1] * 3.5}px;
    background: ${(p) => p.theme.colors.backgroundCard};

    @media (min-width: 768px) {
        gap: ${(p) => p.theme.space[1] * 6}px;
        padding: ${(p) => p.theme.space[1] * 7}px
            ${(p) => p.theme.space[1] * 6}px;
    }

    @media (min-width: 1440px) {
        gap: ${(p) => p.theme.space[1] * 10}px;
        padding: ${(p) => p.theme.space[1] * 10}px;
    }
`;

export const Picture = styled.img`
    width: 124px;
    height: 124px;
    object-fit: cover;
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 228px;
        height: 232px;
    }

    @media (min-width: 1440px) {
        width: 318px;
        height: 324px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h2`
    margin-bottom: ${(p) => p.theme.space[1] * 3.5}px;
    max-width: 145px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: ${(p) => p.theme.fontSizes.s}px;
    line-height: ${(p) => p.theme.lineHeights.single};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.textSubTitle};

    @media (min-width: 768px) {
        margin-bottom: ${(p) => p.theme.space[1] * 7}px;
        max-width: none;
        font-size: ${(p) => p.theme.fontSizes.xll}px;
    }

    @media (min-width: 1440px) {
        margin-bottom: ${(p) => p.theme.space[1] * 10}px;
    }
`;

export const Text = styled.p`
    width: 163px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes.xs}px;
    line-height: 1.25;
    letter-spacing: -0.02em;

    color: ${(p) => p.theme.colors.textPrimary};

    &:first-child {
        margin-bottom: ${(p) => p.theme.space[1] * 3.5}px;
        -webkit-line-clamp: 4;
    }

    @media (min-width: 768px) {
        width: 353px;

        font-size: ${(p) => p.theme.fontSizes.s}px;
        line-height: ${(p) => p.theme.lineHeights.heading};
    }

    @media (min-width: 1440px) {
        width: 679px;
        display: block;

        font-size: ${(p) => p.theme.fontSizes.l}px;
        line-height: ${(p) => p.theme.lineHeights.regular};
    }
`;

export const DeleteButtonFav = styled.button`
    position: absolute;
    bottom: 14px;
    right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    background: ${(p) => p.theme.colors.backgroundAccent};
    border-radius: 4px;
    border: transparent;

    color: ${(p) => p.theme.colors.textDarckGrey};

    transition: all 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.accent};
        color: ${(p) => p.theme.colors.textWhite};
    }

    @media (min-width: 768px) {
        top: 28px;
        right: 24px;

        width: 38px;
        height: 38px;
    }

    @media (min-width: 1440px) {
        top: 40px;
        right: 40px;

        width: 44px;
        height: 44px;
    }
`;

export const DeleteButtonMy = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    background: ${(p) => p.theme.colors.accent};
    border-radius: 4px;
    border: transparent;

    color: ${(p) => p.theme.colors.textWhite};

    transition: all 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.backgroundSecondary};
    }

    @media (min-width: 768px) {
        top: 28px;
        right: 24px;

        width: 38px;
        height: 38px;
    }

    @media (min-width: 1440px) {
        top: 40px;
        right: 40px;

        width: 44px;
        height: 44px;
    }
`;

export const RecipeButtonFav = styled.button`
    position: absolute;
    bottom: 14px;
    right: 14px;

    width: 87px;
    height: 27px;

    background: ${(p) => p.theme.colors.backgroundSecondary};
    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: ${(p) => p.theme.colors.textWhite};
    border-radius: 24px 44px;
    border: transparent;

    transition: background 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.accent};
    }

    @media (min-width: 768px) {
        bottom: 28px;
        right: 24px;

        width: 138px;
        height: 45px;

        font-size: ${(p) => p.theme.fontSizes.s}px;
    }

    @media (min-width: 1440px) {
        bottom: 40px;
        right: 40px;

        width: 160px;
        height: 54px;

        font-size: ${(p) => p.theme.fontSizes.m}px;
    }
`;

export const RecipeButtonMy = styled.button`
    position: absolute;
    bottom: 14px;
    right: 14px;

    width: 87px;
    height: 27px;

    background: ${(p) => p.theme.colors.accent};

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: ${(p) => p.theme.colors.textWhite};
    border-radius: 24px 44px;
    border: transparent;

    transition: background 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.backgroundSecondary};
    }

    @media (min-width: 768px) {
        bottom: 28px;
        right: 24px;

        width: 138px;
        height: 45px;

        font-size: ${(p) => p.theme.fontSizes.s}px;
    }

    @media (min-width: 1440px) {
        bottom: 40px;
        right: 40px;

        width: 160px;
        height: 54px;

        font-size: ${(p) => p.theme.fontSizes.m}px;
    }
`;
