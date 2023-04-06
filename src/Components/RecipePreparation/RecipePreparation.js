import React from "react";
import RecipePreparationList from "Components/RecipePreparationList/RecipePreparationList";
import {
  StyledContainer,
  SectionPreparation,
  SectionPreparationTitle,
  TextTumb,
  ImgThumb,
  Img,
  DefaultImg,
} from "./RecipePreparation.styled";
import defaultRecipePhoto from "images/skeleton/dish-img.svg";

const RecipePreparation = ({ description, foto }) => {
  return (
    <SectionPreparation>
      <StyledContainer>
        <TextTumb>
          <SectionPreparationTitle children={"Recipe Preparation"} />
          <RecipePreparationList description={description}/>
        </TextTumb>
        <ImgThumb>
          {foto ? (
            <Img alt="Recipe foto" src={foto} />
          ) : (
            <DefaultImg alt="Recipe foto" src={defaultRecipePhoto} />
          )}
        </ImgThumb>
      </StyledContainer>
    </SectionPreparation>
  );
};

export default RecipePreparation;
