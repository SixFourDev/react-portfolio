import React from 'react';

function ProjectTile({ project }) {
  return (
    <div className="project-tile">
      <img src={project.image} alt={project.title} />
      <div className="overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.deployed} target="_blank" rel="noopener noreferrer">
            Deployed App
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
