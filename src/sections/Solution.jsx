import SectionWrapper from '../components/SectionWrapper';
import './Solution.css';

export default function Solution() {
  const solutions = [
    {
      icon: '✓',
      title: 'Strategically Built',
      description: 'Aligned with your goals and vision'
    },
    {
      icon: '✓',
      title: 'Search-Optimized',
      description: 'The right people can find you'
    },
    {
      icon: '✓',
      title: 'User-Focused',
      description: 'Build trust and drive action'
    },
    {
      icon: '✓',
      title: 'Scalable & Reliable',
      description: 'Grows with your business'
    },
    {
      icon: '✓',
      title: 'Data-Informed',
      description: 'Smart decisions backed by insights'
    }
  ];

  return (
    <SectionWrapper className="solution-section">
      <h2 className="section-title">The Solution</h2>
      <p className="solution-intro">
        I design and develop intentional systems that support growth, clarity, and results.
      </p>
      <p className="solution-intro secondary">
        Instead of disconnected tools and guesswork, I create solutions that are:
      </p>

      <div className="solutions-grid">
        {solutions.map((solution, idx) => (
          <div key={idx} className="solution-card">
            <div className="solution-icon">{solution.icon}</div>
            <h3 className="solution-title">{solution.title}</h3>
            <p className="solution-description">{solution.description}</p>
          </div>
        ))}
      </div>

      <div className="solution-details">
        <p>
          Whether it is a WordPress website, an SEO strategy, a full-stack solution, or data analysis,
          every system I build is designed to work for you, reduce friction, and move your business forward.
        </p>
        <p className="goal-statement">
          <span className="green">The goal is simple:</span>
          <br />
          Clarity, growth, and systems that make success sustainable.
        </p>
      </div>
    </SectionWrapper>
  );
}
