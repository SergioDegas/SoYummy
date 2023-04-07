import { useLocation } from "react-router-dom";

import { PageTitle } from "Components/PageTitle/PageTitle";
import { MainRecipesList } from "Components/MainRecipesList/MainRecipesList";

import Container from "Components/Container/Container.styled";
import {
    Button,
    StyledItem,
    StyledList,
    Wrapper,
} from "./PreviewCategories.styled";
import { useMedia } from "hooks";

export const PreviewCategories = ({ recipes }) => {
    const location = useLocation();

    const media = useMedia();
    const recipeListByMediaHandle = (recipes) => {
        if (media.isMobileScreen) {
            return recipes.slice(0, 1);
        }

        if (media.isTabletScreen) {
            return recipes.slice(0, 2);
        }
        return recipes;
    };

    return (
        <section>
            <Container>
                {recipes && (
                    <StyledList>
                        {recipes.map(({ _id, recipes }) => {
                            return (
                                <StyledItem key={_id}>
                                    <PageTitle>{_id}</PageTitle>
                                    <Wrapper>
                                        <MainRecipesList
                                            recipes={recipeListByMediaHandle(
                                                recipes
                                            )}
                                        />
                                    </Wrapper>
                                    <Button
                                        to={`/categories/${_id}`}
                                        state={{ from: location }}
                                    >
                                        See all
                                    </Button>
                                </StyledItem>
                            );
                        })}
                    </StyledList>
                )}
            </Container>
        </section>
    );
};
