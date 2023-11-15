import React, { useState } from 'react'

const TopicCard = ({ topic, description, duration, content }) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className='StackSyllabus'>
            <div className="StackSyllabus__course">
                <div className="StackSyllabusContent__course-section">
                    <div className="StackSyllabus__course-top">
                        <div className="StackSyllabus__course-top-main">
                            <p className="StackSyllabus__course-top-main--text">
                                {topic}
                            </p>

                            <p className="StackSyllabus__course-top-main--done">
                                {duration}
                            </p>
                        </div>

                        <p className="StackSyllabus__course-top--text">
                            {description}
                        </p>
                    </div>

                    <div className={`StackSyllabus__course-bottom ${isClicked ? "StackSyllabus__course-bottom-active" : ""}`}>
                        <p className="StackSyllabus__course-bottom--chapter">
                            <span>Course Content</span>
                        </p>
                        <button className="StackSyllabus__course-bottom--button" onClick={() => setIsClicked(!isClicked)}>
                            {isClicked ? "Hide" : "View Details"}
                        </button>
                    </div>

                    <div className="StackSyllabusContent__course-content" style={{ height: `${isClicked ? "" : "0px"}` }}>
                        <div className="StackSyllabus__course-content">
                            <ul className="list">
                                {/* {content.map((item, index) => (
                                    <li className="list__item" key={index}>
                                        {item}
                                    </li>
                                ))} */}
                                {content}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicCard
