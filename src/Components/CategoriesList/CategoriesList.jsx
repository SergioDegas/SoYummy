import { ItemStyled, ListStyled, NavLinkStyled } from "./CategoryList.styled";

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
