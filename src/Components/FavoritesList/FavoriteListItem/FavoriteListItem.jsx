import { useNavigate } from "react-router-dom";
import {
    DeleteButton,
    Item,
    MetaWrap,
    Picture,
    RecipeButton,
    Text,
    Title,
    Wrapper,
} from "./FavoriteListItem.styled";
import { RiDeleteBinLine } from "react-icons/ri";

export const FavoriteListItem = ({ recipe }) => {
    const { thumb, title, description, time } = recipe;

    const splitDescription = description.split(". ");

    const navigate = useNavigate();

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
                        {splitDescription.map((elem) => {
                            return <Text>{elem}</Text>;
                        })}
                    </div>
                </div>
                <Text>{time} min</Text>
            </Wrapper>
            <DeleteButton type="button">
                <RiDeleteBinLine size={24} />
            </DeleteButton>
            <RecipeButton type="button" onClick={handleSubmit}>
                See recipe
            </RecipeButton>
        </Item>
    );
};
