import './SectionWrapper.css';

export default function SectionWrapper({ children, id = '', className = '' }) {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
