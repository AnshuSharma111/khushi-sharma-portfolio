import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content fade-in" ref={aboutRef}>
          <h2>About</h2>
          <p>
            I am a dedicated law student from New Delhi with a passion for litigation and legal research. 
            Through extensive internships across various law firms, I have developed strong skills in 
            legal drafting, case analysis, and courtroom procedures. My academic journey, combined with 
            practical experience in civil law, trademark practice, and legal research, has prepared me 
            for a successful career in the legal profession.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;