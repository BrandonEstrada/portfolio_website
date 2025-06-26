import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-content">
      <div className="profile-image">
        <img 
          src="/profile.jpg" 
          alt="Brandon Estrada - Profile" 
          onError={(e) => {
            // Fallback to a more professional placeholder
            e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face";
          }} 
        />
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