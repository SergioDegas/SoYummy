import { RecipeCard } from "Components/RecipeCard/RecipeCard";
import { ItemStyled, ListStyled } from "./RecipesCategoryList.styled";

export const RecipesCategoryList = ({ recipes }) => {
    return (
        <ListStyled>
            {recipes.map((recipe) => {
                return (
                    <ItemStyled key={recipe._id}>
                        <RecipeCard recipe={recipe} />
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};
