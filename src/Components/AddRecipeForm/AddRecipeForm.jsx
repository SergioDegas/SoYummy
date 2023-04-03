import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { RecipeDescrFields } from "./RecipeDescrFields/RecipeDescrFields";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";
import { AddRecipeSection, Form, AddButton } from "./AddRecipeForm.styled";

export const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), unitValue: "tbs", unitNumber: "", ingredient: "" },
  ]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("30 min");
  const [category, setCategory] = useState("Breakfast");

  const onFileInputChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      const buffer = event.target.result;
      const blob = new Blob([buffer], { type: file.type });
      const url = URL.createObjectURL(blob);
      setImage(url);
    });

    reader.readAsArrayBuffer(file);
  };

  const onTitleChange = (value) => {
    setTitle(value);
  };

  const onDescriptionChange = (value) => {
    setDescription(value);
  };

  const onTimeSet = (value) => {
    setCookingTime(value);
  };

  const onCategorySet = (value) => {
    setCategory(value);
  };

  const incrementIngrList = () => {
    setIngredients((prevState) => [
      ...prevState,
      { id: nanoid(), unitValue: "tbs", unitNumber: "", ingredient: "" },
    ]);
  };

  const decrementIngrList = () => {
    const lastItem = ingredients[ingredients.length - 1];
    setIngredients((prevState) =>
      prevState.filter((item) => {
        return item.id !== lastItem.id;
      })
    );
  };

  const deleteIngr = (itemId) => {
    setIngredients(ingredients.filter((item) => item.id !== itemId));
  };

  const updateIngr = (index, unit, value) => {
    setIngredients((prevState) => {
      const newState = [...prevState];
      newState[index][unit] = value;
      return newState;
    });
  };

  return (
    <AddRecipeSection>
      <Form>
        <RecipeDescrFields
          image={image}
          time={cookingTime}
          category={category}
          onFileInputChange={onFileInputChange}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onTimeSet={onTimeSet}
          onCategorySet={onCategorySet}
        />
        <RecipeIngredients
          ingredients={ingredients}
          incrementIngrList={incrementIngrList}
          decrementIngrList={decrementIngrList}
          deleteIngr={deleteIngr}
          updateIngr={updateIngr}
        />
        <RecipePreparation />
        <AddButton type="submit">Add</AddButton>
      </Form>
    </AddRecipeSection>
  );
};
