import React from 'react';
import { useState } from 'react';

function Navigation() {
    const [ selected, setSelected ] = useState('about');

    const handleNavClick = (section) => {
        setSelected(section);
        const element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth' });

    }
    return (
        <nav>
      <ul>
        <li>
          <a
            href="#about"
            onClick={() => handleNavClick('about')}
            className={selected === 'about' ? 'selected' : ''}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handleNavClick('portfolio')}
            className={selected === 'portfolio' ? 'selected' : ''}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className={selected === 'contact' ? 'selected' : ''}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handleNavClick('resume')}
            className={selected === 'resume' ? 'selected' : ''}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
    );
}

export default Navigation;