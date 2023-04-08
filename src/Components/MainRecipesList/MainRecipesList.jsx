import { useLocation } from "react-router";

import { MainRecipeCard } from "Components/MainRecipeCard/MainRecipeCard";
import { ItemStyled, LinkStyled, ListStyled } from "./MainRecipesList.styled";

export const MainRecipesList = ({ recipes }) => {
    const location = useLocation();

    return (
        <ListStyled>
            {recipes.map((recipe) => {
                return (
                    <ItemStyled key={recipe._id}>
                        <LinkStyled
                            to={`/recipe/${recipe._id}`}
                            state={{ from: location }}
                        >
                            <MainRecipeCard recipe={recipe} />
                        </LinkStyled>
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};
