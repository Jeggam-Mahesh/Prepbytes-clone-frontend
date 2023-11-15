// Navbar.js

import React from 'react';
import './Navbar.css'; 
import {Link} from 'react-router-dom'
import logo from '../assets/logoPrepBytes.svg'
import  { useEffect, useState } from 'react'
// import downarrow from '../assets/grey-down-arrow.png'
import hamberg from '../assets/hamberger.png'
import close from '../assets/closeIcon.png'
import { useDispatch } from 'react-redux';
import { setFlag } from '../app/Flagslice'; // Import the action
import { useSelector } from 'react-redux';
import { clearUsername} from '../app/Username'; // Import the clearUsername action
import dashboard from '../assets/loginsign/mydashboard.svg'
import axios from 'axios'
import profilepic from '../assets/loginsign/profilepic.svg'
const Navbar = () => {
    let html="html"
    let css="css"
    let javascript="javascript"
    let react='react'
    let node='node'
    let mongodb="mongodb"
    const username = useSelector(state => state.name);
    const [temp,setTemp]=useState('');
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(()=>{
const username=localStorage.getItem("name");
if (username){
    setTemp(username.slice(0,1))
    
    // dispatch(setUsername(name))
}
window.addEventListener('resize', handleResize);
return () => {
  window.removeEventListener('resize', handleResize);
};
    },[dispatch,username])

    
    const handleMenu=()=>{
        document.getElementById('hamberger').style.display="none"
        document.getElementById('close').style.display='block'
        document.getElementById('menu-dropdown').style.display='block'
        if(windowWidth>500){
          console.log("window",windowWidth);
          document.getElementById('hamberger').style.display="block"
          document.getElementById('close').style.display='none'
          document.getElementById('menu-dropdown').style.display='none'
        }
    }
    
    const handeClose=()=>{
        document.getElementById('hamberger').style.display="block"
        document.getElementById('close').style.display='none'
        document.getElementById('menu-dropdown').style.display='none'
    } 
    const setFlagValue = (value) => {
        dispatch(setFlag(value)); // Dispatch the action with the desired value
    };

    const login = () => {
        setFlagValue(1); // Set flag value to 1 on login
       
    };

    const signUp = () => {
        setFlagValue(0); // Set flag value to 0 on sign up
       
    };
    const handleLogout = async () => {
        // Logic for logging out: clear the username from the store
        try{
            dispatch(clearUsername());
            const email=localStorage.getItem("email")
           
        await axios.post(`https://mahesh-prepbytes-server.onrender.com/logoutuser/${email}`)
        localStorage.clear();
        document.getElementById('dashboard-container').style.display="none"
        document.getElementById('username').style.display="none"
        let log_sign=document.getElementsByClassName('log-sign-container')[0]
        log_sign.style.display="block"
        
        }
       catch(err){
        console.log("error",err);
       }
        // Additional logic for logging out if needed
    };
    let cnt=0;
    const handleDashboard=()=>{
        if(cnt%2===0){
            cnt++;
            document.getElementById('dashboard-container').style.display="block"
            setTimeout(()=>{ cnt++
             
              return document.getElementById('dashboard-container').style.display="none" },2000)
        }
       
    else{
        cnt++
        document.getElementById('dashboard-container').style.display="none"
    }
  
    }
   
  return (
    <>
    <div className='nav-main'>
    <div className='prep-logo'><Link to='/'><img src={logo} alt='not'/></Link></div>
    <div className='nav-right'>
    {
                    username?<div></div>: <div className='log-sign-container'>
                    <Link to='/login' onClick={login}><button className='log-sign'>Login</button></Link>
                    <Link to='/register' onClick={signUp}> <button className='log-sign sign'>sign up</button></Link>
                   
                    </div>
                }
                  <nav>
      <div className="dropdown">
        <button className="dropbtn">Study Materials</button>
        <div className="dropdown-content">
          <Link to="/mocktest">Mock Tests</Link>
          <Link to="/vediotutorial">Video Tutorials</Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Course and  Programs</button>
        <div className="dropdown-content">
        <Link to="/masterprogram">Master Competitive Programming</Link>
          <Link to="/fullstack">FullStack Program</Link>
        </div>
      </div>

     
      <Link to="/elevation">Elevation Academy</Link>

      <div className="dropdown">
        <button className="dropbtn">Projects</button>
        <div className="dropdown-content">
        <Link to="/project" state={{index:html}}>html</Link>
          <Link to="/project"state={{index:css}}>CSS</Link>
          <Link to="/project" state={{index:javascript}}>Java Script</Link>
          <Link to="/project" state={{index:react}}>React JS</Link>
          <Link to="/project" state={{index:node}}>Node JS</Link>
          <Link to="/project" state={{index:mongodb}}>Mongo DB</Link>
        </div>
      </div>
     
      {
                    username?  <div onClick={handleDashboard}>
                    <b id='username'>{temp}</b><b id='name'>Hi {username} </b></div>  :<div></div>
                }
              
    </nav>
    <div className='hamberger-div'>
                <img onClick={handleMenu} id='hamberger' src={ hamberg} alt='not'/>
                <img onClick={handeClose} src={close} alt='not' id='close' />
            </div>
    </div>
  
    </div>
    <div id='dashboard-container' >
                <div className='dashboard'>
              <img src={dashboard} alt="dashboard"/><Link to ='/dashboard' onClick={handleDashboard}><p>My Dashboard</p>
              </Link>  
                </div>
                <p className='logout' onClick={handleLogout}>Logout</p>
            </div>

            <div id='menu-dropdown'>
              {
                username ? <div className='mob-dash-container'>
                <img className='profilepic' src={profilepic} alt='profilepic'/><b id='name'>Hi {username}</b>
                <div id='dashboard-container2' >
            <div className='dashboard-mob'>
          <img src={dashboard} alt="dashboard"/><Link to ='/dashboard'><p>My Dashboard</p>
          </Link>  
            </div>
         
        </div>
            </div> :<div></div>
              }
               
            <li><Link to='/mocktest' onClick={handeClose}>Mock Test</Link></li>
                <li> <Link to='/vediotutorial' onClick={handeClose}>Vedio Tutorials</Link> </li>
                <li><Link to='/masterprogram' onClick={handeClose}>Master Competitive Programming</Link></li>
                <li><Link to='/fullstack' onClick={handeClose}>Full Stack Program </Link> </li>
                <li><Link to='/elevation' onClick={handeClose}>Elevation Academy</Link> </li>
                <li> <Link to='/project' onClick={handeClose} state={{index:html}}>Project</Link></li>
                {
                  username ?<p className='logout' onClick={handleLogout}  >Logout</p>
                  :
                  <li >
                  <Link style={{color:"rgb(255, 129, 0)"}} to='/login' onClick={handeClose}>login</Link>
              <Link style={{color:"rgb(255, 129, 0)"}} to='/register' onClick={handeClose} >/sign up</Link> </li>
                }
               
                
            </div>
    </>
   
  );
};

export default Navbar;
