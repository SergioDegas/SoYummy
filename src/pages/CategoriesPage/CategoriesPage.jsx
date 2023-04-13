import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    selectCategoryList,
    selectIsLoading,
    selectError,
} from "redux/categories/selectors";
import { fetchCategoryList } from "redux/categories/operations";

import { PageTitle } from "Components/PageTitle/PageTitle";
import { CategoriesList } from "Components/CategoriesList/CategoriesList";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";

import Container from "Components/Container/Container.styled";
import { Section, WrapperTitle } from "./CategoriesPage.styled";
import Loader from "Components/Loader/Loader";

const CategoriesPage = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(selectCategoryList);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);

    return (
        <main>
            <Container>
                <Section>
                    <StyledSquares />

                    <WrapperTitle>
                        <PageTitle>Categories</PageTitle>
                    </WrapperTitle>

                    {isLoading && !error && <Loader />}

                    {categoryList.length > 0 && !isLoading && !error && (
                        <CategoriesList categories={categoryList} />
                    )}

                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Section>
            </Container>
        </main>
    );
};

export default CategoriesPage;
