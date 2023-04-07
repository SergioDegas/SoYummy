import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "Layout/Header/Header";
import Footer from "Layout/Footer";
import { LayoutStyled, PolicyWrap, StyledLink } from "./SharedLayout.styled";
import Footerrr from "Layout/Footer/Footer2";

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footerrr />
      <PolicyWrap>
      <p>© 2023 All Rights Reserved.</p>
      <StyledLink>Terms of Service</StyledLink>
      </PolicyWrap>
    </LayoutStyled>
  );
};

export default Layout;
