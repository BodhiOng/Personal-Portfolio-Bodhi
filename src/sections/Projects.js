import React from 'react';
import './Projects.css';  

function Projects() {
    return (
        <div className="projects">
            <h1 className='project-title mb-5'>Projects</h1>
            <div className='card-div d-flex justify-content-evenly'>
                <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Quote Generator</h5>
                    <p class="card-text">A simple quote generator that fetches and displays quotes based on various categories.</p>
                    <a href="https://github.com/BodhiOng/Quote-Generator" class="card-link">Github Repository</a>
                </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Calculator</h5>
                    <p class="card-text">A simple and responsive calculator that performs basic arithmetic operations.</p>
                    <a href="https://github.com/BodhiOng/Calculator" class="card-link">Github Repository</a>
                </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Rent And Utilities Calculator</h5>
                    <p class="card-text">A rent and utilities calculator app to manage tenants, track monthly expenses, and generate receipts for singular apartment unit.</p>
                    <a href="https://github.com/BodhiOng/Rent-And-Utilities-Calculator" class="card-link">Github Repository</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;