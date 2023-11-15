import React from "react";
import "../CSS/homeStyles.css";
import masterhead from "../../../assets/Masterhead(web).svg";
import google from "./homeassets/Google-launchpad.webp";
import futureskills from "./homeassets/future-skills-homepage.webp";
import sheleads from "./homeassets/she-leads.webp";
import aws from "./homeassets/aws-ed-start.webp";
import CodingJourneyHome from "./CodingJourneyComp";
import IwantToComp from "./CardsCompIwant";
import AreYouExperienced from "./AreYouExperienced";
import KnowDetailsComp from "./KnowDetailsComp";
import benspoke from './homeassets/Bespoke+Mentors.webp'
import selctedpool from './homeassets/Selected_pool.webp'
import Mentors from "./Mentors";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Testimonial from "../Fullstack/Testimonial";
import CallBack from "./CallBack";
import HeaderNav from '../../../Temp/HeaderNav'

function Home() {
  
  return (
    <>
    <HeaderNav/>
      <div className="Home-header-main">
        <div className="Home-header-left">
          <h1 className="start-journey">Start your journey of success</h1>
          <h1 className="personolized">
            Personalised Coding Programs to make coding easier for you
          </h1>
          <li style={{ color: " #f78077" }}>
            Want to know how PrepBytes can help you?
          </li>
          <Link><button className="know-button" onClick={()=>  window.scrollTo({
      top: 2200,
      behavior: 'smooth' // Use 'auto' or 'smooth' for smooth scrolling
    })}>Know more</button></Link>
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
      <CodingJourneyHome/>
     <IwantToComp/>
     <AreYouExperienced/>
     <KnowDetailsComp/>
     <div className="Benspoke" style={{background:"rgb(178, 221, 237)", paddingTop:"250px"}}>
      <img className="Benspoke"  src={benspoke} alt="not"/>
     </div>
     <div>
        <img
         src={selctedpool}
          alt="team" className="selected-pool" />
        </div>
        <div className="stu-placed">
        <h1 >100% of our students finishing the course have got placed</h1>
        </div>
       
        <Testimonial/>
        <div className="PlacedStudents">
          <img className='PlacedStudents' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png" alt="placed students" />
        </div>
       
        <Mentors/>

        <div>
          <section className="CBMBanner">
            <div className="CBMBanner_main">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp" alt="banner" className="CBMBanner_bg-img" />
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-Homepage-mobile.webp" alt="banner" className="CBMBanner_bg-img-mob" />

              <div className="CBMBanner_info-cont">
                <h3 className="CBMBanner_info-title">
                  Want to represent your college?
                </h3>

                <div className="CBMBanner_info-text">
                  <span>
                    <p>
                      Join <strong style={{ color: '#00afec', fontWeight: "500" }}>PrepBytes Campus Business Manager Internship program.</strong>
                    </p>
                  </span>
                </div>

                <a href="https://www.prepbytes.com/campus-business-manager" className="MuiButtonBase-root MuiButton-root MuiButton-text CBMBanner_cta">Join Now</a>
              </div>
            </div>
          </section>
        </div>
        <CallBack/>
<Footer/>
    </>
  );
}

export default Home;
