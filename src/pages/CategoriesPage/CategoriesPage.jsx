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

import Container from "Components/Container/Container.styled";
import { Section, WrapperTitle } from "./CategoriesPage.styled";

const CategoriesPage = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(selectCategoryList);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        if (!categoryList) {
            dispatch(fetchCategoryList());
        }
    }, [categoryList, dispatch]);

    return (
        <main>
            <Container>
                <Section>
                    <WrapperTitle>
                        <PageTitle>Categories</PageTitle>
                    </WrapperTitle>
                    {categoryList.length > 0 && !isLoading && !error && (
                        <CategoriesList categories={categoryList} />
                    )}

                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </Section>
            </Container>
        </main>
    );
};

export default CategoriesPage;
