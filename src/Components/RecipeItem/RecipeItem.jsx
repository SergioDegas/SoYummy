// import { useDispatch } from "react-redux;

import { 
	DscrInstrWrp, 
	RecipeInfoWrp,  
	RecipeTitle, 
	RecipeBtnDelete, 
	RecipeInstr,
	RecipeSeeLink, 
	RecipeTime, 
	TitleWrp, 
	TimeSeeWrapp,
	// RecipeDescr,
} from "./RecipeItem.styled";
import { Picture } from "Components/Picture/Picture";
// import img from "../../images/file-input-mob.png"
import { RiDeleteBinLine} from 'react-icons/ri';


// {recipe}
export const RecipeItem = () => {
// const dispatch = useDispatch();

// const deleteRicipeHandler = () =>{
// 	dispatch(deleteRicipe(id));
// };


	return(
		<>
			<Picture img="https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg"/>
		<RecipeInfoWrp>
			<TitleWrp>
				<RecipeTitle>New Yourk Checake</RecipeTitle>
				<RecipeBtnDelete type="button">
					<RiDeleteBinLine size={20}/>
				</RecipeBtnDelete>
			</TitleWrp>
			<DscrInstrWrp>
				<RecipeInstr>A delicious tart made with almond cream and fresh apples</RecipeInstr>
				{/* <RecipeDescr>A delicious tart made with almond cream and fresh apples</RecipeDescr> */}
			</DscrInstrWrp>
			<TimeSeeWrapp>
				<RecipeTime>20 min</RecipeTime>
				<RecipeSeeLink to="/recipe/:recipeId" >See reecipe</RecipeSeeLink>
			</TimeSeeWrapp>
		</RecipeInfoWrp>
		</>		
	)
}