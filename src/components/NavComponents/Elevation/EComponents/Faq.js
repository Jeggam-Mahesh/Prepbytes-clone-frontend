import React, { useState } from 'react'
import "../faq.css"
import FaqPanel from '../EComponents/FaqPanel'

const faqs = [
    {
        type: "Eligibily Criteria",
        content: [
            {
                ques: "Can I apply if I am still in College?",
                ans: "Current batch is focussed on 2022, 2021 and 2020 passouts."
            },
            {
                ques: "Do I need to have strong coding skills?",
                ans: "No, you do not need to have strong coding skills. You just need to have good fundamentals and willingness to work hard."
            },

            {
                ques: "Do I need to have strong coding skills?",
                ans: "No, you do not need to have strong coding skills. You just need to have good fundamentals and willingness to work hard."
            },
            {
                ques: "How can I apply?",
                ans: "Click on apply button on the top banner and fill the complete application form."
            }

        ]
    },
    {
        type: "Batch Enrolment",
        content: [
            {
                ques: "What is the process of enroling in the batch?",
                ans: "You need to fill the application form and wait for our team to get in touch with you."
            },
            {
                ques: "Classes will be Live or Recorded?",
                ans: "Classes will be completely Live"
            },
            {
                ques: "What will be the class timings?",
                ans: "Classes generally happen post 6 pm, Monday to Friday."
            }
        ]
    },
    {
        type: "Placement Support",
        content: [
            {
                ques: "When will I get placement support?",
                ans: "You will get placement support after you have completed the program and have finished all projects"
            },
            {
                ques: "How exactly is placement support provided?",
                ans: "Post course completion , your resume will be shared by the partner companies and after your resume is shortlised you will get interview oppurtunity"
            },
            {
                ques: "For how long will I get placement support?",
                ans: "You will get placement support for 12 months post course completion"
            },
            {
                ques: "What if my resume is not getting shortlisted?",
                ans: "We have crafted the program very carefully , keeping in mind what recruiters look for in a candidate and their resume so there is a high probablity of resume getting shortlited. In worse case, if resume does not get shortlisted, we will work together on your resume and ensure it gets shortlisted"
            }
        ]
    },
]
const Faq = () => {
    const [currIndex, setIndex] = useState(0)
    return (
        <div className='IncomeSharingFaqs__main'>
            <div className="IncomeSharingFaqs__main-top">
                <p className="IncomeSharingFaqs__main-top--heading">
                    Frequently Asked Questions
                </p>
            </div>

            <div className="IncomeSharingFaqs__main-middle">
                <div className="IncomeSharingFaqs__main-middle-content">
                    {faqs.map((item, index) => (
                        <div key={index} className={`IncomeSharingFaqs__main-middle-content-tab ${currIndex === index ? "IncomeSharingFaqs__main-middle-content-tab--active" : ""} `} onClick={() => setIndex(index)}>

                            <p className="IncomeSharingFaqs__main-middle-content-tab--text">{item.type}</p>
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className="IncomeSharingFaqs__main-bottom">
                <div className="IncomeSharingFaqs-panel-group">

                    {faqs[currIndex].content.map((item, index) => (
                        <FaqPanel ques={item.ques} ans={item.ans} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
