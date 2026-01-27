import SectionWrapper from '../components/SectionWrapper';
import './Trust.css';

export default function Trust() {
  const personas = [
    'Individuals building their personal brands or online presence',
    'Small businesses looking for visibility, clarity, and consistency',
    'Founders and teams who value growth, trust, and long-term thinking'
  ];

  return (
    <SectionWrapper className="trust-section">
      <div className="trust-content">
        <h2 className="section-title">Trusted By People Like You</h2>
        <p className="trust-intro">
          I have worked with individuals, entrepreneurs, and small businesses who share a common goal:
          to build systems that work, grow, and make life easier.
        </p>

        <div className="personas-list">
          {personas.map((persona, idx) => (
            <div key={idx} className="persona">
              <span className="persona-icon">→</span>
              <p>{persona}</p>
            </div>
          ))}
        </div>

        <div className="trust-statement">
          <p className="statement-main">
            I believe trust is earned through <span className="green">clear communication</span>,
            <span className="green"> reliability</span>, and <span className="green">results</span>,
            not promises.
          </p>
          <p className="statement-secondary">
            My aim is to build partnerships, not just projects.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
