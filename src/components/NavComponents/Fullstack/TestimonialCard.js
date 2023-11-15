import React from 'react'

const TestimonialCard = ({ profile, name, review, company }) => {
    return (
        <div className='Student__testimonials-placed-people-container-card'>
            <div className="Student__testimonials-placed-people-container-card-top">
                <img src={profile} alt="profile" className="Student__testimonials-placed-people-container-card-top-image" />
                <div className="Student__testimonials-placed-people-container-card-top-right">
                    <p className="Student__testimonials-placed-people-container-card-top-name">
                        {name}
                    </p>

                    <p className="Student__testimonials-placed-people-container-card-top-text">
                        {company}
                    </p>
                </div>
            </div>

            <div className="Student__testimonials-placed-people-container-card-bottom">
                <p className="Student__testimonials-placed-people-container-card-bottom-text">
                    {review}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard
