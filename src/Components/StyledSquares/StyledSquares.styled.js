import styled from "styled-components";

export const SquaresWrapper = styled.div`
    position: relative;
`;

export const LeftSquare = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    top: -38px;
    left: 112px;

    background: #8baa36;
    border-radius: 3px;
    transform: rotate(-25deg);

    animation: pulse 3000ms infinite 1000ms;

    @media (min-width: 768px) {
        width: 14px;
        height: 14px;
        top: -51px;
        left: 187px;
    }

    @media (min-width: 1440px) {
        width: 14px;
        height: 14px;
        top: -47px;
        left: 228px;
    }

    @keyframes pulse {
        0% {
            transform: rotate(-25deg) scale(1);
        }
        50% {
            transform: rotate(25deg) scale(1.25);
        }
        100% {
            transform: rotate(-25deg) scale(1);
        }
    }
`;

export const RightSquare = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    top: -6px;
    right: 0;

    background: #8baa36;
    border-radius: 3px;
    transform: rotate(-25deg);

    animation: pulse 3000ms infinite 1000ms;

    @media (min-width: 768px) {
        width: 14px;
        height: 14px;
        top: -40px;
        right: -9px;
    }

    @media (min-width: 1440px) {
        width: 14px;
        height: 14px;
        top: -34px;
        right: 72px;
    }

    @keyframes pulse {
        0% {
            transform: rotate(-25deg) scale(1);
        }
        50% {
            transform: rotate(25deg) scale(1.25);
        }
        100% {
            transform: rotate(-25deg) scale(1);
        }
    }
`;

export const CentralSquare = styled.div`
    position: absolute;
    width: 6px;
    height: 6px;
    top: 27px;
    right: 104px;

    background: #22252a;
    border-radius: 3px;
    transform: rotate(-25deg);

    animation: pulse 3000ms infinite 1000ms;

    @media (min-width: 768px) {
        width: 12px;
        height: 12px;
        top: 19px;
        right: 283px;
    }

    @media (min-width: 1440px) {
        width: 14px;
        height: 14px;
        top: 36px;
        right: 518px;
    }

    @keyframes pulse {
        0% {
            transform: rotate(-25deg) scale(1);
        }
        50% {
            transform: rotate(25deg) scale(1.25);
        }
        100% {
            transform: rotate(-25deg) scale(1);
        }
    }
`;
