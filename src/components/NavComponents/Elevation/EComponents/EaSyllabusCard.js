import React, { useState } from 'react'
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const EaSyllabusCard = ({ duration, topic, description, content, index, color }) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className='elevationSyllabus'>
            <div className="elevationSyllabus__box" style={{ background: `${color}` }}>
                <p className="elevationSyllabus__box--text" >
                    {duration}
                </p>
            </div>

            <div className="elevationSyllabus__course">
                <div className="elevationSyllabusContent__course-section">
                    <div className="elevationSyllabus__course-top" style={{ borderLeftColor: `${color}` }}>
                        <div className="elevationSyllabus__course-top-main">
                            <div className="elevationSyllabus__course-top-main-box" style={{ borderColor: `${color}` }}>
                                <p className="elevationSyllabus__course-top-main-box--text" style={{ background: `${color}` }}>
                                    {index}
                                </p>
                            </div>
                            <p className="elevationSyllabus__course-top-main--text">
                                {topic}
                            </p>
                        </div>
                        {/* <p className="elevationSyllabus__course-top--icon" onClick={() => setIsClicked(!isClicked)}>
                            {isClicked ? <AiOutlineMinus color={color}/>
                                : <AiOutlinePlus color={color} />}
                        </p> */}
                    </div>

                    <div className="elevationSyllabusContent__course-content" style={{ height: `${isClicked ? "unset" : "0px"}` }}>
                        <div className="elevationSyllabus__course-content" style={{ borderLeftColor: `${color}` }}>
                            <div className="elevationSyllabus__topic-main--container">
                                <p className="elevationSyllabus__topic-main--container--heading">
                                    {description}
                                </p>
                                <ul className='elevationSyllabus__topic-main--container-list'>
                                    {content.map((item, index) => (
                                        <li className="elevationSyllabus__topic-main--container-list--item" key={index} style={{ borderColor: `${color}` }}>
                                            {item}
                                        </li>))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EaSyllabusCard
