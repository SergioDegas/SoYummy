import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import RecipePageHero from "Components/RecipePageHero";

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
          return; //якщо айді не правильний чи не передали
        }
        setRecipe(result);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        // toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getRecipe();
  }, [recipeId]);

  const { title, description, favorites, time } = recipe;
  // const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      {/* <Link to={backLinkHref}>Go back</Link> */}
      <RecipePageHero title={title} description={description} favorites={favorites} time={time} />
    </>
  );
};

export default RecipePage;
