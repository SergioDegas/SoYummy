// import { useSelector } from "react-redux";
// import {selectRecipes} from """


import { RecipeList, RecipeCard } from "./RecipeList.styled";
import { RecipeItem } from "Components/RecipeItem/RecipeItem";



export const RecipesList = () => {
// const recipes = useSelector(selectRecipes)



	return (
		// recipes.map(recipe=> )

		<RecipeList>
			{/* key={recipe.id} */}

			<RecipeCard>
			{/* recipe={recipe} */}
			<RecipeItem/>
			</RecipeCard>
			<RecipeCard>
			<RecipeItem/>
			</RecipeCard>
		</RecipeList>
	)
}