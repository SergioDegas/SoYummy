import React from "react";
import {
    PictureThumb,
    PictureTitle,
    RecipePicture,
    Wrapper,
} from "./SearchRecipePage.styled";

import notFound from "../../../images/picture-not-found_300 .jpg";

const SearchRecipePage = ({ recipe }) => {
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

export default SearchRecipePage;