import styled from "styled-components";

export const RecipeList = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap: 18px;
`
export const RecipeCard = styled.li`
display: flex;

background-color: ${p => p.theme.colors.mainLight};
border-radius: ${p => p.theme.radius.regular};
padding: ${p => p.theme.space[3]-2}px ${p => p.theme.space[2]+1}px;
`

