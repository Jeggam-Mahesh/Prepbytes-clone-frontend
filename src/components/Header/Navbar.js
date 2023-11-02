import React from 'react'
import './Nav.css'
import logo from '../../assets/logoPrepBytes.svg'
import downarrow from '../../assets/grey-down-arrow.png'
import hamberg from '../../assets/hamberger.png'
import close from '../../assets/closeIcon.png'
import { Link } from 'react-router-dom'
function Navbar() {
    const handleMenu=()=>{
        document.getElementById('hamberger').style.display="none"
        document.getElementById('close').style.display='block'
        document.getElementById('menu-dropdown').style.display='block'
    }
    const handeClose=()=>{
        document.getElementById('hamberger').style.display="block"
        document.getElementById('close').style.display='none'
        document.getElementById('menu-dropdown').style.display='none'
    }
    return (
        <>
        <div className='nav-container'>
            <div className='prep-logo'><Link to='/'><img src={logo} alt='not'/></Link></div>
            <div className='nav-body'>
                <div className='log-sign-container'>
                <button className='log-sign'>Login</button>
                <button className='log-sign sign'>sign up</button>
                </div>
                <ul className='nav-links'>
             <li>Study Material
                <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
                <div className='dropdown'>
                <li><Link to='/mocktest'>Mock Test</Link></li>
                <li> <Link to='/vediotutorial'>Vedio Tutorials</Link> </li>
                </div>
                </li>
             <li>Courses and Programs
                <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
                <div className='dropdown'>
                <li><Link to='/masterprogram'>Master Competitive Programming</Link> </li>
                <li><Link to='/fullstack'>Full Stack Program </Link> </li>
                </div>
                </li>
             <li> <Link to='/elevation'>Elevation Academy</Link> 
            
             </li>
             <li>Project 
             <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
             <div className='dropdown'>
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Mongo db</li>

                </div>
             </li>
                </ul>
            </div>
            <div className='hamberger-div'>
                <img onClick={handleMenu} id='hamberger' src={ hamberg} alt='not'/>
                <img onClick={handeClose} src={close} alt='not' id='close' />
            </div>
            <div id='menu-dropdown'>
            <li><Link to='/mocktest'>Mock Test</Link></li>
                <li> <Link to='/vediotutorial'>Vedio Tutorials</Link> </li>
                <li><Link to='/masterprogram'>Master Competitive Programming</Link> </li>
                <li><Link to='/fullstack'>Full Stack Program </Link> </li>
                <li><Link to='/elevation'>Elevation Academy</Link> </li>
                <li>Project</li>
                <li >
                    <Link style={{color:"rgb(255, 129, 0)"}} >login</Link>
                <Link style={{color:"rgb(255, 129, 0)"}} >/sign up</Link> </li>
            </div>
        </div>
        </>
    )
}

export default Navbar
