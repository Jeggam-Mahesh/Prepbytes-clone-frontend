import React from 'react'
import industryvetted from "../Home/homeassets/industry_vetted.svg"
import realProjects from "../Home/homeassets/real_life_projects.svg"
import ex_placement from "../Home/homeassets/exclusive_placement.svg"
import journey1 from "../Home/homeassets/journey1.svg"
import journey2 from "../Home/homeassets/journey2.svg"
import journey3 from "../Home/homeassets/journey3.svg"
import "../CSS/homejourney.css"

const AreYouExperienced = () => {
    return (
        <div>
            <section className="home-journey">
                <div className="main-comtaier ">
                    <div className="left  left-container">
                        <p className="left--heading">Are you an Experienced Professional willing to Switch?</p>
                        <div className="left-tile-container">
                            <div className="left-tile">
                                <img src={industryvetted} alt="tile-icon" />
                                <p className='tile-text'>Industry vetted curriculum structured for you</p>
                            </div>
                            <div className="left-tile">
                                <img src={realProjects} alt="tile-icon" />
                                <p className='tile-text'>Real life projects built on demand tech stack</p>
                            </div>
                            <div className="left-tile">
                                <img src={ex_placement} alt="tile-icon" />
                                <p className='tile-text'>Exclusive Placement Support team with job gurantee</p>
                            </div>
                        </div>
                        <p className="left-tile-container-text">
                            <span>PrepBytes Elevation Academy</span>
                            -  4 months Full Stack Program with Job Guarantee
                        </p>
                        <button className='left-tile-container-btn'>Know more</button>
                    </div>
                    <div className="right">
                    <p className="right--heading">Are you an Experienced Professional willing to Switch?</p>
                        <div className="right-box">
                            <div className="right-box-left">
                                <img src={journey1} alt="journey1" />
                            </div>
                            <div className="right-box-right">
                                <div className="top">
                                    <img src={journey2} alt="journey2" />
                                </div>
                                <div className="bottom">
                                    <img src={journey3} alt="journey3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AreYouExperienced
