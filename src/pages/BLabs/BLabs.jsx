import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BLabs.css';

const BLabs = () => {
  const projects = [
    {
      name: 'react-mayfly-ui',
      desc: 'Modern React component library',
      stars: 245,
      forks: 42,
      language: 'TypeScript'
    },
    {
      name: 'node-quick-api',
      desc: 'Express API boilerplate with best practices',
      stars: 189,
      forks: 31,
      language: 'JavaScript'
    },
    {
      name: 'css-mayfly-kit',
      desc: 'Utility-first CSS framework',
      stars: 156,
      forks: 28,
      language: 'CSS'
    },
    {
      name: 'mayfly-cli',
      desc: 'Project scaffolding CLI tool',
      stars: 124,
      forks: 19,
      language: 'TypeScript'
    }
  ];

  const cliFeatures = [
    {
      icon: '🚀',
      title: 'Hızlı Başlangıç',
      desc: 'Saniyeler içinde yeni proje'
    },
    {
      icon: '📦',
      title: 'Hazır Şablonlar',
      desc: 'React, Next.js, Node.js'
    },
    {
      icon: '⚙️',
      title: 'Özelleştirilebilir',
      desc: 'İhtiyacına göre yapılandır'
    },
    {
      icon: '🔄',
      title: 'Auto Update',
      desc: 'Otomatik güncellemeler'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="page-gradient blabs-gradient"></div>
        </div>
        <div className="container">
          <motion.span 
            className="section-tag blabs-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            B-Labs
          </motion.span>
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dijital Laboratuvar
          </motion.h1>
          <motion.p 
            className="section-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Deneysel projeler, açık kaynak araçlar ve öğrenme günlükleri. 
            Toplulukla birlikte geliştiriyoruz.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Başvur
            </Link>
            <div className="free-info">
              <span className="free-badge">Ücretsiz</span>
              <span className="free-text">Bilgilendirme ve katılım için başvur</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section">
        <div className="container">
          <div className="quick-start">
            <motion.div 
              className="quick-start-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-tag blabs-tag">CLI</span>
              <h2 className="section-title text-left">Hızlı Başlangıç</h2>
              <p className="section-desc">
                B-Labs CLI ile saniyeler içinde yeni projeler oluşturun. 
                Modern şablonlar, best practices ve otomatik yapılandırma.
              </p>

              <div className="cli-features">
                {cliFeatures.map((feature, index) => (
                  <div key={index} className="cli-feature">
                    <span className="cli-feature-icon">{feature.icon}</span>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="terminal-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="terminal-title">Terminal</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-command">npx @blabs/cli init my-project</span>
                  </div>
                  <div className="terminal-output">
                    <p>✓ Creating project structure...</p>
                    <p>✓ Installing dependencies...</p>
                    <p>✓ Configuring TypeScript...</p>
                    <p>✓ Setting up ESLint & Prettier...</p>
                    <p className="terminal-success">🚀 Project ready! cd my-project && npm run dev</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lab Visual */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="lab-visual-section">
            <motion.div 
              className="lab-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flask">
                <div className="flask-liquid">
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                </div>
              </div>
              <div className="lab-particles">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>

            <motion.div 
              className="lab-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-tag blabs-tag">Deneyler</span>
              <h2 className="section-title text-left">Deney. Öğren. Paylaş.</h2>
              <p className="section-desc">
                B-Labs, yeni teknolojileri denediğimiz, öğrendiklerimizi 
                paylaştığımız ve toplulukla birlikte geliştirdiğimiz bir alan.
              </p>
              <ul className="lab-list">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Açık kaynak projeler</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Öğrenme günlükleri</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Topluluk katkıları</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Hatalardan öğrenme</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag blabs-tag">Open Source</span>
            <h2 className="section-title">Açık Kaynak Projeler</h2>
            <p className="section-desc center">
              Toplulukla birlikte geliştirdiğimiz ve paylaştığımız projeler.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.a 
                key={index}
                href={`https://github.com/Barand1500/${project.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-header">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="project-language" data-lang={project.language.toLowerCase()}>
                    {project.language}
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="project-stats">
                  <span className="project-stat">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                    </svg>
                    {project.stars}
                  </span>
                  <span className="project-stat">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                    </svg>
                    {project.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="github-cta">
            <a 
              href="https://github.com/Barand1500" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Tüm Projeleri Gör</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta bg-secondary">
        <div className="container">
          <motion.div 
            className="cta-content blabs-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cta-bg">
              <div className="cta-gradient blabs-glow"></div>
            </div>
            <h2 className="cta-title">Katkıda Bulunun</h2>
            <p className="cta-desc">
              Açık kaynak projelerimize katkıda bulunun. Issue açın, PR gönderin, 
              veya sadece star verin.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://github.com/Barand1500" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <span>GitHub'da Katıl</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <Link to="/b-code" className="btn btn-ghost btn-lg">
                <span>B-Code'u Keşfet</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BLabs;
