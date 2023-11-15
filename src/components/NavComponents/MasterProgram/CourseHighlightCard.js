import React from 'react'

const CourseHighlightCard = ({ icon, text, color }) => {
  return (
    <div className='course-highlights--list-container' style={{ borderBottom: `4px solid ${color}`, borderRight: `4px solid ${color}` }}>
      <div className="course-highlights--img-container">
        <img src={icon} alt="highlight img" />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default CourseHighlightCard
