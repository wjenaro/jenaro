import SectionWrapper from '../components/SectionWrapper';
import Divider from '../components/Divider';
import './Problem.css';

export default function Problem() {
  const issues = [
    'A website that looks good but does not convert visitors into customers',
    'Low visibility on search engines despite offering real value',
    'WordPress sites that feel slow, broken, or hard to manage',
    'Systems that are not scalable and fail as the business grows',
    'Data that exists but is not used to make smarter decisions'
  ];

  return (
    <SectionWrapper className="problem-section">
      <div className="problem-content">
        <div className="problem-header">
          <h2 className="section-title">The Problem</h2>
          <p className="problem-intro">
            I understand the pain and frustration of trying to have systems that actually work for you.
          </p>
          <p className="problem-intro">
            You invest time, money, and effort, yet the results do not reflect your vision or hard work.
          </p>
        </div>

        <div className="issues-list">
          {issues.map((issue, idx) => (
            <div key={idx} className="issue-item">
              <span className="issue-label">[ISSUE]</span>
              <p>{issue}</p>
            </div>
          ))}
        </div>

        <div className="problem-conclusion">
          <p className="conclusion-text">
            <span className="terminal-prompt">{'>'}</span> This is where I come in.
          </p>
          <p className="conclusion-description">
            My role is to remove that frustration by building clear, reliable, and growth-focused systems.
            Systems that work with you, not against you, and support long-term success.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
