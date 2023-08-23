import React from 'react';

function Navigation({ selectedSection, onNavClick }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => onNavClick('home')}
            className={selectedSection === 'home' ? 'selected' : ''}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => onNavClick('portfolio')}
            className={selectedSection === 'portfolio' ? 'selected' : ''}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => onNavClick('contact')}
            className={selectedSection === 'contact' ? 'selected' : ''}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => onNavClick('resume')}
            className={selectedSection === 'resume' ? 'selected' : ''}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
