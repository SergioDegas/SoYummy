import {
    ItemStyled,
    ListStyled,
    NavLinkStyled,
    StyledWrapper,
} from "./CategoryList.styled";

export const CategoriesList = ({ categories }) => {
    return (
        <ListStyled>
            {categories.map((category) => {
                return (
                    <ItemStyled key={category}>
                        <NavLinkStyled to={`/categories/${category}`}>
                            {category}
                        </NavLinkStyled>
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};

export const CategoriesTitleWrapper = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};
