import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="education-content fade-in" ref={educationRef}>
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Laws (LLB)</h3>
            <p className="institution">Gitarattan International Business School, Rohini Sector 14, New Delhi</p>
            <p className="duration">2021 - 2026</p>
            <p className="details">
              CGPA: 7.7 (Till 8th Semester) • Specialized coursework in Civil Procedure, 
              Trademark Law, Evidence Act, Legal Drafting, and Litigation Practice
            </p>
          </div>
          <div className="education-item">
            <h3>Higher Secondary Education (12th)</h3>
            <p className="institution">RD Rajpal School, Sec 9 Dwarka, New Delhi</p>
            <p className="duration">2021</p>
            <p className="details">
              Humanities Stream • 88% • Strong foundation in social sciences and humanities
            </p>
          </div>
          <div className="education-item">
            <h3>Secondary Education (10th)</h3>
            <p className="institution">RD Rajpal School, Sec 9 Dwarka, New Delhi</p>
            <p className="duration">2019</p>
            <p className="details">
              71.2% • Comprehensive secondary education with focus on analytical thinking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;