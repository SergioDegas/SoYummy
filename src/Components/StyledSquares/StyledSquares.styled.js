import styled from "styled-components";

export const SquaresWrapper = styled.div`
  position: relative;
`;

const Square = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;

  border-radius: 3px;
  transform: rotate(-25deg);
  animation: ping 1500ms ease-out infinite;

  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
  }

  @keyframes ping {
    0% {
      transform: rotate(-25deg);
      opacity: 1;
    }

    50% {
      transform: rotate(-25deg) scale(1.5);
      opacity: 0;
    }

    100% {
      transform: rotate(-25deg);
      opacity: 1;
    }
  }
`;

export const LeftSquare = styled(Square)`
  top: -38px;
  left: 112px;
  background: ${(p) => p.theme.colors.squaresAccent};
  animation-delay: 0;

  @media (min-width: 768px) {
    top: -51px;
    left: 187px;
  }

  @media (min-width: 1440px) {
    top: -47px;
    left: 228px;
  }
`;

export const RightSquare = styled(Square)`
  position: absolute;
  top: -6px;
  right: 0;
  background: ${(p) => p.theme.colors.squaresAccent};
  animation-delay: 250ms;

  @media (min-width: 768px) {
    top: -40px;
    right: -9px;
  }

  @media (min-width: 1440px) {
    top: -34px;
    right: 72px;
  }
`;

export const CentralSquare = styled(Square)`
  width: 6px;
  height: 6px;
  top: 27px;
  right: 104px;
  background: ${(p) => p.theme.colors.squares};
  animation-delay: 500ms;

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 19px;
    right: 283px;
  }

  @media (min-width: 1440px) {
    top: 36px;
    right: 518px;
  }
`;
