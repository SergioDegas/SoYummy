import styled from "styled-components";

export const ImageThumb = styled.div`
width: 124px;
height: 124px;
border-radius: ${p => p.theme.radius.regular};
overflow: hidden;
margin-right: 14px;
`

export const StyledImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`