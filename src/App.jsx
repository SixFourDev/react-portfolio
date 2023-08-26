import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
    const [selectedSection, setSelectedSection] = useState('home'); 

    const handleNavClick = (section) => {
        setSelectedSection(section);
    };

    return (
        <div>
            <Header selectedSection={selectedSection} onNavClick={handleNavClick} />
            {selectedSection === 'home' && <Home />}
            {selectedSection === 'portfolio' && <Portfolio />}
            {selectedSection === 'contact' && <Contact />}
            {selectedSection === 'resume' && <Resume />}
            <Footer />
        </div>
    );
}

export default App;
