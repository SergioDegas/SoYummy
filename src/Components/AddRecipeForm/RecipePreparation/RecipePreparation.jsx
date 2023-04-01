import { FormSubtitle, RecipeText } from "./RecipePreparation.styled";

export const RecipePreparation = () => {
  return (
    <>
      <FormSubtitle>Recipe Preparation</FormSubtitle>
      <RecipeText
        name="recipe"
        id="recipe"
        placeholder="Enter recipe"
      ></RecipeText>
    </>
  );
};
