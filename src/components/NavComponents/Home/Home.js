import React from "react";
import "../CSS/homeStyles.css";

import masterhead from "../../../assets/Masterhead(web).svg";
import google from "./homeassets/Google-launchpad.webp";
import futureskills from "./homeassets/future-skills-homepage.webp";
import sheleads from "./homeassets/she-leads.webp";
import aws from "./homeassets/aws-ed-start.webp";
import stairs from "./homeassets/stairs_of_approach(web).svg";
import personalized from "./homeassets/personalised_learning.svg";
import topcoders from './homeassets/personalised_practice..svg'
import codelive from './homeassets/code_live_with_experts.svg'
import down_arrow_left from "./homeassets/down-arrow-left.svg";
import downarrow_right from './homeassets/down-arrow-right..svg'
import doubtsolving from './homeassets/ask_doubts_totally.svg'
import acheivecode from './homeassets/achieve_your_coding_dream.svg'
function Home() {
  return (
    <>
      <div className="Home-header-main">
        <div className="Home-header-left">
          <h1 className="start-journey">Start your journey of success</h1>
          <h1 className="personolized">
            Personalised Coding Programs to make coding easier for you
          </h1>
          <li style={{ color: " #f78077" }}>
            Want to know how PrepBytes can help you?
          </li>
          <button className="know-button">Know more</button>
        </div>

        <img src={masterhead} alt="not" className="master-head" />
      </div>
      <div>
        <div className="acheive-container">
          <img className="acheive-img" src={google} alt="not" />
          <img className="acheive-img" src={futureskills} alt="not" />
          <img className="acheive-img" src={sheleads} alt="not" />
          <img className="acheive-img" src={aws} alt="not" />
        </div>
      </div>
      <section className="coding-journey">
        <div className="codin-journey-left">
          <img src={stairs} className="student" alt="not" />
        </div>
        <div className="codin-journey-right">
          <div>
            <h1 className="heading1">
              How PrepBytes Mentorship driven Personalised Learning works?
            </h1>
          </div>
          <div>
                
                <div className="coding-journey-inner2">
                    <div>
                    <p className="inner-heading1" >PERSONALISED LECTURES & WEEKLY PLAN</p>
                <div className="coding-journey-inner">
                <img className="innerimg" src={personalized} alt='not'/>
                <p className="innerbox">Get learning videos & weekly plan based on your coding skills</p>
                </div>
                    </div>
              
                <div>
                <img className="innerarrow2"  src={downarrow_right} alt='not'/>
                </div>
                </div>
            </div>

            <div className="coding-journey-inner2">
            <div>
                <img className="innerarrow"  src={down_arrow_left} alt='not'/>
                </div>
                    <div>
                    <p className="inner-heading2" >PERSONALISED CODING ASSIGNMENTS</p>
                <div className="coding-journey-inner">
                <img className="innerimg" src={codelive} alt='not'/>
                <p className="innerbox2"> Practice coding questions that adapts based on your progress</p>
                </div>
                    </div>
                </div>

                <div className="coding-journey-inner2">
            
                    <div>
                    <p className="inner-heading3" >DOUBT SOLVING BY CODING EXPERTS</p>
                <div className="coding-journey-inner">
                <img className="innerimg" src={doubtsolving} alt='not'/>
                <p className="innerbox3"> Getting Stuck While Coding? Get all your doubts resolved.</p>
                </div>
                    </div>
                    <div>
                <img className="innerarrow2"  src={downarrow_right} alt='not'/>
                </div>
                </div>

                <div className="coding-journey-inner2">
                <div>
                <img className="innerarrow"  src={down_arrow_left} alt='not'/>
                </div>
                    <div>
                    <p className="inner-heading4" >CODE LIVE WITH TOP CODERS</p>
                <div className="coding-journey-inner">
                <img className="innerimg" src={topcoders} alt='not'/>
                <p className="innerbox4"> Topic wise Live Coding sessions with top rated coders</p>
                </div>
                    </div>
                    
                </div>
                <div>
       <img src={acheivecode}  alt ='not'/>
      </div>
            </div>

        
        
      </section>
    </>
  );
}

export default Home;
