import Container from "Components/Container/Container.styled";
import { ErrorPicture } from "Components/ErrorPicture/ErrorPicture";

import notFoundImage from "../../images/error/404-not-found.svg";
import { ErrorMessage } from "Components/ErrorMessage/ErrorMessage";

const NotFoundPage = () => {
    return (
        <Container>
            <ErrorPicture image={notFoundImage} />
            <ErrorMessage />
        </Container>
    );
};

export default NotFoundPage;
