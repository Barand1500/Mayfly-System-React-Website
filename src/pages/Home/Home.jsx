import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const animatedBadgeTexts = [
  'Yeni projeler geliştiriliyor',
  'Yenilikçi fikirler hayata geçiyor',
  'Topluluk katkıları büyüyor',
  'Her gün yeni bir iz bırakılıyor',
  'B-Code ve B-Labs ile üretim hızlanıyor',
];

const Home = () => {
  const [counters, setCounters] = useState({ projects: 0, commits: 0, coffee: 0 });
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex(i => (i + 1) % animatedBadgeTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    const interval = setInterval(() => {
      setBadgeIndex(i => (i + 1) % animatedBadgeTexts.length);
    }, 2500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const animateCounters = () => {
    const targets = { projects: 50, commits: 2400, coffee: 1200 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        projects: Math.floor(targets.projects * eased),
        commits: Math.floor(targets.commits * eased),
        coffee: Math.floor(targets.coffee * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="container hero-content">
          <motion.div 
            className="hero-badge badge-animated"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            <div className="badge-marquee-outer">
              <div key={badgeIndex} className="badge-marquee-inner">
                {animatedBadgeTexts[badgeIndex]}
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Üret. Öğren.
            <br />
            <span className="gradient">İz Bırak.</span>
          </motion.h1>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MayflySystems, yazılım geliştirme, dijital üretim ve kişisel gelişim 
            alanlarında değer üreten bir çatı markadır. Her projede iz bırakmayı 
            hedefler.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/b-code" className="btn btn-primary btn-lg">
              <span>Projeleri Keşfet</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              <span>Hakkımızda</span>
            </Link>
          </motion.div>

          <motion.div 
            className="scroll-indicator scroll-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
              <div className="scroll-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6v12M6 18l6 6 6-6" />
                </svg>
              </div>
            </div>
            <span className="scroll-text">Keşfetmek için kaydır</span>
            <div className="scroll-trail">
              <div className="trail-dot"></div>
              <div className="trail-dot"></div>
              <div className="trail-dot"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Cards Section */}
      <section className="section brands">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Yapılarımız</span>
            <h2 className="section-title">İki Güçlü Yapı, Bir Vizyon</h2>
            <p className="section-desc center">
              B-Code profesyonel ürünleri, B-Labs ise deneysel projeleri ve 
              topluluk katkılarını barındırır.
            </p>
          </div>

          <div className="brand-cards">
            <motion.div 
              className="brand-card bcode"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>B-Code</h3>
              <p>Profesyonel, production-ready yazılım ürünleri. Kalite ve güvenilirlik odaklı.</p>
              <Link to="/b-code" className="brand-link">
                <span>Keşfet</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>

            <motion.div 
              className="brand-card blabs"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2"/>
                  <rect x="5" y="5" width="14" height="14" rx="2"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>B-Labs</h3>
              <p>Deneysel projeler, açık kaynak araçlar ve öğrenme günlükleri. Topluluk odaklı.</p>
              <Link to="/b-labs" className="brand-link">
                <span>Keşfet</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy bg-secondary">
        <div className="container">
          <div className="philosophy-content">
            <motion.div 
              className="philosophy-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mayfly-animation">
                <div className="mayfly-wings"></div>
                <div className="mayfly-body"></div>
                <div className="mayfly-glow"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="philosophy-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Felsefemiz</span>
              <h2 className="section-title text-left">Mayıs Sineği Yaklaşımı</h2>
              <blockquote className="philosophy-quote">
                "Bir gün bile yaşasan, iz bırak."
              </blockquote>
              <p className="section-desc">
                Mayıs sineği sadece bir gün yaşar, ama o bir günde yaşamın özünü 
                gerçekleştirir. Biz de her projede, her kod satırında kalıcı bir 
                iz bırakmayı hedefliyoruz.
              </p>
              <Link to="/philosophy" className="btn btn-ghost">
                <span>Felsefemizi Keşfet</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="stat-value">{counters.projects}+</span>
              <span className="stat-label">Tamamlanan Proje</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="stat-value">{counters.commits.toLocaleString()}+</span>
              <span className="stat-label">Commit</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="stat-value">{counters.coffee.toLocaleString()}+</span>
              <span className="stat-label">Fincan Kahve</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="stat-value">∞</span>
              <span className="stat-label">Öğrenme İsteği</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Neden Biz?</span>
            <h2 className="section-title">Değerlerimiz</h2>
          </div>

          <div className="features-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ),
                title: 'Modern Teknolojiler',
                desc: 'En güncel araçlar ve frameworkler ile geliştirme yapıyoruz.'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                ),
                title: 'Hızlı ve Kaliteli',
                desc: 'Agile metodoloji ile hızlı teslimat, yüksek kalite standartları.'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Topluluk Odaklı',
                desc: 'Açık kaynak projeler ve aktif topluluk katılımı.'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                ),
                title: 'Sürekli Öğrenme',
                desc: 'Her gün yeni bir şeyler öğrenme ve paylaşma kültürü.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cta-bg">
              <div className="cta-gradient"></div>
            </div>
            <h2 className="cta-title">Birlikte Çalışalım</h2>
            <p className="cta-desc">
              Bir projeniz mi var? Yeni fikirler mi keşfetmek istiyorsunuz? 
              Hemen iletişime geçin.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>İletişime Geç</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a 
                href="https://github.com/Barand1500" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="cta-section home-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="cta-bg">
              <div className="cta-gradient"></div>
            </div>
            <h2 className="cta-title">Hayalindeki projeyi <span className="gradient">gerçeğe dönüştür!</span></h2>
            <p className="cta-desc">
              MayflySystems ile dijital ürününü <b>hızlı</b>, <b>kaliteli</b> ve <b>güvenilir</b> şekilde hayata geçir.<br />
              Şimdi başla, <span className="highlight">ilk adımı at</span> ve <span className="highlight">iz bırak</span>.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Teklif Al</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/b-code" className="btn btn-ghost btn-lg">
                <span>B-Code Ürünlerini İncele</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
