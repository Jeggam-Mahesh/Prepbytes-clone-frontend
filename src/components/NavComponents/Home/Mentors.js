import React from 'react'

import '../CSS/mentor.css'
const mentors = [
    {
        name: "Mamta",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png",
        bg: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png",
        subtitle: "Co-Founder, PrepBytes",
        description: "Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.",
        companies: ["https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png"]
    },
    {
        name: "Aditya",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Aditya_bhusan.png",
        bg: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png",
        subtitle: "Co-Founder, PrepBytes",
        description: "Aditya has over 5 years of industry experience and has been part of multiple hiring sprees. He is a placement expert and knows very well what is required to nail it in interviews.",
        companies: ["https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png", "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/IIT_kharagpur.png"]
    },
    {
        name: "Aveek",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aveek_sir.png",
        bg: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aveek_mentor_background.png",
        subtitle: "Mentor, PrepBytes",
        description: "Aveek is a Technical Content Engineer / Mentor at PrepBytes and has mentored more than 2500 students to date. His teaching methodology is very engaging and highly appreciated by students",
        companies: ["https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png"]
    },
    {
        name: "Kunal",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kunal_sir.png",
        bg: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kunal_dwivedi_mentor_background.png",
        subtitle: "SDE, Amazon",
        description: "Kunal loves competitive programming and likes to spend time teaching students. He has secured under 100 rank in various coding challenges and 287th rank in Google Kickstart.",
        companies: ["https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png"]
    },
    {
        name: "Virali",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/virali_vora.png",
        bg: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/virali_vora_mentor_background.png",
        subtitle: "SDE, Google",
        description: "Virali is one of the top coders of the country. She has mentored thousands of students at PrepBytes and has motivated them to think big and achieve big.",
        companies: ["https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google_logo.png"]
    },
    {
        name: "Kushdeep",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kushdeep_sir.png",
        bg: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/sharechat_mentor_background.png",
        subtitle: "SDE, ShareChat",
        description: "He is a Competitive Programmer with some achievements like 5 stars at Codechef and a Specialist at Codeforces. He loves to guide students in achieving their goals and getting them placed in their dream companies.",
        companies: ["https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/sharechat.png"]
    },
]

const Mentors = () => {
    return (
        <div className='PrepMentors'>
            <section className="PrepMentors__main">
                <p className="main--heading">
                    PrepBytes Mentors
                </p>

                <p className="main--subheading">
                    PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.
                </p>

                <div className="cards--container">
                    {
                        mentors.map((item, index) => (
                            // <MentorCard key={index} bg={item.bg} profile={item.profile} name={item.name} description={item.description} subtitle={item.subtitle} companies={item.companies} />
                       <>
                   <div className='PrepMentors-card'>
            <div className="card-image">
                <img src={item.bg} alt="bg" className="background--img" />
                <img src={item.profile} alt="profile" className="Profile" />
            </div>
            <div className="card-text">
                <p className="PrepMentors-name">
                    {item.name}
                </p>
                <p className="card-designation">
                    {item.subtitle}
                </p>
            </div>
            <div className="card-info">
                <p className="PrepMentors-description">
                    {item.description}
                </p>
            </div>

            <div className="PrepMentor-company">
                {item.companies.map((item, index) => (
                    <img src={item} alt="company" className="company--img" key={index} />
                ))}
            </div>
        </div>

                       </>
                            ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Mentors

