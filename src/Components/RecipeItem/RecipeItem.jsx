import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

import { useMedia } from "hooks";

import {
    DeleteButtonFav,
    DeleteButtonMy,
    Item,
    Picture,
    RecipeButtonFav,
    RecipeButtonMy,
    Text,
    Title,
    Wrapper,
} from "./RecipeItem.styled";

export const RecipeItem = ({ recipe, page }) => {
    const { thumb, title, description, time } = recipe;

    const splitDescription = description.split(". ");

    const navigate = useNavigate();

    const media = useMedia();
    const iconSize = () => {
        if (media.isMobileScreen) {
            return 14;
        }
        if (media.isTabletScreen) {
            return 22;
        }
        if (media.isDesktopScreen) {
            return 24;
        }
    };

    const handleSubmit = () => {
        navigate(`/recipe/${recipe._id}`);
    };

    return (
        <Item>
            <Picture src={thumb} alt={title} />
            <Wrapper>
                <div>
                    <Title>{title}</Title>
                    <div>
                        {media.isMobileScreen ? (
                            <Text>{description}</Text>
                        ) : (
                            splitDescription.map((elem) => {
                                return <Text>{elem}</Text>;
                            })
                        )}
                    </div>
                </div>
                <Text>{time} min</Text>
            </Wrapper>
            {page === "favorite" && (
                <DeleteButtonFav type="button">
                    <RiDeleteBinLine size={iconSize()} />
                </DeleteButtonFav>
            )}

            {page === "favorite" && !media.isMobileScreen && (
                <RecipeButtonFav type="button" onClick={handleSubmit}>
                    See recipe
                </RecipeButtonFav>
            )}

            {page === "my" && (
                <>
                    <DeleteButtonMy type="button">
                        <RiDeleteBinLine size={iconSize()} />
                    </DeleteButtonMy>
                    <RecipeButtonMy type="button" onClick={handleSubmit}>
                        See recipe
                    </RecipeButtonMy>
                </>
            )}
        </Item>
    );
};
