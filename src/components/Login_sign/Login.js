
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../app/Username';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const userData={    
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
    const login= async (e)=>{
        e.preventDefault(e);

        try {
             await axios.post('https://mahesh-prepbytes-server.onrender.com/login', userData)
            .then((res)=>{
                console.log("Respone",res);
                // alert(res.data.msg);
                if(res.data.msg!=="user is successfully loged in"){
                    document.getElementById('login_response').innerHTML=res.data.msg
                    return setTimeout(()=>document.getElementById('login_response').innerHTML="",2000)
                }
                const username  = res.data.username; // Assuming the username is sent back in the response
                const token=res.data.token
                const email=res.data.email
                localStorage.setItem("email",email)
                 localStorage.setItem("token",token)
                 localStorage.setItem("name",res.data.username)
                 if(username){
                    let log_sign=document.getElementsByClassName('log-sign-container')[0]
                        log_sign.style.display="none"
                        // document.getElementById('username').style.display="block"
                 }
                 else{
                    let log_sign=document.getElementsByClassName('log-sign-container')[0]
                    log_sign.style.display="block"
                    
                 }
                 dispatch(setUsername(username)); // Store the username in the Redux store
               return  navigate('/');
            })
            // console.log(response.data);
           
        } catch (err) {
            console.log("error", err);
        }
    }
    return (
       <>
      <div>
        <p className='heading'>Sign in to your account</p>
        <p style={{color:"red"}} id="login_response"></p>
        <div className='form-container'>
        <input type="text" name="email" placeholder=" email" required onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" required onChange={handleChange}/>
        <p className='forgot'><Link to='/forgotpassword' state={{index:userData}} style={{color:"#4b8ce8"}}>Forgot your Password?</Link></p>
        <button className='submit' onClick={login}>sign in</button>
        <button className='login-OTP'>Login Via OTP</button>
            </div>
            </div>
            
       </> 
    )
}

export default Login

