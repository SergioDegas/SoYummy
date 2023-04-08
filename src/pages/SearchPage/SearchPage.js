import React from "react";
import { PageTitle } from "Components/PageTitle/PageTitle";
import SearchBar from "../../Components/SearchBar/";
import SearchedRecipesList from "../../Components/SearchedRecipesList";
import Container  from "../../Components/Container";
// import toast, { Toaster } from "react-hot-toast";

const SearchPage = () => {
    return (
        <Container>
            <PageTitle>Search</PageTitle>
            <SearchBar />
            <SearchedRecipesList />
        </Container>
    )
}

export default SearchPage;