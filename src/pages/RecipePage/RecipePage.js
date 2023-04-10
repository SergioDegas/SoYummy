import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getRecipeById } from "api";
import RecipePageHero from "Components/RecipePageHero";
import RecipeIngredientsList from "Components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "Components/RecipePreparation/RecipePreparation";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      try {
        const { recipe } = await getRecipeById(recipeId);
        if (!recipe) {
          return;
        }
        setRecipe(recipe);
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
  } = recipe;
  
  return (
    <>
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        id={_id}
      />
      <RecipeIngredientsList ingredients={ingredients} />
      <RecipePreparation description={instructions} foto={thumb} />
      <Toaster />
    </>
  );
};

export default RecipePage;