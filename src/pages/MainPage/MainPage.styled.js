import styled from "styled-components";

export const Section = styled.section`
    padding-bottom: ${(p) => p.theme.space[1] * 25}px;

    @media (min-width: 768px) {
        padding-bottom: ${(p) => p.theme.space[1] * 50}px;
    }
`;
