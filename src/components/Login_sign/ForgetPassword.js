import React from 'react'
import forgot from '../../assets/forgot-pass.17bc69b782a736d6ad8a5eaa8a7865f3.svg'
import axios from 'axios'
import mailsent from '../../assets/loginsign/mailsent.svg'
import { setFlag } from '../../app/Flagslice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function ForgetPassword() {
    const dispatch=useDispatch()
    const [email, setEmail] = React.useState('')
    let userdata={
        email:""
    }
    const handleChange = (e) => {
        e.preventDefault();
        userdata[e.target.name]=e.target.value;
    };
    const setFlagValue = (value) => {
        dispatch(setFlag(value)); // Dispatch the action with the desired value
    };
const createaccount=()=>{
    setFlagValue(0)
}

const submit=()=>{
    
axios.post('https://mahesh-prepbytes-server.onrender.com/forgotpassword',userdata)
.then((res)=>{
    console.log("response",res.data.message)
    alert(res.data.message)
    return setEmail(res.data)
}).catch((err)=>console.log("error",err))
console.log('userdata',userdata)
}

    return (
        <>
     
        { email? <div>
            <img src={mailsent} alt='not'/>
            <p style={{color:"#4b8ce8"}}>Mail Sent</p>
            <p className='mailsent-text'>If provided email is a registered email ID on PrepBytes, you will receive an email with further instructions on how to 
                reset your password. In case you didn't receive the email,
                 you need to create a new account
                 <Link style={{color:"#4b8ce8"}} onClick={createaccount} to='/register'>here</Link> 
              <p>Didn't receive the email yet?</p></p>
              <button className='resend-link' onClick={submit}>Resend Link</button>
              <p><Link style={{color:"#4b8ce8", textDecoration:"underline"}} to='/login'>Return to Sign in</Link></p>
              </div>           
              :<div>
              <div>
            <img src={forgot} alt='not'/>
            <p>Forgot Your Password?</p>
            <p>Enter your email below and we will send you an email with instruction to reset your password</p>
       <input className='forgot-email-input' type='email' name='email' required onChange={handleChange} placeholder='email Adress'/>
        </div>
       
      <button className='fg-btn' onClick={submit}>
        send Reset Link
        </button>
                </div>}
        </>
    )
}

export default ForgetPassword
