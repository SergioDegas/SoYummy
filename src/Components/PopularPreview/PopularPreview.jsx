import {
  Title,
  PopularList,
  PopularItem,
  PopularImage,
  PopularSubtitle,
  PopularText,
} from "./PopularPreview.styled";
import recipePhoto from "../../images/recipe-photo-small.png";

export const Popular = () => {
  return (
    <div>
      <Title>Popular recipe</Title>
      <PopularList>
        <PopularItem to="/">
          <PopularImage src={recipePhoto} alt="dish" />
          <div>
            <PopularSubtitle>Banana Pancakes</PopularSubtitle>
            <PopularText>
              In a bowl, mash the banana with a fork until it resembles a thick
              purée...
            </PopularText>
          </div>
        </PopularItem>
        <PopularItem to="/">
          <PopularImage src={recipePhoto} alt="dish" />
          <div>
            <PopularSubtitle>Banana Pancakes</PopularSubtitle>
            <PopularText>
              In a bowl, mash the banana with a fork until it resembles a thick
              purée...
            </PopularText>
          </div>
        </PopularItem>
      </PopularList>
    </div>
  );
};
