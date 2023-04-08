import {
    PictureThumb,
    PictureTitle,
    RecipePicture,
    Wrapper,
} from "./MainRecipeCard.styled";

import notFound from "../../images/picture-not-found_300 .jpg";

export const MainRecipeCard = ({ recipe }) => {
    const { thumb, title } = recipe;

    return (
        <PictureThumb>
            <RecipePicture src={thumb ? thumb : notFound} alt={title} />
            <Wrapper>
                <PictureTitle>{title}</PictureTitle>
            </Wrapper>
        </PictureThumb>
    );
};
