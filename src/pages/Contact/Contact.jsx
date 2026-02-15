import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'mrbarand15@gmail.com',
      link: 'mailto:mrbarand15@gmail.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      label: 'Telefon',
      value: '+90 530 411 21 50',
      link: 'tel:+905304112150'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      label: 'Lokasyon',
      value: 'Mersin, Türkiye',
      link: 'https://maps.google.com/?q=Mersin,Turkey'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/Barand1500',
      username: '@Barand1500'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com/ourmayfly.us',
      username: '@ourmayfly.us'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/baran-ürüncan',
      username: 'Baran Ürüncan'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, you'd send this to your backend
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="contact-hero contact-impact">
        <div className="contact-hero-bg">
          <div className="contact-hero-gradient"></div>
          <div className="contact-hero-visual">
            <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
              <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#contactGradient)"/>
              <defs>
                <linearGradient id="contactGradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00C6FF"/>
                  <stop offset="1" stop-color="#FF6B00"/>
                </linearGradient>
              </defs>
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#fff" font-family="Inter, sans-serif">İletişim</text>
            </svg>
          </div>
        </div>
        <div className="container contact-hero-content">
          <motion.h1 
            className="contact-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Birlikte <span className="gradient">Başaralım</span>
          </motion.h1>
          <motion.p 
            className="contact-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Projeniz, fikriniz veya sadece bir merhaba için <b>hemen ulaşın</b>. <br />
            <span className="highlight">Her mesaj yeni bir yolculuğun başlangıcıdır.</span>
          </motion.p>
          <motion.div 
            className="contact-hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a href="mailto:mrbarand15@gmail.com" className="btn btn-primary btn-lg">
              <span>Mail Gönder</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="tel:+905304112150" className="btn btn-ghost btn-lg">
              <span>Telefonla Ara</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>İletişim Bilgileri</h2>
              <p>
                Aşağıdaki kanallardan bize ulaşabilir veya formu doldurarak 
                mesajınızı iletebilirsiniz.
              </p>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="contact-card"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact-card-icon">
                      {info.icon}
                    </div>
                    <div className="contact-card-content">
                      <span className="contact-card-label">{info.label}</span>
                      <span className="contact-card-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h3>Sosyal Medya</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <div className="social-image">
                        <img 
                          src={`/images/social/${social.name.toLowerCase()}.png`} 
                          alt={social.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="social-icon-fallback">{social.icon}</div>
                      </div>
                      <div className="social-info">
                        <span className="social-name">{social.name}</span>
                        <span className="social-username">{social.username}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Bize Ulaşın</h2>
                <p className="form-desc">Her türlü soru, teklif veya iş birliği için formu doldurabilirsiniz. Size en kısa sürede dönüş yapacağız!</p>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">İsim</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Bir konu seçin</option>
                    <option value="project">Proje Teklifi</option>
                    <option value="collaboration">İş Birliği</option>
                    <option value="support">Destek</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    rows="6"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`form-submit-btn ${status}`}
                  disabled={status === 'sending'}
                >
                  {status === 'idle' && (
                    <>
                      <span>Gönder</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <span>Gönderiliyor</span>
                      <div className="spinner rainbow"></div>
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <span>Gönderildi!</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p 
                    className="success-message pop"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">SSS</span>
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          </div>

          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Proje teklifi nasıl gönderebilirim?</h3>
              <p>
                Yukarıdaki formu doldurarak veya doğrudan email adresimize yazarak 
                proje detaylarınızı paylaşabilirsiniz.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Hangi teknolojilerle çalışıyorsunuz?</h3>
              <p>
                React, Node.js, Python, TypeScript ve daha fazlası. Projenizin 
                ihtiyaçlarına göre en uygun teknolojiyi seçiyoruz.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Freelance çalışıyor musunuz?</h3>
              <p>
                Evet, uygun projeler için freelance çalışmalar yapıyoruz. 
                Detaylar için iletişime geçebilirsiniz.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Ne kadar sürede dönüş yaparsınız?</h3>
              <p>
                Genellikle 24-48 saat içinde tüm mesajlara dönüş yapıyoruz. 
                Acil durumlar için telefonu tercih edebilirsiniz.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>B-Labs'a nasıl katılabilirim?</h3>
              <p>
                B-Labs açık kaynak topluluğumuza katılmak için GitHub hesabımızdan 
                projelere katkıda bulunabilir veya iletişim formu üzerinden başvurabilirsiniz.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Eğitim veya workshop veriyor musunuz?</h3>
              <p>
                Evet, React, Node.js ve modern web teknolojileri üzerine eğitimler 
                düzenliyoruz. Detaylar için sosyal medya hesaplarımızı takip edin.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Proje maliyetini nasıl belirliyorsunuz?</h3>
              <p>
                Proje karmaşıklığı, teknoloji seçimi ve süreye göre fiyat belirliyoruz. 
                Detaylı teklif için proje bilgilerinizi paylaşmanız yeterli.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>Destek ve bakım hizmetleri sunuyor musunuz?</h3>
              <p>
                Evet, geliştirdiğimiz projeler için teknik destek ve bakım 
                paketleri sunuyoruz. Sürekli güncelleme ve iyileştirme garantisi.
              </p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Uluslararası projeler kabul ediyor musunuz?</h3>
              <p>
                Kesinlikle! Türkçe ve İngilizce olarak uluslararası projeler 
                kabul ediyoruz. Zaman dilimi farkı yaşamadan çalışabiliriz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
