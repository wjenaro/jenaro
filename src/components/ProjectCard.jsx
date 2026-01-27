import './ProjectCard.css';

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="project-card">
      <div className="card-border-top"></div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="tag">• {tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
