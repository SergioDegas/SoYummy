import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../redux/recipes/operation";
import { isError } from "../../redux/recipes/selectors";
import { nanoid } from "nanoid";
import { schema } from "./schema";
import { RecipeDescrFields } from "./RecipeDescrFields/RecipeDescrFields";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";
import { AddRecipeSection, Form, AddButton } from "./AddRecipeForm.styled";

export const AddRecipeForm = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Breakfast");
    const [cookingTime, setCookingTime] = useState("30 min");
    const [ingredients, setIngredients] = useState([
        { id: nanoid(), unitValue: "tbs", unitNumber: "", name: "" },
    ]);
    const [preparation, setPreparation] = useState("");

    // validation errors
    const [errors, setErrors] = useState({});
    const updateErrors = (value) => {
        setErrors((prevState) => ({ ...prevState, [value]: "" }));
    };
    //

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
        

        // const formData = new FormData();

        // formData.append("image", event.target.files[0]);

        // const imageFile = formData.get("image");
        // const imageUrl = URL.createObjectURL(imageFile);

        // setImage(imageUrl);
    };

    const onTitleChange = (value) => {
        setTitle(value);
        updateErrors("title");
    };

    const onDescriptionChange = (value) => {
        setDescription(value);
        updateErrors("description");
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
            { id: nanoid(), unitValue: "tbs", unitNumber: "", name: "" },
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

    const onPreparationSet = (data) => {
        setPreparation(data);
        updateErrors("preparation");
    };

    // validation
    const initialValues = {
        image,
        title,
        description,
        cookingTime,
        category,
        ingredients,
        preparation,
    };

    // submit data
    const navigate = useNavigate();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("cookingTime", cookingTime);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("preparation", preparation);

    const dispatch = useDispatch();
    const error = useSelector(isError);

    const handleSubmit = (e) => {
        e.preventDefault();
        schema
            .validate(initialValues, { abortEarly: false })
            .then(() => {
                dispatch(addRecipe(formData));
                console.log(error);
                if (!error) {
                    navigate("/my", { replace: true });
                }
            })
            .catch((err) => {
                const errors = err.inner.reduce(
                    (acc, curr) => ({ ...acc, [curr.path]: curr.message }),
                    {}
                );
                setErrors(errors);
            });
    };

    return (
        <AddRecipeSection>
            <Form onSubmit={handleSubmit}>
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
                    errors={errors}
                />
                <RecipeIngredients
                    ingredients={ingredients}
                    incrementIngrList={incrementIngrList}
                    decrementIngrList={decrementIngrList}
                    deleteIngr={deleteIngr}
                    updateIngr={updateIngr}
                    errors={errors}
                    updateErrors={updateErrors}
                />

                <RecipePreparation
                    onPreparationSet={onPreparationSet}
                    preparation={preparation}
                    errors={errors}
                />
                <AddButton type="submit">Add</AddButton>
            </Form>
        </AddRecipeSection>
    );
};
