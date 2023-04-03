import { RecipeInfoWrp,  RecipeTitle, RecipeBtnDelete, RecipeInstrc, RecipeSeeLink, RecipeTime, TitleWrp } from "./RecipeItem.styled";
import { Picture } from "Components/Picture/Picture";
import img from "../../images/file-input-mob.png"
import { RiDeleteBinLine} from 'react-icons/ri';

export const RecipeItem = () => {
	return(
		<>
			<Picture img={img}/>
		<RecipeInfoWrp>
			<TitleWrp>
			<RecipeTitle>New Yourk Checake</RecipeTitle>
			<RecipeBtnDelete type="button">
				<RiDeleteBinLine size={20}/>
			</RecipeBtnDelete>
			</TitleWrp>
			<RecipeInstrc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure ea eum velit omnis animi officiis ipsum tempora accusantium distinctio voluptates facilis, provident cupiditate aliquid. Beatae illo alias tempora dolor.</RecipeInstrc>
			<RecipeTime>20 min</RecipeTime>
			<RecipeSeeLink to="/recipe/:recipeId" >See reecipe</RecipeSeeLink>
		</RecipeInfoWrp>
		</>		
	)
}