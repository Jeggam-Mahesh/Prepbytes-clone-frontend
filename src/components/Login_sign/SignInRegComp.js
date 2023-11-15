import React, { useEffect } from 'react'
import './logsign.css' 
import illustrated from './log_sign_assets/illustrated.webp'
import logo from './log_sign_assets/logo.webp'
import social from './log_sign_assets/social.webp'
import learning from './log_sign_assets/learning.webp'
import college from './log_sign_assets/college.webp'
import student from './log_sign_assets/students.webp'
// import { useState } from 'react'
// import Register from './Register'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import Login from './Login'
import Register from './Register'
import { setFlag } from '../../app/Flagslice'; // Import the action
import Footer from '../Footer/Footer'
// import { use } from '../../../../prepbytes_server/Router/routing'
function Sign_in_regComp() {
   const dispatch=useDispatch()
   // const [flag,setFlag]=useState(0)
   const flag = useSelector(state => state.flag);
  
   useEffect(()=>{
      console.log("useeffect");
      if(flag){
         document.getElementById('login').style.borderBottom="2px solid #4b8ce8"
         document.getElementById('signup').style.borderBottom="none"
      }
      else if(flag===0){
         document.getElementById('signup').style.borderBottom="2px solid #4b8ce8"
         document.getElementById('login').style.borderBottom="none"
      }
   },[flag])

   const setFlagValue = (value) => {
      dispatch(setFlag(value)); // Dispatch the action with the desired value
  };
   const toggle=()=>{
     
      setFlagValue(0);

   }
   const toggle2=()=>{
    
      setFlagValue(1);
   }
    return (
        <>
         <div className='main-container'>
<div className='left-container'>
    <div>
    <img className='illustrated' src={illustrated} alt='illustrated'/>
    </div>
<div className='sign-in-acheivements'>
     <img className='logo logo-position' src={logo} alt='logo'/>
     <div className='inner-acheivements'>
     <img className='logo' src={student} alt='not'/>
     <div>
        <p>10K+</p>
        <p>Students Enrolled</p>
     </div>
     </div>
     <div className='inner-acheivements'>
     <img className='logo' src={college} alt='not'/>
     <div>
        <p>1000+</p>
        <p>Reach in Colleges</p>
     </div>
     </div>
     <div className='inner-acheivements'>
     <img className='logo' src={learning} alt='not'/>
     <div>
        <p>10K+</p>
        <p>Hours of Learning</p>
     </div>
     </div>
     <div className='inner-acheivements'>
     <img className='logo' src={social} alt='not'/>
     <div>
        <p>150K+</p>
        <p>Social Community</p>
     </div>
     </div>
</div>
</div>
<div className='right-container'>
<div className='right-inner'> 

   <Link to='/register' id='signup' onClick={toggle}>Sign up</Link>
   <Link to='/login' id='login' onClick={toggle2}>login</Link> </div>
{/* <Register/> */}
{
   flag?<Login/>:<Register/>
}

</div>
        </div>
        <Footer/>
        </>
    )
}

export default Sign_in_regComp
