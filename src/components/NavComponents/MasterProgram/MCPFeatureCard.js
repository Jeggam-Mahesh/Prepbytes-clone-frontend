import React from 'react'

const MCPFeatureCard = ({ count, title, desc, icon }) => {
    return (
        <li>
            <div className={`${count ? 'CourseFeatures_list-item-odd' : 'CourseFeatures_list-item-even'}`}>
                <div className="CourseFeatures_img-container">
                    <img src={icon} alt="icon" />
                </div>
                <div className="CourseFeatures_details-container">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </li>
    )
}

export default MCPFeatureCard
