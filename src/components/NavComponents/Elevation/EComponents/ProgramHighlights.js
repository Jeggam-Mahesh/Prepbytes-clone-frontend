import React from 'react'
import "../highlights.css"
import ProgramHighlightCard from './ProgramHighlightCard'

const highlights = [
    {
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp",
        title: "Live Learning",
        desc: "Master Mern Stack in Live Classes taken by Experts"
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp",
        title: "Learn with Industry Experts",
        desc: "Learn with leading tech mentors and gain access to real-time web development experience."
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp",
        title: "Learn by Doing",
        desc: "Gain in depth experience by building real world projects"
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp",
        title: "Resume Building",
        desc: "Get a resume that companies would shortlist"
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp",
        title: "Mock Interviews",
        desc: "Interview practice with industry veterans with real-time feedbacks"
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp",
        title: "Interview Opportunities",
        desc: "Get developer interview opportunities after course completion"
    }
]
const ProgramHighlights = () => {
    return (
        <div className='ProgramHighlightsNew'>
            <div className="ProgramHighlightsNew__heading_container">
                <p className="ProgramHighlightsNew__heading_text">
                    Why PrepBytes Elevation Academy?
                </p>
                <p className="ProgramHighlightsNew__heading_subtext"></p>
            </div>

            <div className="ProgramHighlightsNew__highlights_list_container">
                {
                    highlights.map((item, index) => (
                        <ProgramHighlightCard key={index} image={item.image} title={item.title} desc={item.desc}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProgramHighlights
