import React from 'react'
import "../webinar.css"
const Webinar = ({ setShow }) => {
    return (
        <div className='TestDetails__main'>
            <div className="TestDetails__main-container">
                <div className="TestDetails__main--container-card">
                    <div className="TestDetails__main--container-card-left">
                        <div className="TestDetails__main--container-card-left-second">
                            <p className="TestDetails__main--container-card-left-second--text">
                                Free Webinar
                            </p>
                            <p className="TestDetails__main--container-card-left-second--subtext">
                                Experts mentors designed to get you job-ready, designed for complete beginners as well.
                            </p>
                        </div>
                        <div className="TestDetails__main--container-card-left-first">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/calendar.webp" alt="calendar img" className="TestDetails__main--container-card-left-first--img" />
                        </div>
                    </div>
                    <div className="TestDetails__main--container-card-right">
                        <p className="TestDetails__main--container-card-right--text">
                            Free Webinar
                        </p>

                        <p className="TestDetails__main--container-card-right--subtext">
                            Experts mentors designed to get you job-ready, designed for complete beginners as well.
                        </p>

                        <div className="TestDetails__main--container-card-right-box">
                            <p className="TestDetails__main--container-card-right-box--text">
                                17th April
                            </p>
                        </div>

                        <div className="TestDetails__main--container-card-right-button">
                            <button className="TestDetails__main--container-card-right-button--btn" onClick={() => setShow(true)}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webinar
