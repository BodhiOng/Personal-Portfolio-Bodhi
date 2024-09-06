import React from 'react';
import './Projects.css';  

function Projects() {
    return (
        <div className="projects">
            <h1 className='project-title mb-5'>Projects</h1>
            <div className='card-div d-flex justify-content-evenly'>
                <div class="card-projects" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Social Media Platform API (Express.js)</h5>
                        <p class="card-text">RESTful API with JWT Auth & Rate limiting to replicate the average social media</p>
                        <a href="https://github.com/BodhiOng/Social-Media-Platform-ExpressJS" class="card-link">Github Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;