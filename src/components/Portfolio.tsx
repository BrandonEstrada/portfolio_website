import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-app',
      image: 'https://via.placeholder.com/400x300/4a90e2/fff?text=E-Commerce',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Manager',
      category: 'web-app',
      image: 'https://via.placeholder.com/400x300/764ba2/fff?text=Task+Manager',
      description: 'Collaborative project management tool',
      tech: ['React', 'Redux', 'Firebase'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'website',
      image: 'https://via.placeholder.com/400x300/f093fb/fff?text=Restaurant',
      description: 'Modern restaurant website with online ordering',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web-app',
      image: 'https://via.placeholder.com/400x300/2ecc71/fff?text=Weather+App',
      description: 'Real-time weather tracking with interactive maps',
      tech: ['React', 'Chart.js', 'API'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Creative Agency',
      category: 'website',
      image: 'https://via.placeholder.com/400x300/e74c3c/fff?text=Agency+Site',
      description: 'Portfolio website for creative agency',
      tech: ['WordPress', 'PHP', 'SCSS'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      category: 'web-app',
      image: 'https://via.placeholder.com/400x300/f39c12/fff?text=Chat+App',
      description: 'Real-time messaging application',
      tech: ['React', 'Socket.io', 'Express'],
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Design Portfolio',
      category: 'design',
      image: 'https://via.placeholder.com/400x300/9b59b6/fff?text=Design+Work',
      description: 'UI/UX design showcase',
      tech: ['Figma', 'Adobe XD', 'Prototyping'],
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'Mobile UI Kit',
      category: 'design',
      image: 'https://via.placeholder.com/400x300/34495e/fff?text=UI+Kit',
      description: 'Comprehensive mobile app UI components',
      tech: ['Figma', 'Design System', 'Components'],
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="section-content">
      <div className="section-header">
        <h1>My Portfolio</h1>
        <p className="section-subtitle">A comprehensive showcase of my work across different domains</p>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'web-app' ? 'active' : ''}`}
            onClick={() => setFilter('web-app')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${filter === 'website' ? 'active' : ''}`}
            onClick={() => setFilter('website')}
          >
            Websites
          </button>
          <button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            Design
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.link} className="btn-primary">View Live</a>
                    <a href={project.github} className="btn-secondary">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new opportunities and exciting projects.</p>
          <a href="#contact" className="btn-primary large">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;