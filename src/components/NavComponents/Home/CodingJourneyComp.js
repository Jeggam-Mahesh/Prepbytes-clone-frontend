import React from 'react'
import studentCoding from "../Home/homeassets/stairs_of_approach(web).svg"
import downArrowRight from "../Home/homeassets/down-arrow-right..svg"
import downArrowLeft from "../Home/homeassets/down-arrow-left.svg"
import personlizedLearning from "../Home/homeassets/personalised_learning.svg"
import personlizedPractice from "../Home/homeassets/personalised_learning.svg"
import codeLive from "../Home/homeassets/code_live_with_experts.svg"
import achievement from "../Home/homeassets/achieve_your_coding_dream.svg"
import doubtIcon from "../Home/homeassets/ask_doubts_totally.svg"
import "../CSS/coding_jrny.css"

const CodingJourneyHome = () => {
    return (
        <div>
            <section className='coding-journey'>
                <div className="coding-journey-container">
                    <div className="coding-journey-left">
                        <img src={studentCoding} alt="student home" />
                    </div>
                    <div className="coding-journey-right">
                        <p className="coding-journey-right--heading">
                            How PrepBytes Mentorship driven Personalised Learning works?
                        </p>

                        <div className="coding-journey-right-container">
                            <div className=" coding-journey-right-container-card-one">
                                <div className="left">
                                    <p className="left--heading">
                                        Personalised Lectures & Weekly Plan
                                    </p>
                                    <div className="left-box" style={{ background: "rgb(253,240,215)", border: "1px dashed rgb(247,128,119)" }}>
                                        <img src={personlizedLearning} alt="PersonlizedLearning" />
                                        <p style={{ color: "rgb(247, 128, 119)" }}>Get learning videos & weekly plan based on your coding skills</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className='rightarrow' src={downArrowRight} alt="down-arrow" />
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-two">
                                <div className="left">
                                    <img className='leftarrow' src={downArrowLeft} alt="DownArrowLeft" />
                                </div>
                                <div className="right">
                                    <p className="right--heading" style={{ color: "rgb(253, 205, 6)" }}>
                                        Personalised Lectures & Weekly Plan
                                    </p>
                                    <div className="right-box" style={{ background: "rgb(253,240,228)", border: "1px dashed rgb(253,205,6)" }}>
                                        <img src={codeLive} alt="CodeLive" />
                                        <p style={{ color: "rgb(253, 205, 6)" }}>Get learning videos & weekly plan based on your coding skills</p>
                                    </div>
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-one">
                                <div className="left">
                                    <p className="left--heading" style={{ color: "rgb(15,181,130)" }}>
                                        Doubt Solving by Coding Experts
                                    </p>
                                     <div className="left-box" style={{ background: "rgb(228,246,241)", border: "1px dashed rgb(15,181,130)" }}>
                                        <img src={doubtIcon} alt="DoubtIcon" />
                                        <p style={{ color: "rgb(15, 181, 130)" }}>Getting Stuck While Coding? Get all your doubts resolved.</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className='rightarrow' src={downArrowRight} alt="down-arrow" />
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-two">
                                <div className="left">
                                    <img className='leftarrow' src={downArrowLeft} alt="DownArrowLeft" />
                                </div>
                                <div className="right">
                                    <p className="right--heading" style={{ color: "rgb(240, 119, 149)" }}>
                                        CODE LIVE WITH Top Coders
                                    </p>
                                    <div className="right-box" style={{ background: " rgb(255, 231, 237)", border: "1px dashed rgb(240, 119, 149)" }}>
                                        <img src={personlizedPractice} alt="PersonlizedPractice" />
                                        <p style={{ color: "rgb(240, 119, 149)" }}>Get learning videos & weekly plan based on your coding skills</p>
                                    </div>
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-three">
                                <img src={achievement} alt="Achievement" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CodingJourneyHome
