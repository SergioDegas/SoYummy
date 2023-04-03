import { useEffect, useState } from "react";
// useLocation, Link 
import { useParams, } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import RecipePageHero from "Components/RecipePageHero";
import RecipePreparation from "Components/RecipePreparation";

import recipies from "db/recipes.json";

//TO DO
//додати лоадер
//кнопка go back?
//cповіщення помилка
//якщо айді не правильний чи не передали доробити
//додати дефолтні значення і заглушки

const getRecipeById = (recipeId) => {
  const res = recipies.filter((recipe) => recipe._id.$oid === recipeId);
  return res;
};

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    async function getRecipe() {
      try {
        // setIsLoading(true);
        const [result] = await getRecipeById(recipeId);
        if (!result) {
          toast.error('Oops! Something went wrong! Please try again.');
          return; //якщо айді не правильний чи не передали
        }
        setRecipe(result);
        // setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getRecipe();
  }, [recipeId]);

  const { title, description, favorites, time, instructions, thumb } = recipe;
  // const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      {/* <Link to={backLinkHref}>Go back</Link> */}
      <RecipePageHero
        title={title}
        description={description}
        favorites={favorites}
        time={time}
      />
      <RecipePreparation description={instructions} foto={thumb} />
      <Toaster/>
    </>
  );
};

export default RecipePage;
