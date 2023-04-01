import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "Layout/Header/Header";
import Footer from "Layout/Footer";
import Container from "./SharedLayout.styled";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};

export default Layout;