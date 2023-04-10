import { RecipeItem } from "Components/RecipeItem/RecipeItem";
import { List } from "./RecipeList.styled";

export const RecipesList = ({ recipes, page, onDeleteOwnRecipe }) => {
    return (
        <List key={recipes}>
            {recipes.map((recipe) => {
                return (
                    <RecipeItem key={recipe} recipe={recipe} page={page} onDeleteOwnRecipe={onDeleteOwnRecipe} />
                );
            })}
        </List>
    );
};
