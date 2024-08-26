import React from 'react';
import './Education.css';  
import apupicture from '../images/apu-logo.jpg';
import gloriapicture from '../images/gloria-logo.jpg';
import penaburpicture from '../images/penabur-logo.jpg';

function Education() {
    return (
        <div className='education'>
            <h1>Education</h1>
            <div className='row1'>
                <EducationCard
                    image={apupicture}
                    title="Asia Pacific University"
                    text1="Bachelor’s degree in Software Engineering"
                    text2="2023 - 2026"
                />
                <EducationCard
                    image={gloriapicture}
                    title="SMA Kristen Gloria 2"
                    text1="High School Diploma (Science Department)"
                    text2="2020 - 2023"
                />
            </div>
            <div className='row2'>
                <EducationCard
                    image={penaburpicture}
                    title="SMPK 2 Penabur"
                    text1="Middle School Diploma"
                    text2="2017 - 2020"
                />
                <EducationCard
                    image={penaburpicture}
                    title="SDK 1 Penabur"
                    text1="Elementary School Diploma"
                    text2="2011 - 2017"
                />
            </div>
        </div>
    );
}

function EducationCard({ image, title, text1, text2 }) {
    return (
        <div className='education-card mb-3' style={{ maxWidth: '540px' }}>
            <div className='row g-0'>
                <div className='col-md-4 custom-card'>
                    <img src={image} className='img-fluid rounded-start' alt='School Logo' />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{text1}</p>
                        <p className='card-text'>{text2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;