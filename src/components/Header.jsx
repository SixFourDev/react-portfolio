import React from 'react';
import Navigation from './Navigation';
import './styles.css';

function Header({ selectedSection, onNavClick }) {
    return (
        <header>
            <h1>Shane Browning</h1>
            <Navigation selectedSection={selectedSection} onNavClick={onNavClick} />
        </header>
    );
}

export default Header;
