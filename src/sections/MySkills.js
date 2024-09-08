import React from 'react';
import './MySkills.css';

import javascriptlogo from '../images/javascript-logo.png';
import typescriptlogo from '../images/typescript-logo.png';
import csharplogo from '../images/csharp-logo.png';
import pythonlogo from '../images/python-logo.png';
import javalogo from '../images/java-logo.png';
import rlogo from '../images/r-logo.png';
import bootstraplogo from '../images/bootstrap-logo.png';
import reactlogo from '../images/react-logo.png';
import expresslogo from '../images/express-logo.png';
import postgresqllogo from '../images/postgresql-logo.png';
import mysqllogo from '../images/mysql-logo.png';
import mssqllogo from '../images/mssql-logo.png';
import mongodblogo from '../images/mongodb-logo.png';
import gitlogo from '../images/git-logo.png';
import npmlogo from '../images/npm-logo.png';
import postmanlogo from '../images/postman-logo.png';

function SkillsNav() {
    return (
        <div className="myskills-section">
            <h1 className="myskills-title mb-5">My Skills</h1>
            
            <div className='left-align'>
                <h2 className="proglang mb-4">Programming Languages</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="logos-container d-flex">
                        {[
                            { src: javascriptlogo, alt: "JavaScript", label: "JavaScript" },
                            { src: typescriptlogo, alt: "TypeScript", label: "TypeScript" },
                            { src: pythonlogo, alt: "Python", label: "Python" },
                            { src: csharplogo, alt: "C#", label: "C#" },
                            { src: javalogo, alt: "Java", label: "Java" },
                            { src: rlogo, alt: "R", label: "R" },
                        ].map((item, index) => (
                            <div className="text-left logo-item" key={index}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="img-fluid" 
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <h5 className='techlabel'>{item.label}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="fwlib mt-4 mb-4">Frameworks & Libraries</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="logos-container d-flex">
                        {[
                            { src: expresslogo, alt: "Express.js", label: "Express.js" },
                            { src: reactlogo, alt: "React.js", label: "React.js" },
                            { src: bootstraplogo, alt: "Bootstrap", label: "Bootstrap" },
                        ].map((item, index) => (
                            <div className="text-left logo-item" key={index}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="img-fluid" 
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <h5 className='techlabel'>{item.label}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                    <h2 className="databases mt-4 mb-4">Databases</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="logos-container d-flex">
                            {[
                                { src: postgresqllogo, alt: "PostgreSQL", label: "PostgreSQL" },
                                { src: mysqllogo, alt: "MySQL", label: "MySQL" },
                                { src: mssqllogo, alt: "MSSQL", label: <>Microsoft<br/>SQL Server</> },
                                { src: mongodblogo, alt: "MongoDB", label: "MongoDB" },
                            ].map((item, index) => (
                                <div className="text-left logo-item" key={index}>
                                    <img 
                                        src={item.src} 
                                        alt={item.alt} 
                                        className="img-fluid" 
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    />
                                    <h5 className='techlabel'>{item.label}</h5>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="tools mt-4 mb-4">Tools</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="logos-container d-flex">
                            {[
                                { src: gitlogo, alt: "Git", label: "Git" },
                                { src: npmlogo, alt: "npm", label: "npm" },
                                { src: postmanlogo, alt: "Postman", label: <>Postman<br/>API</>}
                            ].map((item, index) => (
                                <div className="text-left logo-item" key={index}>
                                    <img 
                                        src={item.src} 
                                        alt={item.alt} 
                                        className="img-fluid" 
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    />
                                    <h5 className='techlabel'>{item.label}</h5>
                                </div>
                            ))}
                        </div>
                    </div>

                <p className='ending-msg w-50 mt-5 mx-auto text-center'> I am always eager to learn and embrace new challenges! No learning curve intimidates me if it means I can accomplish the task at hand.</p>
            </div>
        </div>
    );
}

export default SkillsNav;