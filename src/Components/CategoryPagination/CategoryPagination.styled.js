import styled from "styled-components";

export const PaginationList = styled.ul`
    display: inline-flex;
    align-items: center;

    gap: ${(p) => p.theme.space[1] * 2.75}px;

    padding: ${(p) => p.theme.space[1] * 3.5}px ${(p) => p.theme.space[1] * 6}px;
    margin: 0 auto;

    background: ${(p) => p.theme.colors.backgroundPrimary};
    box-shadow: ${(p) => p.theme.shadows.pagination};
    border-radius: 26px;

    @media (min-width: 768px) {
        gap: ${(p) => p.theme.space[1] * 3.5}px;
    }
`;
