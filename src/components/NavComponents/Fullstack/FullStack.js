import PartnerLogo from "./E_assets/header-logo.svg"
import "./fullstack.css"
import ToolsImg from "./E_assets/tools1.png"
import StackJourney from './StackJourney'
import AfterFinishing from './AfterFinishing'
import Certificate from "./E_assets/certificate.svg"
import Realtime from "./E_assets/realtime.svg"
import Excellent from "./E_assets/excellent.svg"
import Girl from "./E_assets/girlimage.webp"
import Paypal from "./E_assets/paypal.svg"
import Oracle from "./E_assets/oracle.svg"
import Walmart from "./E_assets/walmart.svg"
import Goldman from "./E_assets/goldman.svg"
import JP from "./E_assets/jp.svg"
import MMT from "./E_assets/mmt.svg"
import Byjus from "./E_assets/byjus.svg"
import Paytm from "./E_assets/paytm.svg"
import Delhivery from "./E_assets/delhivery.svg"
import Flipkart from "./E_assets/flipkart.svg"
import Fab from "./E_assets/fab.svg"
import Mygate from "./E_assets/mygate.svg"
import Wedme from "./E_assets/wedme.svg"
import Styleme from "./E_assets/styleme.svg"
import Neo from "./E_assets/neo.svg"

