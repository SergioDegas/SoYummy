import styled from "styled-components";

export const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${(p) => p.theme.space[1] * 7}px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${(p) => p.theme.space[1] * 8}px;
    }

    @media (min-width: 768px) {
        gap: ${(p) => p.theme.space[1] * 3.5}px;
    }
`;

export const ItemStyled = styled.li`
    flex-basis: 100%;

    @media (min-width: 768px) {
        flex-basis: calc(100% / 2 - (${(p) => p.theme.space[1] * 8}px / 2));
    }

    @media (min-width: 1440px) {
        flex-basis: calc((100% - (${(p) => p.theme.space[1] * 3.5}px*3)) / 4);
    }
`;
