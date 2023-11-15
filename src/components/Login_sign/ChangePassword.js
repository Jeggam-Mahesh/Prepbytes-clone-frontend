import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom';
import resetpass from '../../assets/loginsign/ResetPassword.svg'
import HeaderNav from '../../Temp/HeaderNav'
function ChangePassword() {
    const location = useLocation();
    const userid = new URLSearchParams(location.search).get("userid");
    const passitem={
        userid:userid,
        newpass:'',
        confirmpass:'',
    }
    const handleChange=(e)=>{
        e.preventDefault()
        passitem[e.target.name]=e.target.value
    }
  console.log("user id================",userid);

    const submitpass=()=>{
        axios.post(`https://mahesh-prepbytes-server.onrender.com/changepassword`, passitem)
        .then(response => {
            console.log(response.data);
            // Handle success response
        })
        .catch(error => {
            console.error(error);
            // Handle error
        });
    }
    return (
        <>
        <HeaderNav/>
        <div className='create-newpassword'>
<img className='createPass' src={resetpass} alt='not'/>
<h1>Create New Password</h1>
<p className='createpara'>Your new password must be different from previously used passwords</p>
<input className='c-input' type='text' name="newpass" placeholder='new password' onChange={handleChange}/>
 <input  className='c-input' type='text' name='confirmpass' placeholder='confirm password' onChange={handleChange}/>
 <button onClick={submitpass} className='resend-link'>Create New Password</button>
        </div>
       
       
       
        </>
    )
}

export default ChangePassword
