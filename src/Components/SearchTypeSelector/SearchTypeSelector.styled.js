import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-bottom: 50px;
`;

export const Label = styled.label`
padding-right: 18px;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.24px;
/* color: #001833; */
color: ${({ theme }) => `${theme.colors.titleColor}`};
`;
// titleColor: "#FAFAFA",
//     font-weight: ${(p) => p.theme.fontWeights.medium};
//     font-size: ${(p) => p.theme.fontSizes.l}px;
//     line-height: ${(p) => p.theme.lineHeights.heading};

export const SectionLabel = styled.select`
height: 49px;
width: 198px;
padding: 14px;
border: none;
background-color: #D9D9D9;

`;



