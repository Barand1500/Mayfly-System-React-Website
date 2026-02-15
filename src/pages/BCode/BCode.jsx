import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BCode.css';

const BCode = () => {
  const products = [
    {
      name: 'MayFolio',
      desc: 'Modern portföy ve CV oluşturma platformu.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Active'
    },
    {
      name: 'TaskFlow',
      desc: 'Akıllı görev yönetimi ve proje takip aracı.',
      tech: ['React', 'Firebase', 'TailwindCSS'],
      status: 'Beta'
    },
    {
      name: 'DevDocs',
      desc: 'Geliştiriciler için dokümantasyon hub\'ı.',
      tech: ['Next.js', 'MDX', 'Vercel'],
      status: 'Development'
    },
    {
      name: 'APIForge',
      desc: 'REST API tasarım ve test platformu.',
      tech: ['TypeScript', 'Express', 'PostgreSQL'],
      status: 'Planning'
    }
  ];

  const showcase = [
    {
      name: 'E-Commerce Platform',
      client: 'Gizli',
      desc: 'Full-stack e-ticaret çözümü',
      image: '/showcase-1.jpg'
    },
    {
      name: 'SaaS Dashboard',
      client: 'Gizli',
      desc: 'Analitik ve raporlama paneli',
      image: '/showcase-2.jpg'
    },
    {
      name: 'Mobile App',
      client: 'Gizli',
      desc: 'Cross-platform mobil uygulama',
      image: '/showcase-3.jpg'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bcode-hero">
        <div className="bcode-hero-bg">
          <div className="bcode-hero-gradient"></div>
          <div className="bcode-hero-visual">
            <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
              <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#bcodeGradient)"/>
              <defs>
                <linearGradient id="bcodeGradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00C6FF"/>
                  <stop offset="1" stop-color="#0072FF"/>
                </linearGradient>
              </defs>
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#fff" font-family="Inter, sans-serif">B-Code</text>
            </svg>
          </div>
        </div>
        <div className="container bcode-hero-content">
          <motion.h1 
            className="bcode-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Dijital Ürünlerin <span className="gradient">Güvenli Adresi</span>
          </motion.h1>
          <motion.p 
            className="bcode-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            B-Code ile <b>kaliteli</b>, <b>güvenilir</b> ve <b>hızlı</b> yazılım çözümleri sunuyoruz. <br />
            Uygulamalarımızı <span className="highlight">demo olarak deneyebilir</span>, beğendiğinizde <span className="highlight">hemen kullanmaya başlayabilirsiniz</span>.
            <br />
            <span className="cta-strong">Hayalinizdeki projeyi B-Code ile gerçeğe dönüştürün!</span>
          </motion.p>
          <motion.div 
            className="bcode-hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Demo Talep Et</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/b-code" className="btn btn-ghost btn-lg">
              <span>Ürünleri İncele</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Ürünler</span>
            <h2 className="section-title">Geliştirdiğimiz Projeler</h2>
            <p className="section-desc center">
              B-Code çatısı altında geliştirilen profesyonel ürünler.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="product-header">
                  <h3>{product.name}</h3>
                  <span className={`product-status ${product.status.toLowerCase()}`}>
                    {product.status}
                  </span>
                </div>
                <p>{product.desc}</p>
                <div className="product-tech">
                  {product.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="code-preview-section">
            <motion.div 
              className="code-preview-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Kalite</span>
              <h2 className="section-title text-left">Temiz Kod, Yüksek Performans</h2>
              <p className="section-desc">
                Her projede modern best practice'leri uyguluyoruz. Clean code, 
                test coverage ve documentation standartlarımız.
              </p>
              <ul className="quality-list">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>TypeScript first approach</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>%90+ Test coverage</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>CI/CD pipeline</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Comprehensive documentation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="code-preview"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="code-filename">app.tsx</span>
                </div>
                <pre className="code-content">
                  <code>{`import { MayflySystems } from '@bcode/core';

const app = new MayflySystems({
  name: 'YourProject',
  version: '1.0.0',
  features: {
    analytics: true,
    darkMode: true,
    i18n: ['tr', 'en']
  }
});

app.build();
// ✓ Production ready`}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Vitrin</span>
            <h2 className="section-title">From B-Code</h2>
            <p className="section-desc center">
              Müşterilerimiz için geliştirdiğimiz seçkin projeler.
            </p>
          </div>

          <div className="showcase-grid">
            {showcase.map((item, index) => (
              <motion.div 
                key={index}
                className="showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="showcase-image">
                  <div className="showcase-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                </div>
                <div className="showcase-info">
                  <span className="showcase-client">{item.client}</span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta bg-secondary">
        <div className="container">
          <motion.div 
            className="cta-content bcode-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cta-bg">
              <div className="cta-gradient bcode-glow"></div>
            </div>
            <h2 className="cta-title">Projenizi Hayata Geçirelim</h2>
            <p className="cta-desc">
              Profesyonel yazılım çözümleri için bizimle çalışın. 
              Kalite, güvenilirlik ve zamanında teslimat garantisi.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Proje Başlat</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/b-labs" className="btn btn-ghost btn-lg">
                <span>B-Labs'ı Keşfet</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BCode;
