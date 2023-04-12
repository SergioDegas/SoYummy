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
import notFound from "../../images/picture-not-found_300 .jpg";

export const RecipeItem = ({ recipe, page, onDelete }) => {
    const { _id, thumb, title, description, time } = recipe;

    const splitDescription = description.split("\n");

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

    const timeConvert = (time) => {
        const cookingTime = parseInt(time);
        const hours = Math.floor(cookingTime / 60);
        const minutes = cookingTime - hours * 60;

        const timeLabel = hours > 1 ? "hours" : "hour";

        if (hours && !minutes) {
            return `${hours} ${timeLabel}`;
        }

        if (hours && minutes) {
            return `${hours} ${timeLabel} ${minutes} min`;
        }

        return `${time}`;
    };

    return (
        <Item>
            <Picture src={thumb ? thumb : notFound} alt={title} />
            <Wrapper>
                <div>
                    <Title>{title}</Title>
                    <div>
                        {media.isMobileScreen ? (
                            <Text>{description}</Text>
                        ) : (
                            splitDescription.map((elem, index) => {
                                return <Text key={index}>{elem}</Text>;
                            })
                        )}
                    </div>
                </div>
                <Text>{timeConvert(time)}</Text>
            </Wrapper>

            {page === "favorite" && (
                <DeleteButtonFav type="button" onClick={() => onDelete(_id)}>
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
                    <DeleteButtonMy type="button" onClick={() => onDelete(_id)}>
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
