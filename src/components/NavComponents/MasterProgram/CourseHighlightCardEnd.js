import React from 'react'

const CourseHighlightCardEnd = ({ icon, text, color }) => {
  return (
    <div className='CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-0' style={{ borderBottom: `4px solid ${color}`, borderRight: `4px solid ${color}` }}>
      <img src={icon} alt="highlight img" />
      <div className='CoursePageLearnings__detail'>{text}</div>
    </div>
  )
}

export default CourseHighlightCardEnd
