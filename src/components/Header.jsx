import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <span className="green terminal-text">{'> Jenaro  Portfolio'}</span>
            </div>
            <div className="cursor-blink"></div>
          </div>
          <nav className="nav-links">
            <a href="#contact" className="terminal-text">contact</a>
            <a href="#work" className="terminal-text">work</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
