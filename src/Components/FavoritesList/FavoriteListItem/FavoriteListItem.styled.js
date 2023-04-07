import styled from "styled-components";

export const Item = styled.li`
    position: relative;
    display: flex;
    gap: ${(p) => p.theme.space[1] * 10}px;
    padding: ${(p) => p.theme.space[1] * 10}px;
    background: ${(p) => p.theme.colors.mainLight};
`;

export const Picture = styled.img`
    width: 318px;
    height: 324px;
    border-radius: 8px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MetaWrap = styled.div``;

export const Title = styled.h2`
    margin-bottom: ${(p) => p.theme.space[1] * 12.5}px;

    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: ${(p) => p.theme.fontSizes.xll}px;
    line-height: ${(p) => p.theme.lineHeights.single};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.textSubTitle};
`;

export const Text = styled.p`
    width: 679px;

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: ${(p) => p.theme.lineHeights.regular};
    letter-spacing: -0.02em;

    color: ${(p) => p.theme.colors.textPrimary};

    &:first-child {
        margin-bottom: ${(p) => p.theme.space[1] * 3.5}px;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;

    width: 44px;
    height: 44px;
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
`;

export const RecipeButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 160px;
    height: 54px;

    background: ${(p) => p.theme.colors.backgroundSecondary};
    color: ${(p) => p.theme.colors.textWhite};
    border-radius: 24px 44px;
    border: transparent;

    transition: background 0.25s ease-out;

    &:hover,
    &:focus {
        background: ${(p) => p.theme.colors.accent};
    }
`;
