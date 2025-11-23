import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content fade-in" ref={contactRef}>
          <h2>Contact</h2>
          <p className="contact-intro">
            I welcome opportunities to discuss legal matters, research collaborations, 
            and potential internship or employment opportunities.
          </p>
          <div className="contact-footer">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:khushisharma@gmail.com" className="contact-link">
                  khushisharma@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+918826661830" className="contact-link">
                  +91 8826661830
                </a>
              </div>
            </div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/khushi-sharma-16645a276/" 
                 target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <span className="separator">•</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;