import React from 'react';

const About: React.FC = () => {
  return (
    <div className="section-content">
      <div className="section-header">
        <h1>About Me</h1>
        <p className="section-subtitle">Get to know who I am and what drives my passion for development</p>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>My Story</h2>
            <p>
              I'm a passionate full-stack developer with a strong focus on backend development, where I've spent
              the majority of my professional experience building server-side solutions and APIs.
            </p>
            <p>
              My software engineering journey began with a simple "Hello World" program and has evolved into
              a pursuit of creating systems that balance performance, maintainability, and user experience.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, attending tech conferences,
              or enjoying a good run.
            </p>
          </div>
          
          <div className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React & TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Java & Spring</li>
                  <li>Maven</li>
                  <li>MySQL</li>
                  <li>Docker</li>
                  <li>Kafka</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Node.js</li>
                  <li>Splunk</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="experience-section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <p className="company">Hilton • 2024 - Present</p>
                <p>Backend role supporting applications for the Property team.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Frontend developer - intern</h3>
                <p className="company">Hilton • 2022 - 2024</p>
                <p>Incorporated CRS/PMS feature that went into production for hotels worldwide.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p className="company">Kudo Care Medical• 2021 - 2023</p>
                <p>Started my professional journey. Created a CMS web application for a medical company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;