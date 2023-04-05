import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import RecipePageHero from "Components/RecipePageHero";
import RecipeIngredientsList from "Components/RecipeIngredientsList";
import RecipePreparation from "Components/RecipePreparation";

//TO DO
//додати лоадер
//кнопка go back?
//якщо айді не правильний чи не передали доробити
//додати дефолтні значення і заглушки

const token = localStorage.getItem("token");
const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
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
        const { recipe } = await getRecipeById(recipeId);
        const resipeResult = recipe[0];
        if (!resipeResult) {
          return; //якщо айді не правильний чи не передали
        }
        setRecipe(resipeResult);
        // setIsLoading(false);
      } catch (error) {
        toast.error("Oops! Something went wrong! Please try again.");
      }
    }
    getRecipe();
  }, [recipeId]);

  const {
    title,
    description,
    favorites,
    time,
    instructions,
    thumb,
    ingredients,
  } = recipe;
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
      <RecipeIngredientsList ingredients={ingredients} />
      <RecipePreparation description={instructions} foto={thumb} />
      <Toaster />
    </>
  );
};

export default RecipePage;
