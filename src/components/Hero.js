import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content fade-in" ref={heroRef}>
          <h1>Khushi Sharma</h1>
          <p className="hero-subtitle">Law Student • New Delhi</p>
          <p className="hero-description">
            Dedicated law student with extensive internship experience across multiple law firms, 
            specializing in legal research, drafting, and courtroom observations. Currently pursuing 
            LLB with a strong foundation in civil procedure, trademark law, and litigation support.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button primary">Get in Touch</a>
            <a href="/resume.pdf" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;