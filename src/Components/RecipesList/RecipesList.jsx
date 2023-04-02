import { RecipeList, RecipeCard } from "./RecipeList.styled";
import { RecipeItem } from "Components/RecipeItem/RecipeItem";

export const RecipesList = () => {
	return (
		<RecipeList>
			<RecipeCard>
			<RecipeItem/>
			</RecipeCard>
			<RecipeCard>
			<RecipeItem/>
			</RecipeCard>
		</RecipeList>
	)
}