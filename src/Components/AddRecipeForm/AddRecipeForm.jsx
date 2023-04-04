import React from "react";
import { useState, useMemo, useCallback } from "react";
import { nanoid } from "nanoid";
// import debounce from "lodash.debounce";
// import throttle from "lodash.throttle";
import { RecipeDescrFields } from "./RecipeDescrFields/RecipeDescrFields";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";
import { AddRecipeSection, Form, AddButton } from "./AddRecipeForm.styled";

export const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState(
    JSON.parse(localStorage.getItem("ingredients")) || [
      { id: nanoid(), unitValue: "tbs", unitNumber: "", ingredient: "" },
    ]
  );
  const [image, setImage] = useState("");
  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [description, setDescription] = useState(
    localStorage.getItem("description") || ""
  );
  const [cookingTime, setCookingTime] = useState(
    localStorage.getItem("time") || "30 min"
  );
  const [category, setCategory] = useState(
    localStorage.getItem("category") || "Breakfast"
  );
  const [preparation, setPreparation] = useState([]);

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

  const setLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };

  const onTitleChange = (value) => {
    setTitle(value);
    setLocalStorage("title", value);
  };

  // const onTitleChange = useMemo(() => throttle(changeTitleHandler, 300), []);

  const onDescriptionChange = (value) => {
    setDescription(value);
    setLocalStorage("description", value);
  };

  // const onDescriptionChange = useMemo(
  //   () => debounce(changeDescrHandler, 300),
  //   []
  // );

  const onTimeSet = (value) => {
    setCookingTime(value);
    setLocalStorage("time", value);
  };

  const onCategorySet = (value) => {
    setCategory(value);
    setLocalStorage("category", value);
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
    setLocalStorage("ingredients", JSON.stringify(ingredients));
  };

  const onPreparationSet = (data) => {
    setPreparation(data);
  };

  console.log(preparation);

  return (
    <AddRecipeSection>
      <Form>
        <RecipeDescrFields
          image={image}
          title={title}
          description={description}
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
        <RecipePreparation
          onPreparationSet={onPreparationSet}
          preparation={preparation}
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
    </AddRecipeSection>
  );
};
