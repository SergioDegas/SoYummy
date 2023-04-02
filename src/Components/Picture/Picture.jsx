import { ImageThumb, StyledImg } from "./Picture.styled";

export const Picture = ({img}) => {
	return(
		<ImageThumb>
			<StyledImg src={img} alt={img}/>
		</ImageThumb>
	)
}