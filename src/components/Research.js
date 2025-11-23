import React, { useEffect, useRef } from 'react';
import './Research.css';

const Research = () => {
  const researchRef = useRef(null);

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

    if (researchRef.current) {
      observer.observe(researchRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research" className="research section">
      <div className="container">
        <div className="research-content fade-in" ref={researchRef}>
          <h2>Research & Writing</h2>
          <div className="research-item">
            <h3>"Cyberstalking Related Deepfake Crimes in India: Loopholes and Recommendations"</h3>
            <p className="publication">Journal of Legal Studies and Research (JLSR), 2024</p>
            <p className="description">
              Comprehensive analysis of cyberstalking crimes involving deepfake technology in India, 
              examining existing legal loopholes and providing detailed recommendations for legislative 
              and enforcement improvements to address emerging cyber threats.
            </p>
            <a href="https://www.jlsrjournal.in/cyberstalking-related-deepfake-crimes-in-india-loopholes-and-recommendations-by-khushi-sharma/" 
               target="_blank" rel="noopener noreferrer" className="research-link">
              View Publication →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;