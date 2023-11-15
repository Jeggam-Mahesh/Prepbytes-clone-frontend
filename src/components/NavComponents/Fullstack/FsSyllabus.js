import React from 'react'
import "./fullstackCSS/syllabus.css"
import TopicCard from './TopicCard'
const FsSyllabus = () => {
    return (
        <div className='StackSyllabus__main'>
            <div className="StackSyllabus__main-top">
                <div className="StackSyllabus__main-top-container">
                    <p className="StackSyllabus__main-top-container--heading">
                        Program Syllabus & Projects
                    </p>

                    <div className="StackSyllabus__main-top-container--right">
                        <a href="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" >
                            <button className='StackSyllabus__main-top-container--right-button'>Download Syllabus</button>
                        </a>
                    </div>
                </div>
                <p className="StackSyllabus__main-top--text">
                    We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.
                </p>
            </div>
            {/* {course && course?.syllabus.map((item, index) => (
                <TopicCard topic={item.topic} description={item.description} duration={item.duration} content={item.content} />
            ))
            } */}
             <TopicCard topic="Html Basics" description="idocdcbjhbkjj" duration="20-40" content="here is my content" />
            {/* )) */}
        </div>
    )
}

export default FsSyllabus
