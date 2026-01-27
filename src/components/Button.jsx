import './Button.css';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  return (
    <button 
      className={`cmd-button ${variant} ${className}`}
      onClick={onClick}
    >
      <span className="button-text">{children}</span>
      <span className="button-arrow"> →</span>
    </button>
  );
}
