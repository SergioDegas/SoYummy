import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, removeRecipe } from "redux/recipes/operation";
import { getRecipes, isError } from "redux/recipes/selectors";
import Container from "Components/Container/Container.styled";
import { Wrapper, Section } from "pages/FavoritesPage/FavoritesPage.styled";
import { RecipesList } from "Components/RecipesList/RecipesList";
import { PageTitle } from "Components/PageTitle/PageTitle";

const MyRecipesPage = () => {
    // const recipes = useSelector(getRecipes);
    const recipes = [
        {
            _id: "1",
            title: "Mediterranean Pasta Salad",
            description:
                "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.\nA salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
            thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
            time: "27",
        },
        {
            _id: "2",
            title: "Mediterranean Pasta Salad",
            description:
                "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
            thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
            time: "27",
        },
        {
            _id: "3",
            title: "Mediterranean Pasta Salad",
            description:
                "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
            thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
            time: "27",
        },
    ]

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchRecipes())
    }, [dispatch]);

    const removeOwnRecipe =(id) => {
        dispatch(removeRecipe(id))
    };

    return (
        <main>
        <Container>
            <Section>
            <Wrapper>
            <PageTitle>My recipes</PageTitle>
            </Wrapper>
            {recipes &&  (
                <RecipesList recipes={recipes} page="my" onDeleteOwnRecipe={removeOwnRecipe}/>
            )}
            
            </Section>
        </Container>
        </main>
    );
};

export default MyRecipesPage;
