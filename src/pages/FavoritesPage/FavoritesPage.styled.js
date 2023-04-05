import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: ${(p) => p.theme.space[1] * 13}px;
    margin-bottom: ${(p) => p.theme.space[1] * 12.5}px;

    @media (min-width: 768px) {
        margin-top: ${(p) => p.theme.space[1] * 18}px;
        margin-bottom: ${(p) => p.theme.space[1] * 27.5}px;
    }

    @media (min-width: 1440px) {
        margin-top: ${(p) => p.theme.space[1] * 25}px;
        margin-bottom: ${(p) => p.theme.space[1] * 25}px;
    }
`;
