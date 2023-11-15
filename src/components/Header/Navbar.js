import React, { useEffect, useState } from 'react'
import './Nav.css'
import '.././../Temp/Theader.css'
import logo from '../../assets/logoPrepBytes.svg'
import downarrow from '../../assets/grey-down-arrow.png'
import hamberg from '../../assets/hamberger.png'
import close from '../../assets/closeIcon.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setFlag } from '../../app/Flagslice'; // Import the action
import { useSelector } from 'react-redux';
import { clearUsername} from '../../app/Username'; // Import the clearUsername action
import dashboard from '../../assets/loginsign/mydashboard.svg'
import axios from 'axios'
import profilepic from '../../assets/loginsign/profilepic.svg'
function Navbar() {
    const username = useSelector(state => state.name);
    const [temp,setTemp]=useState('');
    const dispatch = useDispatch();
   
    useEffect(()=>{
const username=localStorage.getItem("name");
if (username){
    setTemp(username.slice(0,1))
    
    // dispatch(setUsername(name))
}
    },[dispatch,username])
   
    
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
        }
       
    else{
        cnt++
        document.getElementById('dashboard-container').style.display="none"
    }
  
    }
    return (
        <>
        <div className='nav-container'>
            
            <div className='nav-body'>
                {
                    username?<div></div>: <div className='log-sign-container'>
                    <Link to='/login' onClick={login}><button className='log-sign'>Login</button></Link>
                    <Link to='/register' onClick={signUp}> <button className='log-sign sign'>sign up</button></Link>
                   
                    </div>
                }
               
                {/* <div className='nav-links'>
                <li>Study Material
                <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
                <div className='dropdown'>
                <li><Link to='/mocktest'>Mock Test </Link></li>
                <li><Link to='/vediotutorial'>Vedio Tutorials</Link> </li>
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
                </div> */}
                <div className='Hlinks'>
        <li>Study Material 
        <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
            <div className='headerDropdown'>
               <p> <Link to='/mocktest'>Mock Test</Link></p>
                <p><Link to='/vediotutorial'>Vedios</Link></p>
            </div>
        </li>
        <li>Course Program
        <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
        <div className='headerDropdown'>
               <p> <Link to='/masterprogram'>Master  Competitive</Link></p>
                <p><Link to='/fullstack'>Full stack</Link></p>
            </div>
        </li>
        <li><Link>Elevation</Link> 
        <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
        </li>
        <li>Project 
        <img src={downarrow} alt='not' style={{marginBottom:"-4px"}} width='18px'/>
            
            <div className='headerDropdown'>
               <p> <Link to='/project'>HTML</Link></p>
                <p><Link to='/project'>CSS</Link></p>
                <p><Link to='/project' script/>JavaScript</p>
                <p><Link to='/project' script/>ReacScript</p>
                <p><Link to='/project' script/>node Project Script</p>
            </div>
           
        </li>
       </div>
            </div>
            <div className='hamberger-div'>
                <img onClick={handleMenu} id='hamberger' src={ hamberg} alt='not'/>
                <img onClick={handeClose} src={close} alt='not' id='close' />
            </div>
            {/*  */}
            <div>
                {
                    username?  <div onClick={handleDashboard}>
                    <b id='username'>{temp}</b><b id='name'> {username} </b></div>  :<div></div>
                }
               
           
            <div id='dashboard-container' >
                <div className='dashboard'>
              <img src={dashboard} alt="dashboard"/><Link to ='/dashboard'><p>My Dashboard</p>
              </Link>  
                </div>
                <p className='logout' onClick={handleLogout}>Logout</p>
            </div>
            </div>
            <div id='menu-dropdown'>
                <div className='mob-dash-container'>
                    <img className='profilepic' src={profilepic} alt='profilepic'/><b>Hi mahesh</b>
                    <div id='dashboard-container2' >
                <div className='dashboard-mob'>
              <img src={dashboard} alt="dashboard"/><Link to ='/dashboard'><p>My Dashboard</p>
              </Link>  
                </div>
             
            </div>
                </div>
            <li><Link to='/mocktest'>Mock Test</Link></li>
                <li> <Link to='/vediotutorial'>Vedio Tutorials</Link> </li>
                <li><Link to='/masterprogram'>Master Competitive Programming</Link></li>
                <li><Link to='/fullstack'>Full Stack Program </Link> </li>
                <li><Link to='/elevation'>Elevation Academy</Link> </li>
                <li>Project</li>
                <li >
                    <Link style={{color:"rgb(255, 129, 0)"}} to='/login'>login</Link>
                <Link style={{color:"rgb(255, 129, 0)"}} to='/register' >/sign up</Link> </li>
                <p className='logout' onClick={handleLogout}>Logout</p>
            </div>
        </div>
        </>
    )
}

export default Navbar
