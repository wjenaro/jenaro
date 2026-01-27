import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './CTA.css';

export default function CTA() {
  const benefits = [
    'Clear communication and a structured process',
    'Systems designed with purpose, not guesswork',
    'A website or solution that supports growth and visibility',
    'Strategic thinking aligned with your long-term goals',
    'A partner who cares about outcomes, not just delivery'
  ];

  const costs = [
    'Your website may continue to exist without delivering results',
    'Potential customers may struggle to find or trust your brand',
    'Growth remains inconsistent and harder than it needs to be',
    'Time and effort are spent maintaining systems that do not scale'
  ];

  const testimonials = [
    {
      quote: 'Clear, reliable, and focused on results. The process felt intentional from start to finish.',
      author: 'Client'
    },
    {
      quote: 'The system finally works the way it should. Simple, effective, and built for growth.',
      author: 'Client'
    },
    {
      quote: 'More than development, it was strategic thinking that made the difference.',
      author: 'Client'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SectionWrapper className="cta-section">
        <h2 className="section-title">Ready to Build Something That Works?</h2>
        <p className="cta-intro">
          If you are ready to move from frustration to clarity, from effort to results, I am open to collaboration,
          projects, and meaningful work.
        </p>
        <p className="cta-intro">
          Whether you are starting fresh or improving what already exists, we can build systems that support your goals
          and grow with you.
        </p>

        <div className="contrast-grid">
          <div className="contrast-section left-section">
            <h3 className="contrast-title">The Cost of Not Acting</h3>
            <div className="items-list">
              {costs.map((cost, idx) => (
                <div key={idx} className="item-row">
                  <span className="item-marker">✗</span>
                  <p>{cost}</p>
                </div>
              ))}
            </div>
            <p className="warning-text">
              Choosing not to improve your systems often means staying stuck, even while working harder.
            </p>
          </div>

          <div className="contrast-section right-section">
            <h3 className="contrast-title">What Working With Me Looks Like</h3>
            <div className="items-list">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="item-row benefit">
                  <span className="item-marker">✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <p className="success-text">
              The focus is not just building something, but building the right thing.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="testimonials-section">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="final-cta-section">
        <div className="final-cta-content">
          <h2 className="final-title">Let's Build Something Better</h2>
          <p className="final-text">
            If you believe your systems should support your growth and not hold you back,
            let's start the conversation.
          </p>
          <Button variant="primary" onClick={scrollToContact}>
            Start the Conversation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
