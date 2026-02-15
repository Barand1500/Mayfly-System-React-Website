import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L4 12V28L20 36L36 28V12L20 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M20 4V20M20 20L4 12M20 20L36 12M20 20V36" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <circle cx="20" cy="20" r="4" fill="currentColor"/>
                </svg>
              </div>
              <span className="logo-text">MayflySystems</span>
            </Link>
            <p className="footer-tagline">Build. Learn. Leave a Trace.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Keşfet</h4>
              <ul>
                <li><Link to="/about">Hakkında</Link></li>
                <li><Link to="/philosophy">Felsefe</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Yapılar</h4>
              <ul>
                <li><Link to="/b-code">B-Code</Link></li>
                <li><Link to="/b-labs">B-Labs</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Topluluk</h4>
              <ul>
                <li><a href="https://github.com/Barand1500" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://instagram.com/ourmayfly.us" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com/in/baranuruncann" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} MayflySystems. Tüm hakları saklıdır.</p>
          <p className="footer-philosophy">
            <span className="mayfly-icon">◇</span>
            Bir gün bile yaşasan, iz bırak.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
