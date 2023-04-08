import React from "react";
import { PageTitle } from "Components/PageTitle/PageTitle";
// import SearchBar from "../../Components/SearchBar/";
// import SearchedRecipesList from "../../Components/SearchedRecipesList";
import Container  from "../../Components/Container";
// import toast, { Toaster } from "react-hot-toast";
import {
    Section,
    WrapperTitle,
} from "./SearchPage.styled";
const SearchPage = () => {
    return (
        <Container>
            <Section>
                <WrapperTitle>
                    <PageTitle>Search</PageTitle>
                </WrapperTitle>
            </Section>
            
            {/* <SearchBar /> */}
            {/* <SearchedRecipesList /> */}
        </Container>
    )
}

export default SearchPage;