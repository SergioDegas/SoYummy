import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularRecipes } from "../../redux/popular-recipes/selectors";
import { fetchPopularRecipes } from "../../redux/popular-recipes/operation";

import {
  Title,
  PopularList,
  PopularItem,
  PopularImage,
  PopularSubtitle,
  PopularText,
  NotFound,
} from "./PopularPreview.styled";
import recipePhoto from "../../images/recipe-photo-small.png";

export const PopularRecipes = () => {
  const dispatch = useDispatch();
  const popularRecipes = useSelector(getPopularRecipes);

  useEffect(() => {
    dispatch(fetchPopularRecipes());
  }, [dispatch]);

  return (
    <div>
      <Title>Popular recipe</Title>
      {popularRecipes.length > 0 ? (
        <PopularList>
          {popularRecipes.map(recipe =>  <PopularItem to={`/recipe/${recipe._id}`} key={recipe._id}>
            <PopularImage src={recipe.preview || recipePhoto} alt="dish" />
            <div>
              <PopularSubtitle>{recipe.title}</PopularSubtitle>
              <PopularText>
              {recipe.instructions}
              </PopularText>
            </div>
          </PopularItem>)}
         
        </PopularList>
      ) : (
        <NotFound>No popular recipes yet</NotFound>
      )}
    </div>
  );
};
