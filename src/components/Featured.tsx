import React from 'react';

const Featured: React.FC = () => {
  return (
    <div className="section-content">
      <div className="section-header">
        <h1>Featured Work</h1>
        <p className="section-subtitle">Highlighting my best and most impactful projects</p>
      </div>

      <div className="featured-content">
        <div className="featured-grid">
          <div className="featured-project main-feature">
            <div className="project-image">
              <img src="/Kudo.png" alt="CMS System Project" />
              <div className="project-overlay">
                <div className="project-links">
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-tag">Featured Project</span>
              <h2>CMS system</h2>
              <p>
               CMS for a medical company which included different branches for dental and vision. Included an stock inventory page and customer tracking page for highly requested products.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/*<div className="featured-project">*/}
          {/*  <div className="project-image">*/}
          {/*    <img src="https://via.placeholder.com/400x300/764ba2/fff?text=Task+Manager" alt="Task Management App" />*/}
          {/*    <div className="project-overlay">*/}
          {/*      <div className="project-links">*/}
          {/*        <button className="btn-primary" onClick={() => window.open('https://example.com', '_blank')}>Live Demo</button>*/}
          {/*        <button className="btn-secondary" onClick={() => window.open('https://github.com/brandonestrada', '_blank')}>View Code</button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="project-info">*/}
          {/*    <span className="project-tag">Web App</span>*/}
          {/*    <h3>Task Management App</h3>*/}
          {/*    <p>*/}
          {/*      A collaborative task management application with real-time updates, drag-and-drop functionality, */}
          {/*      and team collaboration features.*/}
          {/*    </p>*/}
          {/*    <div className="tech-stack">*/}
          {/*      <span>React</span>*/}
          {/*      <span>Redux</span>*/}
          {/*      <span>Socket.io</span>*/}
          {/*      <span>Express</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="featured-project">*/}
          {/*  <div className="project-image">*/}
          {/*    <img src="https://via.placeholder.com/400x300/f093fb/fff?text=Weather+App" alt="Weather Dashboard" />*/}
          {/*    <div className="project-overlay">*/}
          {/*      <div className="project-links">*/}
          {/*        <button className="btn-primary" onClick={() => window.open('https://example.com', '_blank')}>Live Demo</button>*/}
          {/*        <button className="btn-secondary" onClick={() => window.open('https://github.com/brandonestrada', '_blank')}>View Code</button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="project-info">*/}
          {/*    <span className="project-tag">API Integration</span>*/}
          {/*    <h3>Weather Dashboard</h3>*/}
          {/*    <p>*/}
          {/*      A beautiful weather dashboard that provides detailed weather information with interactive */}
          {/*      charts and location-based forecasts.*/}
          {/*    </p>*/}
          {/*    <div className="tech-stack">*/}
          {/*      <span>React</span>*/}
          {/*      <span>Chart.js</span>*/}
          {/*      <span>Weather API</span>*/}
          {/*      <span>CSS3</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="featured-project">*/}
          {/*  <div className="project-image">*/}
          {/*    <img src="https://via.placeholder.com/400x300/2ecc71/fff?text=Portfolio+Site" alt="Portfolio Website" />*/}
          {/*    <div className="project-overlay">*/}
          {/*      <div className="project-links">*/}
          {/*        <button className="btn-primary" onClick={() => window.open('https://example.com', '_blank')}>Live Demo</button>*/}
          {/*        <button className="btn-secondary" onClick={() => window.open('https://github.com/brandonestrada', '_blank')}>View Code</button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="project-info">*/}
          {/*    <span className="project-tag">Design</span>*/}
          {/*    <h3>Creative Portfolio</h3>*/}
          {/*    <p>*/}
          {/*      A modern, responsive portfolio website showcasing creative work with smooth animations */}
          {/*      and interactive elements.*/}
          {/*    </p>*/}
          {/*    <div className="tech-stack">*/}
          {/*      <span>React</span>*/}
          {/*      <span>Framer Motion</span>*/}
          {/*      <span>SCSS</span>*/}
          {/*      <span>Netlify</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Featured;