import React from 'react'
import Quote from "./masterAssets/Quote1.webp"
import Quote2 from "./masterAssets/Quote2.webp"

const MCPTestiCard = ({ name, profile, text }) => {
    return (
        <div className='CoursePageTestimonials__testimonial-card'>
            <div className="CoursePageTestimonials__testimonial-name-contanier">
                <img src={Quote} alt="quotation mark" />
                <h3>{name}</h3>
            </div>
            <div className="CoursePageTestimonials__testimonial-review">
                <p>{text}</p>
            </div>
            <div className="CoursePageTestimonials__testimonial-details">
                <div className="CoursePageTestimonials__student-img-container">
                    <img src={profile} alt="profile" className='CoursePageTestimonials__student-img'/>
                </div>
                <img src={Quote2} alt="quotation2" />
            </div>
        </div>
    )
}

export default MCPTestiCard
