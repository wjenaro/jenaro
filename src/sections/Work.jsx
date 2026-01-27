import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import './Work.css';

export default function Work() {
  const projects = [
    {
      title: 'WordPress Websites',
      description: 'Designed and developed responsive, SEO-ready websites built for speed, usability, and long-term growth.',
      tags: ['WordPress', 'Speed', 'SEO-Ready'],
      link: null
    },
    {
      title: 'SEO Optimization Projects',
      description: 'Improved search visibility through structured content, on-page SEO, and technical optimization to attract the right audience.',
      tags: ['SEO', 'Strategy', 'Visibility'],
      link: null
    },
    {
      title: 'Custom Web Solutions',
      description: 'Built tailored features and integrations to support specific business workflows and goals.',
      tags: ['Web Development', 'Integration', 'Custom'],
      link: null
    },
    {
      title: 'Data Analysis & Insights',
      description: 'Analyzed data to uncover patterns, measure performance, and support smarter decision-making.',
      tags: ['Python', 'Analysis', 'Insights'],
      link: null
    }
  ];

  return (
    <SectionWrapper id="work" className="work-section">
      <h2 className="section-title">Selected Work</h2>
      <p className="work-intro">
        Here are examples of projects where I have helped turn ideas into clear, functional, and growth-focused systems.
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <div className="work-note">
        <p>Each project is approached with intention, strategy, and a focus on results that actually matter.</p>
      </div>
    </SectionWrapper>
  );
}
