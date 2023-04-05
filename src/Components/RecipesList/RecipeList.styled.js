import styled from "styled-components";

export const RecipeList = styled.ul`
display: flex;
width: 343px;
flex-wrap: wrap;
flex-direction: column;
gap: 18px;
margin-top: 50px;

@media (min-width: 768px) {
	width: 704px;
	margin-top: 100px;
	gap: 40px;
}

@media (min-width: 1440px) {
	width: 1240px;
}
`
export const RecipeCard = styled.li`
display: flex;
width: 100%;
background-color: ${p => p.theme.colors.mainLight};
border-radius: ${p => p.theme.radius.regular};
padding: ${p => p.theme.space[3]-2}px ${p => p.theme.space[2]+1}px;

@media (min-width: 768px) {
	padding: ${p => p.theme.space[2]*3}px ${p => p.theme.space[1]*7}px;
}
`

