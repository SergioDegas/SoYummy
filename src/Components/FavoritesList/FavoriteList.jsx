import { List } from "./FavoriteList.styled";
import { FavoriteListItem } from "./FavoriteListItem/FavoriteListItem";

export const FavoriteList = ({ recipes }) => {
    return (
        <List>
            {recipes.map((recipe) => {
                return <FavoriteListItem key={recipe._id} recipe={recipe} />;
            })}
        </List>
    );
};
