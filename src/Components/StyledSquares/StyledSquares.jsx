import {
    CentralSquare,
    LeftSquare,
    RightSquare,
    SquaresWrapper,
} from "./StyledSquares.styled";

export const StyledSquares = () => {
    return (
        <SquaresWrapper>
            <LeftSquare />
            <RightSquare />
            <CentralSquare />
        </SquaresWrapper>
    );
};
