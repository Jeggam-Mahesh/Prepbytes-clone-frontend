import React from 'react'
import "../journey.css"
import JouneryCard from './JouneryCard'

const journeyData = [
    {
        number: 1,
        title: "Application & Shortlisting",
        desc: "Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp",
        color:"rgb(255, 158, 82)"
    },
    {
        number: 2,
        title: "Attend Free Webinar",
        desc: "Go through the free classes and learn the important concepts while understanding how the program unfolds.",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp",
        color:"rgb(232, 63, 63)"
    },
    {
        number: 3,
        title: "Batch Commencement",
        desc: "Embark on your journey of success once you receive the offer letter for successful enrolment.",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp",
        color: "rgb(192, 39, 175)"
    },
    {
        number: 4,
        title: "7 Months Program",
        desc: "You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company.",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp",
        color: "rgb(32, 142, 189)"
    },
    {
        number: 5,
        title: "Guaranteed Placement",
        desc: "The program comes with interview opportunities and  a placement guarantee of minimum 5 LPA.",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp",
        color:"rgb(31, 194, 92)"
    },
]

const Journey = () => {
    return (
        <div className='elevationJourney_container'>
            <div className="elevationJourney_heading_container_mobile">
                <h1 className="elevationJourney_heading_mobile">
                    How will you reach to your dream Job?
                </h1>
            </div>

            <div className="elevationJourney_list_container_mobile">
                {
                    journeyData.map((item, index) => (
                        <JouneryCard key={index} number={item.number} title={item.title} desc={item.desc} image={item.image} color={item.color}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Journey
