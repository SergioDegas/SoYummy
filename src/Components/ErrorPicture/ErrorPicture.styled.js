import styled from "styled-components";

export const Picture = styled.img`
    width: 259px;
    height: 170px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${(p) => p.theme.space[1] * 3.5}px;

    @media (min-width: 768px) {
        width: 498px;
        height: 331px;

        margin-bottom: ${(p) => p.theme.space[1] * 8}px;
    }
`;
