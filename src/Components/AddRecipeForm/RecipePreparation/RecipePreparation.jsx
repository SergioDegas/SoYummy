import { useState } from "react";
import { FormSubtitle, RecipeText } from "./RecipePreparation.styled";

export const RecipePreparation = ({ onPreparationSet }) => {
  const [text, setText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const trimmedText = text.trim();
      if (trimmedText !== "") {
        onPreparationSet((prevPreparation) => [
          ...prevPreparation,
          trimmedText,
        ]);
        // setText("");
      }
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <FormSubtitle>Recipe Preparation</FormSubtitle>
      <RecipeText
        name="recipe"
        id="recipe"
        placeholder="Enter recipe"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={text}
      ></RecipeText>
    </>
  );
};
