import React from 'react'
import "../CSS/Knowdetails.css"

const KnowDetails = () => {
    return (
        <div className='KnowDetails'>
            <div className="KnowDetails__main">
                <div className="KnowDetails__main-top">
                    <div className="KnowDetails__main-top-left">
                        <div className="KnowDetails__main-top-left-back">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/know_details_back.svg" alt="bg icon" className="KnowDetails__main-top-left-back--img" />
                        </div>
                        <div className="KnowDetails__main-top-left-box">
                            <div className="KnowDetails__main-top-left-box-top">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png" alt="co founder" className="KnowDetails__main-top-left-box-top--img" />

                            </div>
                            <p className="KnowDetails__main-top-left-box--text">
                                Mamta Kumari
                            </p>
                            <p className="KnowDetails__main-top-left-box--subtext">
                                Co-Founder PrepBytes
                            </p>

                            <div className="KnowDetails__main-top-left-box-company">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" className="KnowDetails__main-top-left-box-company--img" />
                            </div>
                        </div>
                    </div>
                    <div className="KnowDetails__main-top-right">
                        <p className="KnowDetails__main-top-right--heading">
                            Attend Free sessions with industry experts and get valuable guidance
                        </p>

                        <div className="KnowDetails__main-top-right-container">
                            <div className="KnowDetails__main-top-right-container-box">
                                <p className="KnowDetails__main-top-right-container-box--text">
                                    How to master competitive coding?
                                </p>

                                <a href="https://webinar.prepbytes.com/how-to-master-competitive-programming" className="KnowDetails__main-top-right-container-box--btn">
                                    Know More
                                </a>
                            </div>
                            <div className="KnowDetails__main-top-right-container-box">
                                <p className="KnowDetails__main-top-right-container-box--text">
                                    How to crack coding interviews?
                                </p>

                                <a href="https://webinar.prepbytes.com/how-to-master-competitive-programming" className="KnowDetails__main-top-right-container-box--btn">
                                    Know More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="KnowDetails__main-bottom">
                    <div className="KnowDetails__main-bottom-container">
                       
                    
                    <div className='KnowDetails__main-bottom-container-card'>
            <div className="KnowDetails__main-bottom-container-card-image">
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg' alt="logo" className='KnowDetails__main-bottom-container-card-image--img' />

                <p className="KnowDetails__main-bottom-container-card--heading">
                100K+
                </p>

                <p className="KnowDetails__main-bottom-container-card--subheading">
                Coding Community
                </p>
            </div>
        </div>

        <div className='KnowDetails__main-bottom-container-card'>
            <div className="KnowDetails__main-bottom-container-card-image">
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg' alt="logo" className='KnowDetails__main-bottom-container-card-image--img' />

                <p className="KnowDetails__main-bottom-container-card--heading">
                1000+
                </p>

                <p className="KnowDetails__main-bottom-container-card--subheading">
                Hours of Live session
                </p>
            </div>
        </div>

        <div className='KnowDetails__main-bottom-container-card'>
            <div className="KnowDetails__main-bottom-container-card-image">
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg' alt="logo" className='KnowDetails__main-bottom-container-card-image--img' />

                <p className="KnowDetails__main-bottom-container-card--heading">
                10000+
                </p>

                <p className="KnowDetails__main-bottom-container-card--subheading">
                Hours of learning
                </p>
            </div>
        </div>

        <div className='KnowDetails__main-bottom-container-card'>
            <div className="KnowDetails__main-bottom-container-card-image">
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg' alt="logo" className='KnowDetails__main-bottom-container-card-image--img' />

                <p className="KnowDetails__main-bottom-container-card--heading">
                700K+
                </p>

                <p className="KnowDetails__main-bottom-container-card--subheading">
                Doubts Solved
                </p>
            </div>
        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowDetails
