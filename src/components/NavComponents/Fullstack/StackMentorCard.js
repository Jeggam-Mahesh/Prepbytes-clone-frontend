import React from 'react'
import "./fullstackCSS/stack-mentor-card.css"
const StackMentorCard = ({image, title, text}) => {
    return (
        <div className='StackMentors__main--container-card'>
            <div className="StackMentors__main--container-card-image">
                <img src={image} alt="mentor" />
            </div>
            <p className="StackMentors__main--container-card--heading">
                {title}
            </p>
            <p className="StackMentors__main--container-card--text">
                {text}
            </p>
        </div>
    )
}

export default StackMentorCard
