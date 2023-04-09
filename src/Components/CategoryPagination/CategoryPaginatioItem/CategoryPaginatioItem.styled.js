import styled from "styled-components";

export const PaginationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    height: 27px;

    background: ${(p) => p.theme.colors.backgroundPagination};
    border-radius: ${(p) => p.theme.radius.round};
    border: transparent;

    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.pagination};
    opacity: 1;

    cursor: pointer;

    &:disabled {
        opacity: 0.6;
    }
`;

export const ActivePaginationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    background: ${(p) => p.theme.colors.paginationActive};
    border-radius: ${(p) => p.theme.radius.round};
    border: transparent;

    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.pagination};
`;
