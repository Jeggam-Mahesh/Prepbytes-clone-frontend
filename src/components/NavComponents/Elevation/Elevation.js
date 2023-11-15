import React, {  useState } from 'react'
import "./elevation.css"
import RightArrow from "./Assets/right-arrow.svg"
import StartAssesment from "./Assets/Start+Assesment.webp"
import FreeClass from "./Assets/free_class.webp"
import BatchStart from "./Assets/Batch+Starts.webp"
import RegisterForm from './EComponents/RegisterForm'
import Journey from './EComponents/Journey'

import ProgramHighlights from './EComponents/ProgramHighlights'
import Tick from "./Assets/righttick.svg"
import MentorCard from './EComponents//MentorCard'
import Webinar from './EComponents/Webinar'
import MetricsCard from './EComponents/MetricsCard'
import HeaderNav from '../../../Temp/HeaderNav'
import Testimonial from '../Fullstack/Testimonial'
import Faq from './EComponents/Faq'
import Footer from '../../Footer/Footer'


const companies = [
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg",
    "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg"
]

const mentors = [
    {
        name: "Mamta Kumari",
        subtitle: "Ex Amazon, Samsung - Cofounder PrepBytes",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mamta_ma'am(Mentor).webp",
        desc: "Mamta has 4.5 years of experience as a Software Developer. She has great passion towards coding and motivates students to pursue coding.Her mission is to use her knowledge and expertise to help students get placed in their dream company.",
        company: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp"
    },
    {
        name: "Kunal Dwivedi",
        subtitle: "Software Developer, Amazon",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Kunal.webp",
        desc: "Kunal has switched from Samsung to Amazon recently and likes to spend time teaching students who are walking down the same road. He love competitive programming and  have secured under 100 rank in various coding challenges and 287 rank in Google Kickstart.",
        company: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp"
    },
    {
        name: "Harshita Sharma",
        subtitle: "Product Engineer, AskSid.ai",
        image: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mentor_harshita.webp",
        desc: "Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.",
        company: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/ask_sid.png"
    }
]

