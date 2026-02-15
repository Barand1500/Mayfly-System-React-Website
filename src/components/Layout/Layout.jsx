import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CursorGlow from '../CursorGlow/CursorGlow';
import './Layout.css';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <div className="noise-overlay"></div>
      <CursorGlow />
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
