import { RecipeItem } from "Components/RecipeItem/RecipeItem";
import { List } from "./RecipeList.styled";

export const RecipesList = ({ recipes, page }) => {
    return (
        <List key={recipes._id}>
            {recipes.map((recipe) => {
                return (
                    <RecipeItem key={recipe._id} recipe={recipe} page={page} />
                );
            })}
        </List>
    );
};
