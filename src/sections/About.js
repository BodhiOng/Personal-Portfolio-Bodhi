import React from 'react';
import avatar from '../images/bodhi-formal-pic.jpg'; 
import './About.css';  

function AboutMe() {
    return (
        <div className="about-me">
            <h2 className="about-me-title">About Me</h2>
            <div className="about-me-content d-flex flex-column align-items-center">
                <img 
                    src={avatar}
                    alt="Bodhi" 
                    className="about-me-photo mb-4" 
                />
                <p className="about-me-description">
                    As a dedicated Software Engineering student at Asia Pacific University, I am passionate about the art and science of full-stack development. My academic journey has provided me with a strong foundation in building dynamic and user-friendly web applications. With experience in both the front-end and back-end, I have developed a keen ability to create solutions that are not only functional but also intuitive and responsive.<br/><br/>I thrive on solving complex problems and am constantly seeking opportunities to expand my knowledge and skills. My hands-on experience with various projects has honed my ability to collaborate effectively and contribute to team success. I am deeply committed to continuous learning and staying abreast of the latest trends and best practices in the ever-evolving field of software development.<br/><br/>I am eager to connect with professionals, mentors, and collaborators who share a passion for innovation and excellence. Let’s explore how we can work together to bring creative solutions to life!
                </p>
                <div className="skills-icons mb-4">
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
