import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <section id="home" className="section hero-section">
          <Hero />
        </section>
        <section id="about" className="section about-section">
          <About />
        </section>
        <section id="featured" className="section featured-section">
          <Featured />
        </section>
        <section id="portfolio" className="section portfolio-section">
          <Portfolio />
        </section>
        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
