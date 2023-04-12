const { default: styled } = require("styled-components");

export const Spinner = styled.div`
    border: 10px solid ${(p) => p.theme.colors.textPrimary};
    border-top: 10px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
