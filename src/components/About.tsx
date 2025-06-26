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
                  <li>Responsive Design</li>
                  <li>CSS Frameworks</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Node.js</li>
                  <li>WordPress</li>
                  <li>jQuery</li>
                  <li>Build Tools</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Design</h3>
                <ul>
                  <li>UI/UX Principles</li>
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Prototyping</li>
                  <li>User Testing</li>
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
                <h3>Frontend Developer</h3>
                <p className="company">Tech Company • 2022 - Present</p>
                <p>Developing responsive web applications using React and TypeScript. Collaborating with design teams to implement pixel-perfect UI components.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Web Developer</h3>
                <p className="company">Digital Agency • 2021 - 2022</p>
                <p>Built custom WordPress themes and plugins. Worked on various client projects ranging from small business websites to large-scale web applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Junior Developer</h3>
                <p className="company">Startup • 2020 - 2021</p>
                <p>Started my professional journey learning modern web development practices. Focused on HTML, CSS, JavaScript, and jQuery fundamentals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;