import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate horizontal movement based on scroll position
  // More noticeable movement: larger range and smoother motion
  const horizontalOffset = Math.sin(scrollY * 0.003) * 50; // Increased from 20 to 50 for more noticeable movement

  return (
    <div className="hero-content">
      <div 
        className="profile-image"
        style={{
          transform: `translateX(${horizontalOffset}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <img src="https://via.placeholder.com/400x500/333/fff?text=Your+Photo" alt="Profile" />
      </div>
      <div className="hero-text">
        <h1>&lt;coder&gt;</h1>
        <p className="description">
          Front End Developer who focuses on<br />
          writing clean, elegant and efficient<br />
          code. Love HTML5, CSS3, WordPress<br />
          and a touch of jQuery.
        </p>
        <div className="code-snippet">
          <span className="code-line">&lt;html&gt;</span>
          <span className="code-line">{`{height:184px;}`}</span>
          <span className="code-line">&lt;h1 class="jedi"&gt;</span>
          <span className="code-line css">CSS3 <span className="html">HTML5</span></span>
          <span className="code-line">{`{color:#000;}`}</span>
          <span className="code-line jquery">jQuery</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;