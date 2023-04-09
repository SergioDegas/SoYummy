import { NavLink } from "react-router-dom";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import {
  ButtonClose,
  DropContainer,
  FrameLogoAndButtonClose,
  FrameSwitcher,
  ImageModal,
  Link,
  LogoContainer,
  LogoIcon,
  NavigationContainer,
  NavLinksContainer,
  SearchIcon,
} from "./DropDownMenu.styled";

export const DropDownMenu = ({ onClose }) => {
  return (
    <>
      <DropContainer>
        <FrameLogoAndButtonClose>
          <NavLink to="/" onClick={onClose}>
            <LogoContainer>
              <LogoIcon />
            </LogoContainer>
          </NavLink>
          <ButtonClose onClick={onClose} />
        </FrameLogoAndButtonClose>

        <NavigationContainer>
          <NavLinksContainer>
            <li>
              <Link onClick={onClose} to="/categories/Beef">
                Categories
              </Link>
            </li>
            <li>
              <Link onClick={onClose} to="/add">
                Add Recipe
              </Link>
            </li>
            <li>
              <Link onClick={onClose} to="/my">
                My Recipes
              </Link>
            </li>
            <li>
              <Link onClick={onClose} to="/favorite">
                Favorites
              </Link>
            </li>
            <li>
              <Link onClick={onClose} to="/shopping-list">
                Shopping List
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                to={{
                  pathname: "/SearchPage",
                  search: "?type=query",
                }}
              >
                <SearchIcon /> Search
              </Link>
            </li>
          </NavLinksContainer>
        </NavigationContainer>
        <FrameSwitcher>
          <SwitchToggle />
        </FrameSwitcher>

        <ImageModal></ImageModal>
      </DropContainer>
    </>
  );
};
