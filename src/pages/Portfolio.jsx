import React from 'react';
import ProjectTile from '../components/ProjectTile';
import projectData from '../data/projectData';

function Portfolio() {
  return (
    <section className='portfolio-section' id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <ProjectTile key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
