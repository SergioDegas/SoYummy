import { MenuItem, MenuLink, MenuList } from "Layout/Footer/Footer.Styled";

export const Menu = () => {
  return (
    <>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">Ingredients</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/add">Add recipes</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/my">My recipes</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/favorite">Favorite</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/shopping-list">Shopping list</MenuLink>
        </MenuItem>
      </MenuList>
    </>
  );
};
