import {
    PictureThumb,
    PictureTitle,
    PictureTitleWrap,
    RecipePicture,
} from "./RecipeCard.styled";

export const RecipeCard = ({ recipe }) => {
    const { thumb, title } = recipe;

    return (
        <PictureThumb>
            <RecipePicture src={thumb} alt={title} />
            <PictureTitleWrap>
                <PictureTitle>{title}</PictureTitle>
            </PictureTitleWrap>
        </PictureThumb>
    );
};
