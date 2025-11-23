import React, { useEffect, useRef } from 'react';
import './Activities.css';

const Activities = () => {
  const activitiesRef = useRef(null);

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

    if (activitiesRef.current) {
      observer.observe(activitiesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="activities" className="activities section">
      <div className="container">
        <div className="activities-content fade-in" ref={activitiesRef}>
          <h2>Activities</h2>
          <div className="activities-grid">
            <div className="activity-item">
              <h3>Legal Research & Writing</h3>
              <p className="role">Published Author</p>
              <p className="description">
                Authored research paper on cyberstalking and deepfake crimes, 
                published in Journal of Legal Studies and Research, demonstrating 
                expertise in cyber law and contemporary legal challenges.
              </p>
            </div>
            <div className="activity-item">
              <h3>Practical Legal Training</h3>
              <p className="role">Multiple Internships</p>
              <p className="description">
                Completed comprehensive legal training through internships at 
                five different law firms, gaining hands-on experience in litigation, 
                trademark law, and legal documentation.
              </p>
            </div>
            <div className="activity-item">
              <h3>Court Procedures</h3>
              <p className="role">Observer & Assistant</p>
              <p className="description">
                Extensive courtroom observation experience across different levels 
                of judiciary, learning court procedures, case presentations, and 
                judicial decision-making processes.
              </p>
            </div>
            <div className="activity-item">
              <h3>Legal Documentation</h3>
              <p className="role">Drafting Specialist</p>
              <p className="description">
                Skilled in drafting various legal documents including written statements, 
                plaints, affidavits, replies, and general legal forms with attention 
                to legal precision and procedural requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;