import React, { useState, useEffect } from 'react';
import './SidebarNav.css';

function SidebarNav() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle mouse movement
    const handleMouseMove = (event) => {
        if (event.clientX < 100) { // If the mouse is near the left edge
            setIsVisible(true); // Show the sidebar
        } else {
            setIsVisible(false); // Hide the sidebar
        }
    };

    // Effect to add and remove mousemove listener
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <nav className={`sidebar-nav ${isVisible ? 'show' : ''}`}>
                <button onClick={() => scrollToSection('home-bookmark')}>Home</button>
                <button onClick={() => scrollToSection('about-bookmark')}>About Me</button>
                <button onClick={() => scrollToSection('myskills-bookmark')}>My skills</button>
                <button onClick={() => scrollToSection('portfolio-bookmark')}>Portfolio</button>
                <button onClick={() => scrollToSection('getintouch-bookmark')}>Get in <br />touch</button>
            </nav>
        </div>
    );
}

export default SidebarNav;