import React from 'react';

function EducationCard({ image, altText, title, degree, duration }) {
    return (
        <div className='card mb-3' style={{ maxWidth: '540px' }}>
            <div className='row g-0'>
                <div className='col-md-4 custom-card'>
                    <img src={image} className='img-fluid rounded-start' alt={altText} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{degree}</p>
                        <p className='card-text'>{duration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationCard;