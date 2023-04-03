import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import RecipePageHero from "Components/RecipePageHero";
import RecipeIngredientsList from "Components/RecipeIngredientsList";
import RecipePreparation from "Components/RecipePreparation";

import recipies from "db/recipes.json";

//TO DO
//додати лоадер
//кнопка go back?
//cповіщення помилка
//якщо айді не правильний чи не передали доробити
//додати дефолтні значення і заглушки

// const getRecipeById = (recipeId) => {
//   const res = recipies.filter((recipe) => recipe._id.$oid === recipeId);
//   return res;
// };
  const token = localStorage.getItem('token');
const getRecipeById = async (id) => {
try {
  const res = await axios.get(`http://localhost:4000/recipes/${id}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  return res;
} catch (error) {
  console.log(error.message);
}
};

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    async function getRecipe() {
      try {
        // setIsLoading(true);
        const {data:{data: {recipe}}} = await getRecipeById(recipeId);
        if (!recipe) {
          toast.error('Oops! Something went wrong! Please try again.');
          return; //якщо айді не правильний чи не передали
        }
        setRecipe(recipe);
        // setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getRecipe();
  }, [recipeId]);
// console.log(recipe);
  const { title, description, favorites, time, instructions, thumb, ingredients } = recipe;
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
      <RecipeIngredientsList ingredients={ingredients}/>
      <RecipePreparation description={instructions} foto={thumb} />
      <Toaster/>
    </>
  );
};

export default RecipePage;
