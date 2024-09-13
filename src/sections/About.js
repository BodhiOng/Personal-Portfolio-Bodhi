import React from 'react';
import './About.css';  

function AboutMe() {
    return (
        <div className="about-me">
            <h2 className="about-me-title mb-5">About Me</h2>
            <div className="about-me-content d-flex flex-column align-items-center">
                <p className="about-me-description">
                    As a dedicated Software Engineering student at Asia Pacific University, I am passionate about the art and science of back-end development. My academic journey has provided me with a strong foundation in building robust and efficient server-side applications. With experience in various back-end technologies, I have developed a keen ability to create solutions that are both functional and scalable.<br/><br/>I thrive on solving complex problems and am constantly seeking opportunities to expand my knowledge and skills. My hands-on experience with personal projects has sharpened my ability to work independently and deliver results. I am deeply committed to continuous learning and staying updated with the latest trends and best practices in the ever-evolving field of software development.<br/><br/>I am eager to connect with professionals, mentors, and collaborators who share a passion for innovation and excellence. Let’s explore how we can work together to bring creative solutions to life!      
                </p>
                <div className="skills-icons mb-4 mt-4">
                    <span className="skill-icon">💻</span>
                    <span className="skill-icon">🌐</span>
                    <span className="skill-icon">🗄️</span>
                    <span className="skill-icon">🚀</span>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
