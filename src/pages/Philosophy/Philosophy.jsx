import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Philosophy.css';

const Philosophy = () => {
  const principles = [
    {
      title: 'Üretim, Bekleme Değil',
      desc: 'Mükemmel anı beklemek yerine harekete geç. İlk adımı at, iterasyon yap, geliştir. Mükemmellik bir hedef değil, bir yolculuk.'
    },
    {
      title: 'Hata Yap, Öğren',
      desc: 'Hatalar başarısızlık değil, öğrenme fırsatıdır. Her hata seni bir adım daha ileri taşır. Korkmadan dene, cesurca başarısız ol.'
    },
    {
      title: 'Paylaş, Biriktirme',
      desc: 'Bilgi paylaşıldıkça çoğalır. Öğrendiklerini paylaş, başkalarının yolculuğuna katkıda bulun. Topluluk bireyden güçlüdür.'
    },
    {
      title: 'İz Bırak',
      desc: 'Her projede, her iletişimde, her üründe bir değer kat. Geçtiğin yerlerde olumlu bir iz bırak. Katkın, senin imzan olsun.'
    }
  ];

  const impacts = [
    'Bir kişiye bile yardım etmek',
    'Bir problemi çözmek',
    'Bilgini paylaşmak',
    'Başkalarına ilham vermek',
    'Kaliteli iş üretmek',
    'Olumlu bir etki yaratmak'
  ];

  return (
    <>
      {/* Hero */}
      <section className="philosophy-hero philosophy-impact">
        <div className="philosophy-hero-bg">
          <div className="philosophy-hero-gradient"></div>
          <div className="philosophy-hero-visual">
            <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
              <ellipse cx="32" cy="32" rx="28" ry="16" fill="url(#philosophyGradient)"/>
              <defs>
                <linearGradient id="philosophyGradient" x1="4" y1="32" x2="60" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF6B00"/>
                  <stop offset="1" stop-color="#00C6FF"/>
                </linearGradient>
              </defs>
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#fff" font-family="Inter, sans-serif">İz Bırak</text>
            </svg>
          </div>
        </div>
        <div className="container philosophy-hero-content">
          <motion.h1 
            className="philosophy-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Bir Gün Bile Yaşasan <span className="gradient">İz Bırak</span>
          </motion.h1>
          <motion.p 
            className="philosophy-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Mayıs sineği, ömrü kısa ama etkisi büyük bir canlıdır. Biz de <b>her anı üretime</b> ve <b>değere</b> dönüştürmek için buradayız. <br />
            <span className="highlight">Bekleme, erteleme, vazgeçme.</span> Harekete geç, dene, hata yap, öğren ve paylaş. <br />
            <span className="cta-strong">Hayat kısa, iz bırakmak sonsuz.</span>
          </motion.p>
          <motion.div 
            className="philosophy-hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link to="/b-labs" className="btn btn-primary btn-lg">
              <span>Yolculuğa Katıl</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn-ghost btn-lg">
              <span>Hikayemizi Oku</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Mayfly */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="philosophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="philosophy-highlight">
              <h2>Neden Mayıs Sineği?</h2>
              <div className="philosophy-quote">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                </svg>
                <p>
                  Mayıs sineği (Ephemeroptera), doğanın en ilginç yaratıklarından biridir. 
                  Yetişkin hali sadece bir gün — bazen sadece birkaç saat — yaşar. Ama bu 
                  kısa sürede, yaşamın özünü gerçekleştirir: uçar, çiftleşir ve yeni hayatlara 
                  kapı açar.
                </p>
              </div>
            </div>
            
            <blockquote className="philosophy-blockquote">
              "Mayıs sineğinin ömrü kısa olabilir, ama o kısa ömürde yapmadığı şey 
              yoktur. Bekleme, ertele, vazgeç — bunlar onun sözlüğünde yok."
            </blockquote>
            
            <p className="philosophy-insight">
              Bu küçük yaratık, bize zamanın değerini öğretiyor. Önemli olan ne kadar 
              yaşadığın değil, yaşadığın sürede ne yaptığın. Her anı değerlendirmek, 
              her fırsatı kullanmak ve — en önemlisi — bir iz bırakmak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">İlkeler</span>
            <h2 className="section-title">Temel Değerler</h2>
            <p className="section-desc center">
              MayflySystems'in tüm faaliyetleri bu ilkeler üzerine inşa edilmiştir. 
              Her proje, her kod satırı, her karar bu değerlerle şekillenir.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => (
              <motion.div 
                key={index}
                className="principle-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="principle-number">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="philosophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="journey-section">
              <h2>Yolculuk Anlayışı</h2>
              <div className="journey-path">
                <div className="journey-step">
                  <div className="step-icon">🚀</div>
                  <div className="step-content">
                    <h3>Başlangıç</h3>
                    <p>Her büyük yolculuk küçük bir adım ile başlar. Önemli olan mükemmel olmak değil, başlamak.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <div className="step-icon">🔄</div>
                  <div className="step-content">
                    <h3>İterasyon</h3>
                    <p>Her deneme, bir öğrenme fırsatı. Hata yap, öğren, geliştir ve tekrar dene.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <div className="step-icon">🎯</div>
                  <div className="step-content">
                    <h3>Hedef</h3>
                    <p>Sürekli iyileşme. Bugün dünden daha iyi olmak, yarın bugünden daha iyi olmak için çalışmak.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <blockquote className="philosophy-blockquote">
              "Bugün dünden daha iyiysen, doğru yoldasın. Yarın bugünden daha iyi 
              olmak için çalış. Her gün bir adım."
            </blockquote>
            
            <div className="journey-insights">
              <p>
                Bu yüzden B-Labs'ta hatalar gizlenmez, paylaşılır. Öğrenme günlükleri 
                tutulur, süreçler belgelenir. Çünkü başkalarının hatalarından öğrenmek, 
                aynı hataları tekrarlamamak demek.
              </p>
              
              <p>
                Ve B-Code'da olgunlaşan projeler, bu yolculuğun meyveleridir. Her ürün, 
                sayısız denemenin, öğrenmenin ve gelişimin sonucu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="section bg-secondary">
        <div className="container">
          <motion.div 
            className="philosophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>İz Bırakmak Ne Demek?</h2>
            <p>
              İz bırakmak, büyük bir şirket kurmak ya da milyonlara ulaşmak zorunda 
              değilsin demek. İz bırakmak:
            </p>
            
            <ul className="impact-list">
              {impacts.map((impact, index) => (
                <li key={index}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
            
            <blockquote className="dual-quote">
              "Kod geçicidir. Etki kalıcıdır."
              <span className="quote-translation">Code is temporary. Impact is not.</span>
            </blockquote>
          </motion.div>
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
            <h2 className="cta-title">Bu Felsefeyi Benimse</h2>
            <p className="cta-desc">
              Sen de mayıs sineği gibi ol. Bekle değil, üret. Kork değil, dene. 
              Ve her şeyden önemlisi — iz bırak.
            </p>
            <div className="cta-buttons">
              <Link to="/b-labs" className="btn btn-primary btn-lg">
                <span>Yolculuğa Başla</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-ghost btn-lg">
                <span>Hikayemizi Oku</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
