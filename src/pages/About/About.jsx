import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Başlangıç',
      desc: 'İlk kod satırı yazıldı, ilk proje hayata geçti. MayflySystems fikri doğdu.'
    },
    {
      year: '2024',
      title: 'B-Labs Doğuyor',
      desc: 'Deneysel projeler için B-Labs kuruldu. Açık kaynak yolculuğu başladı.'
    },
    {
      year: '2025',
      title: 'B-Code Kuruluyor',
      desc: 'Profesyonel ürünler için B-Code markası oluşturuldu.'
    },
    {
      year: '2026',
      title: 'Büyüme',
      desc: 'Topluluk büyüyor, projeler çoğalıyor. Yeni hedefler belirleniyor.'
    }
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Kalite',
      desc: 'Her projede en yüksek kalite standartlarını hedefliyoruz.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: 'Öğrenme',
      desc: 'Sürekli öğrenme ve gelişim kültürünü benimsiyoruz.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Topluluk',
      desc: 'Açık kaynak ve topluluk katkısına inanıyoruz.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: 'İz Bırakmak',
      desc: 'Her projede kalıcı ve değerli bir iz bırakmayı hedefliyoruz.'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="page-gradient about-gradient"></div>
        </div>
        <div className="container">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hakkımızda
          </motion.span>
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hikayemiz
          </motion.h1>
          <motion.p 
            className="section-desc about-story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MayflySystems, yazılım, dijital üretim ve kişisel gelişim alanlarında 
            iz bırakmayı hedefleyen bir çatı markadır.
            <br /><br />
            <span className="story-deep">
              Her şey bir mayıs sineğinin ömrü kadar kısa bir zaman diliminde, 
              bir hayalin peşinden koşmakla başladı. Biz, zamanın değerini bilen, 
              her anı üretime ve gelişime dönüştüren bir ekip olarak yola çıktık. 
              MayflySystems; bir gün bile yaşasan, iz bırak felsefesiyle, dijital 
              dünyada kalıcı değerler üretmeyi amaçlar.
              <br /><br />
              Kod yazmak bizim için sadece bir iş değil, bir iz bırakma yolculuğu. 
              Her satırda, her projede, her işbirliğinde; öğrenmeyi, paylaşmayı ve 
              topluluğu büyütmeyi öncelik edindik. B-Code ile profesyonel ürünler 
              geliştiriyor, B-Labs ile gençlere ve yazılıma yeni başlayanlara 
              rehberlik ediyoruz. Açık kaynak, topluluk katkısı ve sürekli gelişim 
              bizim DNA’mızda var.
              <br /><br />
              Bugün, onlarca projeye, yüzlerce katkıya ve binlerce satır koda 
              imza attık. Ama en büyük hedefimiz; bir kişinin bile hayatına 
              dokunmak, bir problemi çözmek ve dijital dünyada kalıcı bir iz 
              bırakmak. MayflySystems’in hikayesi, her gün yeniden yazılıyor. 
              Sen de bu hikayenin bir parçası olabilirsin.
            </span>
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Neden MayflySystems?</h2>
              <p>
                Mayıs sineği (Mayfly), doğadaki en kısa ömürlü yaratıklardan biridir. 
                Sadece bir gün yaşar. Ama o bir günde, yaşamın özünü gerçekleştirir.
              </p>
              <p>
                Bu felsefeden ilham alarak MayflySystems'i kurduk. Önemli olan ne kadar 
                yaşadığın değil, yaşadığın sürede ne yaptığın. Her projede, her kod 
                satırında iz bırakmayı hedefliyoruz.
              </p>
              <p>
                İki ana yapımız var: <strong>B-Code</strong> profesyonel ve production-ready 
                ürünleri barındırırken, <strong>B-Labs</strong> deneysel projeler, açık 
                kaynak araçlar ve öğrenme günlüklerini içeriyor.
              </p>
            </motion.div>

            <motion.div 
              className="about-cards"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mini-card bcode">
                <div className="mini-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3>B-Code</h3>
                <p>Profesyonel ürünler, production-ready çözümler.</p>
                <Link to="/b-code">Keşfet →</Link>
              </div>

              <div className="mini-card blabs">
                <div className="mini-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2"/>
                    <rect x="5" y="5" width="14" height="14" rx="2"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>B-Labs</h3>
                <p>Deneysel projeler, açık kaynak araçlar.</p>
                <Link to="/b-labs">Keşfet →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Yolculuk</span>
            <h2 className="section-title">Zaman Çizelgesi</h2>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Değerlerimiz</span>
            <h2 className="section-title">Neye İnanıyoruz?</h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Founder */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="founder-section">
            <motion.div 
              className="founder-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Kurucu</span>
              <h2>Baran Ürüncan</h2>
              <p className="founder-role">Founder & Developer</p>
              <p className="founder-desc">
                Yazılım geliştirme, dijital üretim ve sürekli öğrenme tutkusuyla 
                MayflySystems'i kurdum. Her projede iz bırakmak, değer katmak ve 
                toplulukla paylaşmak temel motivasyonum.
              </p>
              <div className="founder-socials">
                <a href="https://github.com/Barand1500" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/ourmayfly.us" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/baranuruncann" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Projelerinizi hayata geçirmek, fikirlerinizi gerçeğe dönüştürmek için 
              buradayız.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>İletişime Geç</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
