import { ErrorText, ErrorTitle, Wrapper } from "./ErrorMessage.styled";

export const ErrorMessage = () => {
    return (
        <Wrapper>
            <ErrorTitle>We are sorry,</ErrorTitle>
            <ErrorText>
                but the page you were looking for can’t be found.
            </ErrorText>
        </Wrapper>
    );
};
