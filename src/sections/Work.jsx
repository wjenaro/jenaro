// import SectionWrapper from '../components/SectionWrapper';
// import ProjectCard from '../components/ProjectCard';
// import './Work.css';

// export default function Work() {
//   const projects = [
//     {
//       title: 'WordPress Websites',
//       description: 'Designed and developed responsive, SEO-ready websites built for speed, usability, and long-term growth.',
//       tags: ['WordPress', 'Speed', 'SEO-Ready'],
//       link: null
//     },
//     {
//       title: 'SEO Optimization Projects',
//       description: 'Improved search visibility through structured content, on-page SEO, and technical optimization to attract the right audience.',
//       tags: ['SEO', 'Strategy', 'Visibility'],
//       link: null
//     },
//     {
//       title: 'Custom Web Solutions',
//       description: 'Built tailored features and integrations to support specific business workflows and goals.',
//       tags: ['Web Development', 'Integration', 'Custom'],
//       link: null
//     },
//     {
//       title: 'Data Analysis & Insights',
//       description: 'Analyzed data to uncover patterns, measure performance, and support smarter decision-making.',
//       tags: ['Python', 'Analysis', 'Insights'],
//       link: null
//     }
//   ];

//   return (
//     <SectionWrapper id="work" className="work-section">
//       <h2 className="section-title">Selected Work</h2>
//       <p className="work-intro">
//         Here are examples of projects where I have helped turn ideas into clear, functional, and growth-focused systems.
//       </p>

//       <div className="projects-grid">
//         {projects.map((project, idx) => (
//           <ProjectCard key={idx} {...project} />
//         ))}
//       </div>

//       <div className="work-note">
//         <p>Each project is approached with intention, strategy, and a focus on results that actually matter.</p>
//       </div>
//     </SectionWrapper>
//   );
// }


import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import './Work.css';

export default function Work() {
  const websiteProjects = [
    {
      title: 'Selections Souvenir',
      description:
        'E-commerce website built to showcase and sell handmade souvenirs and gifts crafted by Kenyan locals. Focused on usability, performance, and storytelling through design.',
      tags: ['E-commerce', 'WordPress', 'Design & Development'],
      link: 'https://selectionssouvenir.com/'
    },
    {
      title: 'Jesoko Online Store',
      description:
        'Online retail platform for electronics, kitchen appliances, accessories, and home equipment. Designed and developed for scalability, clarity, and smooth shopping experience.',
      tags: ['Online Store', 'WordPress', 'Performance'],
      link: 'https://jesoko.com/'
    },
    {
      title: 'Webichain',
      description:
        'Digital agency website designed to clearly communicate services, value proposition, and credibility. Built with a modern layout and conversion-focused structure.',
      tags: ['Agency Website', 'UI/UX', 'Development'],
      link: 'https://webichain.tech/'
    },
    {
      title: 'AMS Promo Gifts',
      description:
        'Corporate gifting, promotions, and branding website. Involved in both design and development, with emphasis on product presentation and business trust.',
      tags: ['Corporate Website', 'Branding', 'Development'],
      link: 'https://ams-promogifts.com/'
    }
  ];

  const seoProjects = [
    {
      title: 'SEO Strategy & Optimization',
      description:
        'Led full SEO strategy for the showcased websites, including keyword research, on-page optimization, technical SEO, Google Business Profile setup, and local SEO execution.',
      tags: ['SEO Strategy', 'Keyword Research', 'Local SEO'],
      link: null
    }
  ];

  return (
    <SectionWrapper id="work" className="work-section">
      <h2 className="section-title">Selected Work</h2>
      <p className="work-intro">
        A selection of real projects where I was directly involved in design, development,
        and optimization—building systems that are clear, functional, and growth-focused.
      </p>

      <div className="projects-grid">
        {websiteProjects.map((project, idx) => (
          <ProjectCard key={`web-${idx}`} {...project} />
        ))}

        {seoProjects.map((project, idx) => (
          <ProjectCard key={`seo-${idx}`} {...project} />
        ))}
      </div>

      <div className="work-note">
        <p>
          These projects reflect a hands-on approach—combining technical execution,
          strategic thinking, and attention to real-world business outcomes.
        </p>
      </div>
    </SectionWrapper>
  );
}
