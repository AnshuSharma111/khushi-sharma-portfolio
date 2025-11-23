import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="experience-content fade-in" ref={experienceRef}>
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Legal Intern</h3>
            <p className="company">BMC Advisors</p>
            <p className="duration">Semester 8th (2024)</p>
            <ul className="responsibilities">
              <li>Conducted comprehensive legal research on various matters</li>
              <li>Drafted written statements, plaints, affidavits and general legal forms</li>
              <li>Prepared detailed case briefs for litigation support</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Legal Intern</h3>
            <p className="company">Triple 'A' Law Partners</p>
            <p className="duration">Semester 8th (2024)</p>
            <ul className="responsibilities">
              <li>Performed legal research and case analysis</li>
              <li>Assisted in trademark filing procedures and documentation</li>
              <li>Conducted trademark search and verification processes</li>
              <li>Drafted replies and counter statements for trademark matters</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Legal Intern</h3>
            <p className="company">Lexis and Company</p>
            <p className="duration">Semester 6th (2023)</p>
            <ul className="responsibilities">
              <li>Engaged in case file reading and courtroom observations</li>
              <li>Drafted various legal forms including PSE, CAI Form, PFRC form, Inspection Form, and Vakalatnama</li>
              <li>Learned court fee calculation and e-filing procedures</li>
              <li>Prepared arguments on Order 6 Rule 17 CPC and Reply under Order 7 Rule 11</li>
              <li>Drafted affidavits under Section 65(b) Evidence Act 1872</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Legal Intern</h3>
            <p className="company">Adv. N.S Dalal and Co.</p>
            <p className="duration">Semester 4th (2022)</p>
            <ul className="responsibilities">
              <li>Conducted thorough case file reading and analysis</li>
              <li>Drafted written statement for fraud case proceedings</li>
              <li>Assisted in drafting plaint for divorce case</li>
              <li>Participated in courtroom observations to understand legal proceedings</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Legal Intern</h3>
            <p className="company">Adv. Karnail Singh and Co.</p>
            <p className="duration">Semester 2nd (2022)</p>
            <ul className="responsibilities">
              <li>Performed detailed case file reading and documentation</li>
              <li>Conducted courtroom observations to understand legal procedures</li>
              <li>Learned basics of court case filing and appearances</li>
              <li>Gained knowledge of different courts, judges, and types of cases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;