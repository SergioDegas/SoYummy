import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "Layout/Header/Header";
import Footer from "Layout/Footer/Footer";
import { useAuth } from "hooks";
import { ContentWrapper, LayoutStyled } from "./SharedLayout.styled";

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <LayoutStyled>
      {isLoggedIn && <Header />}
      <ContentWrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ContentWrapper>
      {isLoggedIn && <Footer />}
    </LayoutStyled>
  );
};

export default SharedLayout;
