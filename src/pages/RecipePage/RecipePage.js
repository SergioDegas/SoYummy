import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getRecipeById } from "api";
import Loader from "Components/Loader/Loader";
import RecipePageHero from "Components/RecipePageHero";
import RecipeIngredientsList from "Components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "Components/RecipePreparation/RecipePreparation";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getRecipe() {
      try {
        setIsLoading(true);
        const { recipe } = await getRecipeById(recipeId);
        if (!recipe) {
          return;
        }
        setRecipe(recipe);
        setIsLoading(false);
      } catch (error) {
        toast.error("Oops! Something went wrong! Please try again.");
      }
    }
    getRecipe();
  }, [recipeId]);

  const {
    _id,
    title,
    description,
    time,
    instructions,
    thumb,
    ingredients,
    owner,
    favorites
  } = recipe;

  return (
    <>
      {isLoading && <Loader />}
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        id={_id}
        owner={owner}
        favorites={favorites}
      />
      <RecipeIngredientsList ingredients={ingredients} />
      <RecipePreparation description={instructions} foto={thumb} />
    </>
  );
};

export default RecipePage;
