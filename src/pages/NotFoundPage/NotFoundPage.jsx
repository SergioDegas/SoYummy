import Container from "Components/Container/Container.styled";
import { ErrorPicture } from "Components/ErrorPicture/ErrorPicture";

import notFoundImage from "../../images/error/404-not-found.svg";
import { ErrorMessage } from "Components/ErrorMessage/ErrorMessage";
import { Section } from "pages/FavoritesPage/FavoritesPage.styled";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";

const NotFoundPage = () => {
    return (
        <Container>
            <Section>
                <StyledSquares />
                <ErrorPicture image={notFoundImage} />
                <ErrorMessage />
            </Section>
        </Container>
    );
};

export default NotFoundPage;
