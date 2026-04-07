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
  return (
    <>
      <section className="section contact-modern">
        <div className="container">
          <div className="contact-modern-wrapper">
            <motion.div 
              className="contact-modern-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-modern-card">
                <h2>İletişim</h2>
                <div className="contact-modern-list">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.link}
                      className="contact-modern-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="contact-modern-icon">{info.icon}</span>
                      <span className="contact-modern-label">{info.label}:</span>
                      <span className="contact-modern-value">{info.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
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
