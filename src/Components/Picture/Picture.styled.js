import styled from "styled-components";

export const ImageThumb = styled.div`
width: 124px;
height: 124px;
border-radius: ${p => p.theme.radius.regular};
overflow: hidden;
margin-right: 14px;

@media (min-width: 768px) {
	width: 228px;
	height: 232px;
	margin-right: 24px;
};

@media (min-width: 1440px) {
	width: 318px;
	height: 324px;
	margin-right: 36px;
}
`

export const StyledImg = styled.img`
display: block;
max-width: 100%;
height: auto;
width: 100%;
object-fit: cover;
`