import StackCompaniesCard from './StackCompaniesCard'
import Statistics from './Statistics'
import StackMentorCard from './StackMentorCard'
// import Loader from '../components/Loader'
import StackJourneyIpad from './StackJourneyIpad'
// import FsSyllabus from './FsSyllabus'
// import MetaData from '../components/MetaData'
import Testimonial from './Testimonial'
import FaqPanel from './FaqPanel'
import Footer from "../../Footer/Footer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import HeaderNav from '../../../Temp/HeaderNav'
function FullStack() {
    let logedin=useSelector(state=>state.name)
    const [check, setCheck] = useState(0)
    const navigate=useNavigate()
    const journey = [
        {
            title: "Batch Commencement",
            content: [
                "Get access to dashboard & complete plan",
                "Introduction with lead mentor for this program",
                "Access to recorded video lectures",
                "Access to Mock Tests",
                "One live session with mentors per week",
                "Every live session will be of 2 hours duration"
            ],
            thumb: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_batchcommencement.svg"
        },
        {
            title: "Learn required languages, framework & tools",
            content: [
                "Live online classes of Javascript, ReactJs, NodeJs,Express, HTML & CSS",
                "Learn the industry wide used tools like MongoDB, Git & Jira"
            ],
            thumb: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_language-full+stack.svg"
        },
        {
            title: "Complete awesome real world projects",
            content: [
                "HTML Blog Page",
                "Reminder Clock App",
                "Todo App",
                "React Blog",
                "Chat App",
                "E-commerce Web App"
            ],
            thumb: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_projects.svg"
        },
        {
            title: "Experience the complete development lifecycle",
            content: [
                "Learn the Agile Development Methodology",
                "Real time experience of complete software development lifecycle from development to deployment"
            ],
            thumb: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_lifecycle.svg"
        },
        {
            title: "Be a certified Full Stack Developer",
            content: [
                "Get certificate of course completion on completing projects, assignments & mock tests"
            ],
            thumb: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_getcertified.svg"
        },
    ]
    const handleEnroll = () => {
        if(logedin){
       navigate('/payment')}
       else{
        navigate('/login')
       }
    }
    return (
       <>
       <HeaderNav/>
      <div className='fullStack-page-container'>
                    {/* <MetaData title='Learn Full Stack Web Development | MERN Certification Program | PrepBytes' /> */}

                    <div className="fullStack-header">
                        <section className="fullStack-main">
                            <div className="left">
                                <p>Partner with</p>
                                <div className="left-img-container">
                                    <img src={PartnerLogo} alt="partner logo" />
                                </div>
                                <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                                <p className="left-text">
                                    Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.
                                </p>
                                <div className="left-buttons">
                                    <button>Download Syllabus</button>
                                </div>
                            </div>

                            <div className="right">
                                <div className="fullStack-header-right-box">
                                    <p className='box--heading'>Next Batch starts: 1st May, 2023</p>
                                    <p className='box--text'>Limited seats available</p>
                                </div>
                                <div className="fullStack-header-right-box">
                                    <p className='box--heading'>Program Duration:  4 - 5 months</p>
                                    <p className='box--text'>15-20 hours/week</p>
                                </div>
                                <div className="fullStack-header-right-box">
                                    <p className='box--heading'>Learning Format</p>
                                    <p className='box--text'>Recorded Lectures + Online Live Classes</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="fullStack-batchDetails">
                        <div className="batchDetails-container">
                            <h4>SELECT BATCH</h4>
                            <div className="batchDetails-section">
                                <div className="batchDetails-date-container">
                                    <div className="batch-container">
                                        <label className="batch-label">
                                            <input type="radio" value={0} checked={check === 0} onChange={() => setCheck(0)} />
                                            <span className='batch-text-container'>
                                                <h5>1st May</h5>
                                                <p>Enrolment Started</p>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="batchDetails-date-container">
                                        <div className="batch-container">
                                            <label className="batch-label">
                                                <input type="radio" value={1} checked={check === 1} onChange={() => setCheck(1)} />
                                                <span className='batch-text-container'>
                                                    <h5>15th May</h5>
                                                    <p>Enrolment Started</p>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="batchDetails-enroll-container">
                                    <div className="batchDetails-actprice">
                                        ₹30000
                                    </div>
                                    <div className="batchDetails-atc-container">
                                        <div className="enroll-now-btn">
                                            <button onClick={handleEnroll}>Enroll Now</button>
                                        </div>
                                        <div className="try-free">
                                            <button>Try for free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="StackTools">
                        <div className="StackTools__left">
                            <div className="StackTools__left--heading">
                                Languages & Tools you will learn
                            </div>
                            <p className="StackTools__left--text">
                                Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics
                            </p>
                        </div>
                        <div className="StackTools__right">
                            <img src={ToolsImg} alt="ToolsImg" />
                        </div>
                    </div>

                    <div className="StackJourney">
                        <div className="StackJourney__container">
                            <p className="StackJourney__container--heading">
                                How will your journey look like?
                            </p>
                            <p className="StackJourney__container--text">
                                We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home
                            </p>
                        </div>
                        <StackJourney journey={journey} />
                        <StackJourneyIpad journey={journey} />
                    </div>

                    <div className="StackProgram">
                        <div className="StackProgram__main">
                            <div className="StackProgram__main__left">
                                <img src={Girl} alt="girlimage" />
                            </div>
                            <div className="StackProgram__main__right">
                                <p className="StackProgram__main__right--heading">
                                    What you will be after finishing the program?
                                </p>
                                <div className="StackProgram__main__right--box">
                                    <AfterFinishing image={Certificate} text='Certified Full stack Developer' />
                                    <AfterFinishing image={Realtime} text='Experience of Real world work' />
                                    <AfterFinishing image={Excellent} text='Ready to crack any web developer interview' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="StackCompanies">
                        <div className="StackCompanies__main">
                            <p className="StackCompanies__main--heading">
                                Companies that hire for the roles
                            </p>

                            <div className="StackCompanies__main--container">
                                <StackCompaniesCard title='Tech Giants' text='Tech giants keep hiring for web developement roles. You will often find opening for Frontend, Backend or Full Stack Developers. Strong knowledge and good projects will help you grab an oppurtunity here' images={[Paypal, Oracle, Walmart, Goldman, JP]} />
                                <StackCompaniesCard title='Established Startups' text='All the well known start ups have their website and they use latest tech to build them. Experience with web development and good problem skill is all you need to crack these companies.' images={[MMT, Byjus, Paytm, Delhivery, Flipkart]} />
                                <StackCompaniesCard title='Growing Startups' text='Almost Every Startup have a web app or mobile app. Hundreds of growing startups or Early-stage startup keep looking for interns or web developers to help them convert their idea to reality. ' images={[Fab, Mygate, Wedme, Styleme, Neo]} />
                            </div>
                        </div>
                    </div>
                    <Statistics />

                    <div className="StackMentors">
                        <div className="StackMentors__main">
                            <p className="StackMentors__main--heading">
                                Mentors & Instructors
                            </p>
                            <div className="StackMentors__main--container">
                                <StackMentorCard image='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/Mamta.webp' title='Mamta Kumari, Co-Founder PrepBytes' text='Mamta has over 5 years of experience working in tech giants like Amazon and Samsung and has mentored more than 2000 students to help them enhance their coding skills. She is all set to guide you in your journey of web development' />
                                <StackMentorCard image='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_rahul.webp' title='Rahul Dutta, Software Developer OLA' text='Rahul has work experience of over 3 years and is currently working as Software Developer in OLA. Rahul has mentored many students in past and is excited about sharing his knowledge here.' />
                                <StackMentorCard image='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_harshita.webp' title='Harshita Sharma, Product Engineer AskSid.ai ' text='Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.' />
                            </div>
                        </div>
                    </div>

                    {/* <FsSyllabus /> */}

                    <Testimonial />

                    <div className="StackMetrics">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/digital-marketing/Feature.webp" alt="stack metrics" className="StackMetrics--img" />
                    </div>

                    <div className="StackFaq">
                        <p className="StackFaq__heading">
                            FAQs
                        </p>
                    </div>

                    <div className="StackFaq__wrapper">
                        <FaqPanel ques="What is the duration of this program?" ans="Duration of this program is 3-4 months"/>
                        <FaqPanel ques="What will be the primary language for this program?" ans="Javascript would be the primary language."/>
                        <FaqPanel ques="Is there any pre-requisite for this program?" ans="No, there are no pre-requisites."/>
                        <FaqPanel ques="What if I miss the Live sessions?" ans="Although its highly recommended to not miss the live project sessions but in case if missed recording of the session would be added in your dashboard."/>
                        <FaqPanel ques="How is this program different from other full stack courses?" ans="This program provides not only learning but also complete experience of a full stack developer & software development cycle."/>
                    </div>

                </div>
                <Footer/>
       </> 
    )
}

export default FullStack
