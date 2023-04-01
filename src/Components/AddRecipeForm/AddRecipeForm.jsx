import React from "react";
// import { useFormik } from 'formik';
import { RecipeDescrFields } from "./RecipeDescrFields/RecipeDescrFields";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";
import { AddRecipeSection, Form, AddButton } from "./AddRecipeForm.styled";

export const AddRecipeForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     photo: '',
  //     title: '',
  //     about: '',
  //     category: '',
  //     time: '',
  //     ingredients: [],
  //     recipe: [],
  //   },

  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <AddRecipeSection>
      <Form>
        <RecipeDescrFields />
        <RecipeIngredients />
        <RecipePreparation />
        <AddButton type="submit">Add</AddButton>
      </Form>
    </AddRecipeSection>
  );
};
