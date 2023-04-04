import { useLocation } from "react-router";

import { RecipeCard } from "Components/RecipeCard/RecipeCard";
import { ItemStyled, ListStyled } from "./RecipesCategoryList.styled";
import { Link } from "react-router-dom";

export const RecipesCategoryList = ({ recipes }) => {
    const location = useLocation();

    return (
        <ListStyled>
            {recipes.map((recipe) => {
                return (
                    <ItemStyled key={recipe._id}>
                        <Link
                            to={`/recipe/${recipe._id}`}
                            state={{ from: location }}
                        >
                            <RecipeCard recipe={recipe} />
                        </Link>
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};
