import React from 'react'
import realtime from './E_assets/realtime.svg'
import nascom from './E_assets/nasscom-certificate-full-satck-mern.png'
import deploy from './E_assets/deploy.svg'
import experience from './E_assets/experience.svg'
import './fullstackCSS/stackcertification.css'
function StackCertification() {
    return (
        <>
        <div className='certification-main'>
            <div className='certify-left'>
                <h2 className='hedding'>Get a real time project</h2>
                <div className='certify-left-inner'><img src={realtime} alt='not'/> <b className='certify-text'>Get a real time project</b> </div>
                <div className='certify-left-inner'><img src={experience} alt='not'/> <b className='certify-text'>Experience agile methodology & Work with industry experts</b> </div>
                <div className='certify-left-inner'><img src={deploy} alt='not'/> <b className='certify-text'>Deploy your project to Production</b> </div>
            </div>
          <div className='certify-right'>
            <p style={{fontSize:"30px", fontWeight:"bold"}}>Certification</p>
            <p style={{color:"white", }}>Joint Co-Branded Participation Certificate & Partner Completion Certificate</p>
            <img className='certifyImg' src={nascom} alt='not '/>
          </div>
        </div>
        </>
    )
}

export default StackCertification
