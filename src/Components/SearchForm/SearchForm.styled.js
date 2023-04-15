import styled from "styled-components";


export const SearchSection = styled.div`
display: flex;
align-items: center;

`

export const SearchLabel = styled.label`
position: relative;
`

export const SearchedForm = styled.form`
display: flex;
justify-content: center;
flex-wrap: wrap;

`

export const SearchInput = styled.input`
width: 295px;
height: 52px;
position: relative;
background: #FAFAFA;
border: 1px solid #F0F0F0;
border-radius: 15px 50px;
padding-top: 17px;
padding-right: 113px;
padding-bottom: 17px;
padding-left: 32px;
margin-bottom: 28px;
::placeholder {
    color: #BDBDBD;
  }
  &:not(:placeholder-shown) {
    color: #BDBDBD;
  }
  @media (min-width: 768px) {
    width: 362px;
    height: 57px;
    }
    @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
    }
`
export const SearchBtn = styled.button`
position: absolute;
right: 0;
width:113px; 
background-color: #ccc;
border: none;
border-radius: 0 5px 5px 0;
cursor: pointer;
color: #fff;
font-weight: bold;
background: #22252A;
height:51px;
border-radius: 15px 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FAFAFA;
&:hover {
    background-color: #8BAA36;
}
@media (min-width: 768px) {
    width: 161px;
    height: 57px;
    top: 0;
    left: 56%;
    bottom: 0;
    }
    @media (min-width: 1440px) {
    width: 161px;
    height: 70px;
    top: 0;
    left: 69%;
    bottom: 0;
    }
`