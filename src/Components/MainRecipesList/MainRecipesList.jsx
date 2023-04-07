import { useLocation } from "react-router";

import { MainRecipeCard } from "Components/MainRecipeCard/MainRecipeCard";
import { ItemStyled, ListStyled } from "./MainRecipesList.styled";
import { Link } from "react-router-dom";

export const MainRecipesList = ({ recipes }) => {
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
                            <MainRecipeCard recipe={recipe} />
                        </Link>
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};
