import React from 'react'

import BgCampus from "../Home/homeassets/bg_prepare backcard.webp"
import BgCompetetive from "../Home/homeassets/bg_master_competetive..webp"
import BgMern from "../Home/homeassets/bg_learn_full_mern_back.webp"
import Campus from "../Home/homeassets/prepare_for_campus.webp"
import Mern from "../Home/homeassets/learn_full_stack.webp"
import Competetive from "../Home/homeassets/master_competetive_pgm.webp"
import ArrowBtn from '../Home/homeassets/arrow-btn.svg'
import "../CSS/iwant.css"

const  IwantToComp= () => {
    return (
        <div>
            <section className="main-containers">
                <div className=" main-container-inner ">
                    <p className=" main-heading ">
                        I want to
                    </p>
                    <div className="card-container">
                        {/* <CourseTypesCard back={BgCampus} innerImg={Campus} heading="Prepare for Campus Placements" text="rgb(0, 165, 236)" />
                        <CourseTypesCard back={BgCompetetive} innerImg={Competetive} heading="Master Competitive Programming" />
                        <CourseTypesCard back={BgMern} innerImg={Mern} heading="Build Development Projects" text="rgb(15, 181, 130)" /> */}
                    <div className="course-types-card">
            <div className="card-back">
                <img src={BgCampus} alt="background" />
            </div>
            <div className="card-inner">
                <div className="card-inner-img">
                    <img src={Campus} alt="inner" />
                </div>
                <h2 style={{ color:"rgb(0, 165, 236)" }}>Prepare for Campus Placements</h2>
                <div className="card-inner-bottom">
                    <span className='arrow-btn'>
                        <img src={ArrowBtn} alt="arrow-btn" />
                    </span>
                </div>
            </div>
        </div>


        <div className="course-types-card">
            <div className="card-back">
                <img src={BgCompetetive} alt="background" />
            </div>
            <div className="card-inner">
                <div className="card-inner-img">
                    <img src={Competetive} alt="inner" />
                </div>
                <h2 style={{ color:"#f78077" }}>Master Competitive Programming</h2>
                <div className="card-inner-bottom">
                    <span className='arrow-btn'>
                        <img src={ArrowBtn} alt="arrow-btn" />
                    </span>
                </div>
            </div>
        </div>

        <div className="course-types-card">
            <div className="card-back">
                <img src={BgMern} alt="background" />
            </div>
            <div className="card-inner">
                <div className="card-inner-img">
                    <img src={Mern} alt="inner" />
                </div>
                <h2 style={{ color:"rgb(15, 181, 130)" }}>Build Development Projects</h2>
                <div className="card-inner-bottom">
                    <span className='arrow-btn'>
                        <img src={ArrowBtn} alt="arrow-btn" />
                    </span>
                </div>
            </div>
        </div>

        {/* /////paste up */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IwantToComp