const Elevation = () => {
    const [showForm, setShowForm] = useState(false)

    

    return (
        <>
        <HeaderNav/>
                    <div className='elevationCourse'>
                        <div className="elevationCourse-header">
                            <section className="elevationCourse-header-main" style={{ backgroundColor: 'rgb(253, 240, 215)' }}>
                                <div className="left">
                                    <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                                    <p className="left-text">
                                        Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.
                                    </p>
                                    <ul className="left-list">
                                        <li>
                                            <img src={RightArrow} alt="right-arrow" />
                                            <p>Complete Live Class from experts</p>
                                        </li>
                                        <li>
                                            <img src={RightArrow} alt="right-arrow" />
                                            <p>Be the best Full stack developer</p>
                                        </li>
                                        <li>
                                            <img src={RightArrow} alt="right-arrow" />
                                            <p>Job Guarantee</p>
                                        </li>
                                    </ul>
                                    <div className="left-buttons">
                                        <button onClick={() => setShowForm(true)}>Apply Now</button>
                                        <button onClick={() => setShowForm(true)}>Get a call back</button>
                                    </div>
                                </div>
                                <div className="right">
                                </div>
                            </section>
                        </div>

                        <section className="newBatch">
                            <div className="newBatch-main">
                                <div className="left">
                                    <p>For 2023, 2022 & 2021 graduates</p>
                                    <p>Batch Starting: 1st May 2023</p>
                                </div>
                                <div className="right">
                                    <div className="right-top">
                                        <div className="right-point-outer">
                                            <div className="newBatch-right-point-container">
                                                <img src={FreeClass} alt="free class" />
                                                <div className="newBatch-right-point-container-text">
                                                    <span>Free Webinar</span>
                                                    <span>17th April</span>
                                                </div>
                                            </div>
                                            <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                                        </div>
                                        <div className="right-point-outer">
                                            <div className="newBatch-right-point-container">
                                                <img src={StartAssesment} alt="start assesment" />
                                                <div className="newBatch-right-point-container-text">
                                                    <span>1:1 Counselling session</span>
                                                    <span>From 18th April</span>
                                                </div>
                                            </div>
                                            <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                                        </div>
                                        <div className="right-point-outer">
                                            <div className="newBatch-right-point-container">
                                                <img src={BatchStart} alt="batch start" />
                                                <div className="newBatch-right-point-container-text">
                                                    <span>Batch Start</span>
                                                    <span>01 May'23, Mon-Fri (7-10PM)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    {
                        showForm &&
                        <RegisterForm show={showForm} setShow={setShowForm} />
                    }

                    <Journey />

                    <ProgramHighlights />

                    {/* <EaSyllabus syllabus={course?.syllabus} /> */}

                    <section className="UpcomingBatches">
                        <div className="UpcomingBatches__main">
                            <div className="UpcomingBatches__main-left">
                                <p className="UpcomingBatches__main-left--text">
                                    Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN
                                </p>
                                <button className="UpcomingBatches__main-left--btn">
                                    Apply Now
                                </button>
                            </div>

                            <div className="UpcomingBatches__main-right">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp" alt="img" className="UpcomingBatches__main-right--img" />
                            </div>
                        </div>
                    </section>

                    <Testimonial />

                    <div className="StudentsPlaced">
                        <div className="StudentsPlaced__main">
                            <p className="StudentsPlaced__main--heading">
                                Where our Students are placed
                            </p>
                            <p className="StudentsPlaced__main--subheading">
                                You guarantee hard work, We guarantee placements
                            </p>

                            <div className="StudentsPlaced__main-companies">
                                <div className="StudentsPlaced__main-companies-container">
                                    {companies.map((item, index) => (
                                        <div className="StudentsPlaced__main-companies-container-box" key={index}>
                                            <img src={item} alt="companies img" className="StudentsPlaced__main-companies-container-box--img" />
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="PaymentPlans">
                        <div className="PaymentPlans__main">
                            <p className="PaymentPlans__main--heading">
                                Payment Plans
                            </p>
                            <p className="PaymentPlans__main--subheading">
                                Choose a payment plan suiting your needs
                            </p>
                            <div className="PaymentPlans__main--container">
                                <div className="PaymentPlans__main-container">
                                    <div className="PaymentPlans__main-container-right">
                                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp" alt="" className="PaymentPlans__main-label-img" />

                                        <div className="PaymentPlans__main-container-left-heading">
                                            Pay Upfront*
                                        </div>

                                        <div className="PaymentPlans__main-container-left-book">
                                            Pay Now
                                        </div>

                                        <div className="PaymentPlans__main-container-right-amount">
                                            <p className="PaymentPlans__main-container-right-amount-actual">
                                                ₹70,000
                                            </p>
                                        </div>
                                        <hr className="PaymentPlans__main-container-right-break" />
                                        <div className="PaymentPlans__main-container-right-detail">
                                            <p className="PaymentPlans__main-container-right-detail-title">
                                                *Money-back guarantee on placements
                                            </p>

                                            <span className="PaymentPlans__main-container-right-detail-unplace">
                                            </span>
                                        </div>

                                        <div className="PaymentPlans__main-container-right-emi">
                                            EMI Starting at
                                        </div>

                                        <div className="PaymentPlans__main-container-right-calculation">
                                            <p className="PaymentPlans__main-container-right-calculation-price">
                                                ₹ 5833
                                            </p>/month
                                        </div>
                                    </div>

                                </div>
                                <div className="PaymentPlans__main-container-emi">
                                    <button className='PaymentPlans__main--container-card-left-second--btn' onClick={() => setShowForm(true)}>Register</button>
                                </div>
                            </div>

                            <div className="PaymentPlans__main--guidelines">
                                <div className="PaymentPlans__main--guidelines-container">
                                    <img src={Tick} alt="tick sign" />
                                    <p className="PaymentPlans__main--guidelines-container--text">
                                        <span>Guaranteed Placement of minimum 5 LPA</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="PrepMentors">
                        <div className="PrepMentors__main">
                            <p className="PrepMentors__main--heading">
                                Our Mentors
                            </p>
                            <p className="PrepMentors__main--subheading">
                                Learn directly from experienced software developers and master full stack
                            </p>

                            <div className="PrepMentors__main--container">
                                {mentors.map((item, index) => (
                                    <MentorCard image={item.image} name={item.name} subtitle={item.subtitle} desc={item.desc} company={item.company} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <section className="TestDetails">
                        <Webinar setShow={setShowForm} />
                    </section>

                    <div className="IncomeSharingMetrics">
                        <div className="IncomeSharingMetrics__main">
                            <div className="IncomeSharingMetrics__main-container">
                                <MetricsCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg" text="100k+" subtext="Student Coding Community" />
                                <MetricsCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg" text="800+" subtext="Colleges" />
                                <MetricsCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg" text="100+" subtext="Students placed" />
                            </div>
                        </div>
                    </div>

                    <Faq />
                    <Footer/>
                </>
            
     
    )
}

export default Elevation
