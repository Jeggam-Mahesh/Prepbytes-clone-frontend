import React from 'react'
import "./mentor-card.css"

const MentorCard = ({ name, profile, role, compimg }) => {
    return (
        <div className='slick-slide slick-active' style={{ outline: "none", width: "344px" }}>
            <div>
                <div className="mentor-slider-main" style={{width:"100%", display:"inline-block"}}>
                    <div className="mentor-slider-card">
                        <img src={profile} alt="profile" />
                        <div className="mentor-slider-details">
                            <h4>{name}</h4>
                            <p>{role}</p>
                            <img src={compimg} alt="company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorCard
