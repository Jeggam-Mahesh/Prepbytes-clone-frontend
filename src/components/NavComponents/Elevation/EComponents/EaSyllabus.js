import React from 'react'
import "../syllabus.css"
import EaSyllabusCard from './EaSyllabusCard.js'

const colors = [
    "rgb(247, 128, 119)",
    "rgb(101, 187, 229)",
    "rgb(247, 182, 67)",
]
const EaSyllabus = ({ syllabus }) => {
    let count = 0

    const handleCount = () => {
        if (colors.length <= count) {  //3<count=3, 
            count = 1
        } else {
            count += 1
        }
    }
    return (
        <div className='elevationSyllabus_main'>
            <div className="elevationSyllabus__main-top">
                <div className="elevationSyllabus__main-top-container">
                    <p className="elevationSyllabus__main-top-container--heading">
                        Program Syllabus
                    </p>
                </div>
                <p className="elevationSyllabus__main-top--text">
                    Learn from the best and be prepared to crack full stack developer jobs
                </p>
            </div>
            {syllabus && syllabus.map((item, index) => {
                handleCount()
                return < EaSyllabusCard key={item._id} duration={item.duration} topic={item.topic} description={item.description} content={item.content} index={index + 1} color={colors[count-1]} />
            })
            }
        </div>
    )
}

export default EaSyllabus
