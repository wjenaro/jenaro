import { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import TerminalText from '../components/TerminalText';
import Button from '../components/Button';
import jenaroImage from '../assets/jenaro_dev.webp';
import './Hero.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="terminal-prompt">
            {mounted && <TerminalText text="> Hello, I'm Jenaro." delay={0} speed={40} />}
          </div>
          <h2 className="hero-main-text">
            I build systems and content that <span className="green">drive growth</span>,{' '}
            <span className="green">clarity</span>, and <span className="green">lasting success</span>.
          </h2>
          <p className="hero-subtitle">
            Let's build something that helps you grow and do better.
          </p>

          <div className="features">
            <div className="feature">
              <span className="feature-icon">🔹</span>
              <div>
                <h4>Build a High-Performing Website</h4>
                <p className="muted">WordPress • Speed • SEO-Ready</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🔹</span>
              <div>
                <h4>Grow Visibility & Search Traffic</h4>
                <p className="muted">SEO Optimization • Strategy • Results</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🔹</span>
              <div>
                <h4>Turn Data Into Smart Decisions</h4>
                <p className="muted">Python • Analysis • Insights</p>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <Button variant="primary" onClick={scrollToWork}>
              Let's Get Started
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <div className="image-frame">
              <div className="image-content">
                {/* here is where I will have my image */}
                <div style={{ 
                  display: 'inline-block',
                  padding: '6px',
                  boxShadow:'0 0 20px rgba(0,255,136,.25)',
                  borderRadius: '14px' }}>
                    <img
                      src={jenaroImage}
                      alt="Jenaro Developer"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '12px'
                      }}
                    />
                  </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
