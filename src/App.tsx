import './styles-react.css';

export default function App() {
  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openImageModal = (src: string) => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    if (modal && modalImage) {
      modal.classList.add('active');
      modalImage.src = src;
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1735236007245-9dc6e28bbe56?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Nail Art' },
    { url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Alongamento' },
    { url: 'https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Clássica' },
    { url: 'https://images.unsplash.com/photo-1684609365994-a144ee021c88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Gel' },
    { url: 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwcG9saXNoJTIwY29sb3JzfGVufDF8fHx8MTc2NDQxODA1OXww&ixlib=rb-4.1.0&q=80&w=1080', tag: 'Cores' },
    { url: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Decoração' }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header" id="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">✨</div>
              <span className="logo-text">Bella Nails</span>
            </div>
            <nav className="nav-desktop">
              <button onClick={() => scrollToSection('home')} className="nav-link">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="nav-link">Serviços</button>
              <button onClick={() => scrollToSection('galeria')} className="nav-link">Galeria</button>
              <button onClick={() => scrollToSection('depoimentos')} className="nav-link">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="nav-link">Contato</button>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbHN8ZW58MHx8MHx8fDA%3D)'
      }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
              </svg>
              <span>Beleza nas suas mãos</span>
            </div>
            <h1 className="hero-title">
              Unhas Perfeitas,<br />
              <span className="gradient-text">Você Radiante</span>
            </h1>
            <p className="hero-description">
              Transforme suas unhas em verdadeiras obras de arte. Atendimento personalizado, 
              produtos de alta qualidade e um cuidado especial que você merece.
            </p>
            <div className="hero-buttons">
              <button onClick={() => handleWhatsApp('Olá! Gostaria de agendar um horário para manicure.')} className="btn btn-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Agendar no WhatsApp
              </button>
              <button onClick={() => scrollToSection('galeria')} className="btn btn-secondary">
                Ver Galeria
              </button>
            </div>
            <div className="social-proof">
              <div className="proof-item">
                <div className="proof-number">500+</div>
                <div className="proof-label">Clientes Satisfeitas</div>
              </div>
              <div className="proof-divider"></div>
              <div className="proof-item">
                <div className="proof-number">5 Anos</div>
                <div className="proof-label">de Experiência</div>
              </div>
              <div className="proof-divider"></div>
              <div className="proof-item">
                <div className="proof-stars">★★★★★</div>
                <div className="proof-label">Avaliação 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nossos Serviços</span>
            <h2 className="section-title">Tudo que Você Precisa<br />para Unhas Perfeitas</h2>
            <p className="section-description">
              Oferecemos uma variedade de serviços premium para deixar suas unhas sempre impecáveis e suas mãos radiantes.
            </p>
          </div>
          <div className="services-grid">
            {[
              { icon: '✨', title: 'Manicure Clássica', desc: 'Cuidado completo com suas unhas, incluindo corte, lixamento, cutículas e esmaltação perfeita.', price: 'R$ 40', gradient: 'gradient-rose' },
              { icon: '⚡', title: 'Alongamento em Gel', desc: 'Unhas longas e naturais com gel de alta qualidade e durabilidade excepcional.', price: 'R$ 120', gradient: 'gradient-purple' },
              { icon: '⭐', title: 'Nail Art & Decoração', desc: 'Designs personalizados e exclusivos criados especialmente para você brilhar.', price: 'R$ 80', gradient: 'gradient-yellow' },
              { icon: '❤️', title: 'Spa das Mãos', desc: 'Tratamento completo de hidratação e revitalização para mãos macias e saudáveis.', price: 'R$ 60', gradient: 'gradient-red' }
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className={`service-icon ${service.gradient}`}>
                  <span style={{ fontSize: '28px' }}>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-price">A partir de {service.price}</div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <button onClick={() => handleWhatsApp('Olá! Gostaria de saber mais sobre os serviços.')} className="btn btn-primary">
              Agendar Horário
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Nossos Trabalhos</h2>
            <p className="section-description">
              Confira alguns dos nossos trabalhos mais recentes e se inspire para sua próxima transformação.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openImageModal(img.url)}>
                <img src={img.url} alt={img.tag} />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{img.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-cta">
            <p>Quer ver mais? Siga-nos no Instagram para acompanhar nossos trabalhos diários!</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Depoimentos</span>
            <h2 className="section-title">O Que Nossas Clientes Dizem</h2>
            <p className="section-description">A satisfação das nossas clientes é nossa maior conquista.</p>
          </div>
          <div className="testimonials-grid">
            {[
              { name: 'Ana Carolina', role: 'Cliente há 2 anos', text: 'Simplesmente perfeito! A atenção aos detalhes e o carinho no atendimento fazem toda a diferença. Minhas unhas nunca estiveram tão bonitas!', avatar: '👩🏻' },
              { name: 'Mariana Silva', role: 'Cliente há 1 ano', text: 'Encontrei muito mais que uma manicure, encontrei uma artista! Cada trabalho é único e sempre supera minhas expectativas.', avatar: '👩🏽' },
              { name: 'Juliana Santos', role: 'Cliente há 3 anos', text: 'Qualidade impecável, ambiente acolhedor e produtos de primeira. Recomendo de olhos fechados! Não troco por nada.', avatar: '👩🏼' }
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                </svg>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Entre em Contato</span>
            <h2 className="section-title">Agende Seu Horário</h2>
            <p className="section-description">Estamos prontas para receber você e cuidar das suas unhas com todo carinho.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Informações de Contato</h3>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua das Flores, 123 - Centro<br />São Paulo, SP - CEP 01234-567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h4>Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 9h às 19h<br />Sábado: 9h às 17h<br />Domingo: Fechado</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>E-mail</h4>
                  <p>contato@bellanails.com.br</p>
                </div>
              </div>
            </div>
            <div className="contact-cta-card">
              <div className="cta-circle cta-circle-1"></div>
              <div className="cta-circle cta-circle-2"></div>
              <div className="cta-content">
                <h3>Pronta Para Transformar<br />Suas Unhas?</h3>
                <p>Agende agora mesmo pelo WhatsApp e garanta seu horário. Atendimento rápido e personalizado!</p>
                <button onClick={() => handleWhatsApp('Olá! Gostaria de agendar um horário.')} className="btn btn-cta">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Agendar Agora
                </button>
                <div className="cta-benefits">
                  <p>✨ Primeira vez? Ganhe 10% de desconto!</p>
                  <p>💅 Produtos de alta qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">✨</div>
                <span className="logo-text">Bella Nails</span>
              </div>
              <p>Transformando unhas em obras de arte desde 2020.</p>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Início</button></li>
                <li><button onClick={() => scrollToSection('servicos')}>Serviços</button></li>
                <li><button onClick={() => scrollToSection('galeria')}>Galeria</button></li>
                <li><button onClick={() => scrollToSection('depoimentos')}>Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <ul>
                <li>Rua das Flores, 123 - Centro</li>
                <li>São Paulo, SP - 01234-567</li>
                <li>(11) 99999-9999</li>
                <li>contato@bellanails.com.br</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Bella Nails. Feito com ❤️ para você.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div id="imageModal" className="modal" onClick={closeModal}>
        <button className="modal-close" onClick={closeModal}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img id="modalImage" src="" alt="" className="modal-image" />
      </div>
    </div>
  );
}
