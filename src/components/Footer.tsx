import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Use CountAPI for true global view counter
    const fetchGlobalViewCount = async () => {
      try {
        // Increment and get the global view count
        const response = await fetch('https://api.countapi.xyz/hit/brandonestrada.com/visits');
        const data = await response.json();
        
        if (data.value) {
          setViewCount(data.value);
        }
      } catch (error) {
        console.error('Failed to fetch global view count:', error);
        // Fallback to localStorage if API fails
        const storedViews = localStorage.getItem('portfolioViewCount');
        let views = storedViews ? parseInt(storedViews) : 0;
        views += 1;
        setViewCount(views);
        localStorage.setItem('portfolioViewCount', views.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchGlobalViewCount();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>
            &copy; {currentYear} Brandon Estrada. All rights reserved.
            <span className="view-counter">
              <span className="view-icon">👁️</span>
              {isLoading ? 'Loading views...' : `Global views: ${viewCount.toLocaleString()}`}
            </span>
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