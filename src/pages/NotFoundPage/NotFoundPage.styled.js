import styled from "styled-components";

export const Section = styled.section`
    padding-top: ${(p) => p.theme.space[1] * 25}px;
    padding-bottom: ${(p) => p.theme.space[1] * 25}px;

    @media (min-width: 768px) {
        padding-top: ${(p) => p.theme.space[1] * 17.5}px;
        padding-bottom: ${(p) => p.theme.space[1] * 50}px;
    }

    @media (min-width: 1440px) {
        padding-top: ${(p) => p.theme.space[1] * 37.5}px;
        padding-top: ${(p) => p.theme.space[1] * 25}px;
    }
`;
