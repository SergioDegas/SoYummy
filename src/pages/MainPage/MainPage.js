import { PreviewCategories } from "Components/PreviewCategories/PreviewCategories";
import Hero from "Components/HeroMainPage/Hero"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesBySet } from "redux/categories/operations";
import {
    selectError,
    selectIsLoading,
    selectRecipesSet,
} from "redux/categories/selectors";

const MainPage = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipesSet);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchRecipesBySet(1));
    }, [dispatch]);

    return (
        <>
            <div>MainPage</div>
            <Hero/>
            {recipes.length > 0 && !isLoading && !error && (
                <PreviewCategories recipes={recipes} />
            )}
        </>
    );
};

export default MainPage;
