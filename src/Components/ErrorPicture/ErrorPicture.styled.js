import styled from "styled-components";

export const Picture = styled.img`
    width: 259px;
    height: 170px;

    margin-left: auto;
    margin-right: auto;
    margin-top: ${(p) => p.theme.space[1] * 25}px;
    margin-bottom: ${(p) => p.theme.space[1] * 3.5}px;

    @media (min-width: 768px) {
        width: 498px;
        height: 331px;

        margin-bottom: ${(p) => p.theme.space[1] * 8}px;
    }

    @media (min-width: 1440px) {
        margin-top: ${(p) => p.theme.space[1] * 37.5}px;
    }
`;
