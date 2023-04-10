import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'Layout/Header/Header';
import Footer from 'Layout/Footer/Footer';
import { useAuth } from 'hooks';
import { ContentWrapper, LayoutStyled } from './SharedLayout.styled';
// import { LayoutStyled, PolicyWrap, StyledLink } from './SharedLayout.styled';
const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <LayoutStyled>
      {isLoggedIn && <Header />}
      <ContentWrapper>
        <Suspense fallback={null}>
          <Outlet />
          {isLoggedIn && <Footer />}
        </Suspense>
      </ContentWrapper>
      {/*
				винести у футер
			<PolicyWrap>
      <p>© 2023 All Rights Reserved.</p>
      <StyledLink>Terms of Service</StyledLink>
      </PolicyWrap> */}
    </LayoutStyled>
  );
};

export default SharedLayout;
