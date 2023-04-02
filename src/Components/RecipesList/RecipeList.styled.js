import styled from "styled-components";

export const RecipeList = styled.ul`
display: flex;
flex-wrap: wrap;
`

export const RecipeItem = styled.li`
background-color: ${p => p.theme.colors.mainLight};
border-radius: ${p => p.theme.radii.regular};
padding: ${p => p.theme.space[3]-2}px ${p => p.theme.space[2]+1}px;
`