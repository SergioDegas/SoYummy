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
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Breakfast");
    const [time, setTime] = useState("30 min");
    const [ingredients, setIngredients] = useState([
        { id: nanoid(), unitValue: "tbs", unitNumber: "", name: "" },
    ]);
    const [instructions, setInstructions] = useState("");

    // validation errors
    const [errors, setErrors] = useState({});
    const updateErrors = (value) => {
        setErrors((prevState) => ({ ...prevState, [value]: "" }));
    };
    //

    const onInputImageSet = (event) => {
        setImageURL(event.target.files[0]);
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
        setTime(value);
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
        setInstructions(data);
        updateErrors("preparation");
    };

    // validation
    const initialValues = {
        imageURL,
        title,
        description,
        time,
        category,
        ingredients,
        instructions,
    };

    // submit data
    const navigate = useNavigate();

    const formData = new FormData();
    formData.append("image", imageURL);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("time", time);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("instructions", instructions);

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
                    title={title}
                    description={description}
                    time={time}
                    category={category}
                    onInputImageSet={onInputImageSet}
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
                    instructions={instructions}
                    errors={errors}
                />
                <AddButton type="submit">Add</AddButton>
            </Form>
        </AddRecipeSection>
    );
};
