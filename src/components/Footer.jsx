import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">[contact]</h3>
            <div className="footer-config">
              <div className="config-line">
                <span className="key">linkedin</span>
                <span className="equals">=</span>
                <a href="https://www.linkedin.com/in/jenaro-mwikali-3308b869/" target="_blank" rel="noopener noreferrer" className="value">
                  linkedin.com/in/jenaro-mwikali
                </a>
              </div>
              <div className="config-line">
                <span className="key">github</span>
                <span className="equals">=</span>
                <a href="https://github.com/wjanaro" target="_blank" rel="noopener noreferrer" className="value">
                  github.com/wjanaro
                </a>
              </div>
              <div className="config-line">
                <span className="key">instagram</span>
                <span className="equals">=</span>
                <a href="https://www.instagram.com/jenaro_dev/" target="_blank" rel="noopener noreferrer" className="value">
                  @jenaro_dev
                </a>
              </div>
              <div className="config-line">
                <span className="key">whatsapp</span>
                <span className="equals">=</span>
                <a href="https://wa.me/254723099187" target="_blank" rel="noopener noreferrer" className="value">
                  +254723099187
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-credit">
          <p className="muted">Built with React • Designed for growth</p>
        </div>
      </div>
    </footer>
  );
}
