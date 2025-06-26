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
  // Move right when scrolling down, left when scrolling up
  const horizontalOffset = Math.sin(scrollY * 0.002) * 20; // Adjust multiplier for speed/distance

  return (
    <div className="hero-content">
      <div 
        className="profile-emoji"
        style={{
          transform: `translateX(${horizontalOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <span className="emoji" role="img" aria-label="Brandon's Profile">👨🏽‍💻</span>
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