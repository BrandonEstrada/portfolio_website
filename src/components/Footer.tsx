import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Get view count from localStorage
    const storedViews = localStorage.getItem('portfolioViewCount');
    let views = storedViews ? parseInt(storedViews) : 0;
    
    // Increment view count on page load
    views += 1;
    setViewCount(views);
    localStorage.setItem('portfolioViewCount', views.toString());
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {currentYear} Brandon Estrada. All rights reserved.</p>
          <p className="view-counter">
            <span className="view-icon">👁️</span>
            Page views: {viewCount.toLocaleString()}
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/brandonestrada" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/brandonestrada" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;