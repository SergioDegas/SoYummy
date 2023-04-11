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
width: 510px;
height: 52px;
position: relative;
background: #FAFAFA;
border: 1px solid #F0F0F0;
border-radius: 15px 50px;
padding-top: 17px;
padding-right: 113px;
padding-bottom: 17px;
padding-left: 32px;
margin-bottom: 147px;
::placeholder {
    color: #BDBDBD;
  }
  &:not(:placeholder-shown) {
    color: #BDBDBD;
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
`