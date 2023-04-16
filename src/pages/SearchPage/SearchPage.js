import React, { useState, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PageTitle } from "Components/PageTitle/PageTitle";
import SearchBar from "../../Components/SearchBar/";
import SearchedRecipesList from "../../Components/SearchedRecipesList";
import SearchPagination from "../../Components/SearchPagination";
import { useMedia } from "hooks";

import Container from "../../Components/Container";
import Loader from "Components/Loader/Loader";
import { searchRecipes } from "../../redux/search/operation";
import {
    selectRecipes,
    selectSearchStatus,
    selectSearchError,
    selectTotalPage,
} from "../../redux/search/selectors";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";



import { NoRecipesImage, NoRecipesText, WrapperPagination } from "./SearchPage.styled";
import { Section, WrapperTitle } from "../CategoriesPage/CategoriesPage.styled";




import smallNoRecipesImage from "../../images/notPage/notPageSmal.png";
import smallNoRecipesImage2x from "../../images/notPage/notPageSmal@2x.png";
import mediumNoRecipesImage from "../../images/notPage/notPageMedium.png";
import mediumNoRecipesImage2x from "../../images/notPage/notPageMedium@2x.png";




const SearchPage = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState("name")
    const recipes = useSelector(selectRecipes);
    const totalPage = useSelector(selectTotalPage);
    const isLoading = useSelector(selectSearchStatus);
    const error = useSelector(selectSearchError);
    const media = useMedia();

    const pageChangeHandler = (newPage) => {
        const limit = () => {
            if (media.isMobileScreen) {
                return 6;
            }
            if (media.isTabletScreen) {
                return 6;
            }
            if (media.isDesktopScreen) {
                return 12;
            }
        };
        const searchTerm = JSON.parse(localStorage.getItem('searchTerm'));
        const searchBy = JSON.parse(localStorage.getItem('searchBy'));
        setPage(newPage);
        setLimit(limit());
        setSearchBy();
        dispatch(searchRecipes({  searchTerm: searchTerm, page: newPage, limit: limit(), searchBy: searchBy }));
        
      };

    const smallImage = {
        src: smallNoRecipesImage,
        srcSet: `${smallNoRecipesImage} 1x, ${smallNoRecipesImage2x} 2x`,
        sizes: `
        (max-width: 767px) 100vw,
        (min-width: 768px) and (max-width: 1023px) 50vw,
        (min-width: 1024px) 33vw
    `,
    };

    const mediumImage = {
        src: mediumNoRecipesImage,
        srcSet: `${mediumNoRecipesImage} 1x, ${mediumNoRecipesImage2x} 2x`,
        sizes: `
        (max-width: 767px) 100vw,
        (min-width: 768px) and (max-width: 1023px) 50vw,
        (min-width: 1024px) 33vw
    `,
    };

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(searchRecipes());
        setSearchTerm("")

    };

    useEffect(() => {
        if (searchTerm !== "") {
            dispatch(searchRecipes({ searchTerm, page, limit, searchBy}));
        }
    }, [dispatch, searchTerm, page, limit, searchBy]);

   

    return (
        <Container>
            <Section>
                <StyledSquares />
                <WrapperTitle>
                    <PageTitle>Search</PageTitle>
                </WrapperTitle>
                <SearchBar
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                />

                {recipes.length > 0 && !isLoading && !error && (
                <SearchedRecipesList recipes={recipes} />

                
                )}
                {totalPage > 1 && !isLoading && !error && (
                <WrapperPagination>
                    <SearchPagination
                        currentPage={page}
                        totalPages={totalPage}
                        onPageChange={(page) => pageChangeHandler(page)}
                    />
                </WrapperPagination>
                )}
                
                {isLoading && !error && <Loader />}
                {!isLoading && recipes.length === 0 && (
                    <>
                        <NoRecipesImage
                            srcSet={`${smallImage.srcSet}, ${mediumImage.srcSet}`}
                            sizes={`${smallImage.sizes}, ${mediumImage.sizes},`}
                            {...smallImage}
                            {...mediumImage}
                            alt="No recipes found"
                        />
                        <NoRecipesText>
                            Try looking for something else..
                        </NoRecipesText>
                    </>
                )}

                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </Section>
        </Container>
    );
};


export default SearchPage;
