import { RecipeItem } from "Components/RecipeItem/RecipeItem";
import { List } from "./RecipeList.styled";

export const RecipesList = ({ recipes, page, onDelete }) => {
    return (
        <List>
            {recipes.map((recipe) => {
                return (
                    <RecipeItem
                        key={recipe._id}
                        recipe={recipe}
                        page={page}
                        onDelete={onDelete}
                    />
                );
            })}
        </List>
    );
};
