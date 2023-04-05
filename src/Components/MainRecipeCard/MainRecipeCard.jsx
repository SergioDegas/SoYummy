import {
    PictureThumb,
    PictureTitle,
    RecipePicture,
    Wrapper,
} from "./MainRecipeCard.styled";

export const MainRecipeCard = ({ recipe }) => {
    const { thumb, title } = recipe;

    return (
        <PictureThumb>
            <RecipePicture src={thumb} alt={title} />
            <Wrapper>
                <PictureTitle>{title}</PictureTitle>
            </Wrapper>
        </PictureThumb>
    );
};
