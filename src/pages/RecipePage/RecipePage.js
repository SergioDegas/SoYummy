import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getRecipeById } from "api";
import RecipePageHero from "Components/RecipePageHero";
import RecipeIngredientsList from "Components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "Components/RecipePreparation/RecipePreparation";

//TO DO
//додати лоадер

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      try {
        // setIsLoading(true);
        const { recipe } = await getRecipeById(recipeId);
        // const resipeResult = recipe[0];
        if (!recipe) {
          return; //якщо айді не правильний чи не передали
        }
        setRecipe(recipe);
        // setIsLoading(false);
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
    favorites,
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
        favorites={favorites}
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
