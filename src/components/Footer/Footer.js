import React from 'react'
import './footerStyles.css'
import insta from '../../assets/Social media/instagram.png'
import facebok from '../../assets/Social media/facebook-icon.png'
import youtube from '../../assets/Social media/youtube.svg'
import linkedin from '../../assets/Social media/linkedin.png'
import cantact from '../../assets/Social media/contact.svg'
import mail from '../../assets/Social media/mail us.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
        <div style={{backgroundColor:"#d9f5f9 "}}>
        <div className='footer-box'>
            <div className='follow-contact'>
                <div style={{backgroundColor:"#d9f5f9"}}>
                    <p className='footer-heaings'>FOLLOW US</p>
                    <div className='social-div' style={{marginTop:"30px"}}>
                    <a href="www.facebook.com"><img className='social-img' src={facebok} alt='not'/></a>
                    <a href="www.facebook.com"><img className='social-img' src={insta} alt='not'/></a>
                    <a href="www.facebook.com"><img className='social-img' src={linkedin} alt='not'/></a>
                    <a href="www.facebook.com"><img className='social-img' src={youtube} alt='not'/></a>
                    </div>
                   
                </div>
                <div>
                   <p className='footer-heaings'>CONTACT US</p> 
                   <div><img  className='mail-contact-img' src={cantact} alt='not'/> +91-9347888888</div>
                  <div> <img className='mail-contact-img' src={mail} alt='not'/>support@prepbytes.com</div>
                </div>
            </div>
            <div className='latest-popular-article'>
            <div>
                    <p className='footer-heaings'>LATEST ARTICLES</p>
                    <p> Selenium Interview Questions and Answers</p>
            <p>  fdisk Command in Linux with Examples</p>
         <p>Unix Interview Questions</p>
        <p>What is Accenture</p>
      <p>What is Infosys</p>
  
                </div>
                <div>
                   <p className='footer-heaings' >POPULAR ARTICLES</p>
                    <p> OOPS Interview Questions</p>
                    <p>Spring Boot Interview Questions</p>
                    <p>Data Structure Interview Questions</p>
                    <p>SAP ABAP Interview Questions</p>
                    <p>Head Command Linux Examples</p>
                </div>
            </div>
            <div className='quicklinks'>
                <p className='footer-heaings'>QUICK LINKS</p>
                <div>
                <li> <Link to='/vediotutorial'>Vedio Tutorials</Link> </li>
                <li><Link to='/masterprogram'>Master Competitive Programming</Link> </li>
                <li><Link to='/fullstack'>Full Stack Program </Link> </li>
                <li><Link to='/elevation'>Elevation Academy</Link> </li>
                    <li><Link>Project</Link> </li>
                </div>
            </div>
        </div>
        <div className='footer-down'>
            <hr/>
            <div className='copyright'>
            <Link>Copyright  ©2023</Link>
            <div className='policy'>
                <Link>Privacy Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Terms of Use</Link>
            </div>
            </div>
           
            
        </div>
        </div>
        </>
    )
}

export default Footer
