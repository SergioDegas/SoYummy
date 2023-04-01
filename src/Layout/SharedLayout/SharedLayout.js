import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'Layout/Header/Header';
import Footer from 'Layout/Footer';

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header/>
      <Suspense fallback={null}>
        <Outlet />
          </Suspense>
          <Footer/>
    </div>
  );
};

export default Layout;