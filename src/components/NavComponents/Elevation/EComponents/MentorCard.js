import React from 'react'
import BG from "../Assets/mamta_mentor_background.png"

import "../mentorCard.css"
const MentorCard = ({ image, name, subtitle, desc, company }) => {
    return (
        <div className='PrepMentors__main--container-card'>
            <div className="PrepMentors__main--container-card-image">
                <img src={BG} alt="background" className="PrepMentors__main--container-card-image-background--img" />
                <img src={image} alt="profile img" className='PrepMentors__main--container-card-image--img' />

            </div>
            <div className="PrepMentors__main--container-card-text">
                <p className="PrepMentors__main--container-card-text--name">
                    {name}
                </p>
                <p className="PrepMentors__main--container-card-text--designation">
                    {subtitle}
                </p>
            </div>
            <div className="PrepMentors__main--container-card-info">
                <p className="PrepMentors__main--container-card-info--text">
                    {desc}
                </p>
            </div>
            <div className="PrepMentors__main--container-card-company">
                <img src={company} alt="company img" className="PrepMentors__main--container-card-company--img" />
            </div>
        </div>
    )
}

export default MentorCard
