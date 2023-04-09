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
          <PopularItem to="/">
            {/* По кліку на посилання потрібно переадресувати на сторінку 
            з описом відповідного рецепту RecipePage" */}
            <PopularImage src={recipePhoto} alt="dish" />
            <div>
              <PopularSubtitle>Banana Pancakes</PopularSubtitle>
              <PopularText>
                In a bowl, mash the banana with a fork until it resembles a
                thick purée...
              </PopularText>
            </div>
          </PopularItem>
          <PopularItem to="/">
            <PopularImage src={recipePhoto} alt="dish" />
            <div>
              <PopularSubtitle>Banana Pancakes</PopularSubtitle>
              <PopularText>
                In a bowl, mash the banana with a fork until it resembles a
                thick purée...
              </PopularText>
            </div>
          </PopularItem>
        </PopularList>
      ) : (
        <NotFound>No popular recipes yet</NotFound>
      )}
    </div>
  );
};
