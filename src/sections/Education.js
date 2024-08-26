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
                <div className='card mb-3' style={{ maxWidth: '540px' }}>
                    <div className='row g-0'>
                        <div className='col-md-4 custom-card'>
                            <img src={apupicture} className='img-fluid rounded-start' alt='University Logo'/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>Asia Pacific University</h5>
                                <p className='card-text'>Bachelor’s degree in Software Engineering</p>
                                <p className='card-text'>2023 - 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mb-3' style={{ maxWidth: '540px' }}>
                    <div className='row g-0'>
                        <div className='col-md-4 custom-card'>
                            <img src={gloriapicture} className='img-fluid rounded-start' alt='School Logo'/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>SMA Kristen Gloria 2</h5>
                                <p className='card-text'>High School Diploma (Science Department)</p>
                                <p className='card-text'>2020 - 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='card mb-3' style={{ maxWidth: '540px' }}>
                    <div className='row g-0'>
                        <div className='col-md-4 custom-card'>
                            <img src={penaburpicture} className='img-fluid rounded-start' alt='School Logo'/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>SMPK 2 Penabur</h5>
                                <p className='card-text'>Middle School Diploma</p>
                                <p className='card-text'>2017-2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mb-3' style={{ maxWidth: '540px' }}>
                    <div className='row g-0'>
                        <div className='col-md-4 custom-card'>
                            <img src={penaburpicture} className='img-fluid rounded-start' alt='School Logo'/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>SDK 1 Penabur</h5>
                                <p className='card-text'>Elementary School Diploma</p>
                                <p className='card-text'>2011 - 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;