import React from 'react';
import markwhite from '../assets/images/github-mark-white.png';

function ProjectTile({ project }) {
  return (
    <div className="project-tile">
      <a href={project.deployed}>
        <div className="project-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="view-app-text">View App</div>
        </div>
      </a>
      <div className="overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.github}>
            <img
              src={markwhite}
              alt={`GitHub Repo: ${project.title}`}
              className="github-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
