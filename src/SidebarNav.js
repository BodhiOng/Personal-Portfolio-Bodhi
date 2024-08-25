import React from 'react';
import './SidebarNav.css';

function SidebarNav() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior:'smooth' });
        }
    }

    return (
        <div>
            <nav className='sidebar-nav'>
                <button onClick={() => scrollToSection('home-bookmark')}>Home</button>
                <button onClick={() => scrollToSection('about-bookmark')}>About</button>
                <button>My skills</button>
                <button>Portfolio</button>
                <button>Get in <br/>touch</button>
            </nav>
        </div>
    );
}

export default SidebarNav;