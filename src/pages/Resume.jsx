import React from 'react';
import resume from '../assets/images/updated-resume.pdf';

function Resume() {
    return (
      <section id="resume" className="portfolio-section">
        <h2>Resume</h2>
        <div className="pdf-container">
          <embed src={resume} title="Resume PDF" className="pdf-frame"></embed>
        </div>
      </section>
    );
  }
  
  export default Resume;
  