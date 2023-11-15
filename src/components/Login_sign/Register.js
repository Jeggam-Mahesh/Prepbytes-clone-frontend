import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFlag } from '../../app/Flagslice'
import Isloading from '../NavComponents/Loading/Isloading'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const userData={
        name:'',
        mobile:'',
        email:'',
        password:'',
        college:"",
        passingYear:0

    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
    const handleRegister= async(e)=>{
        e.preventDefault(e);
        console.log('user data',userData)
        const data= await axios.post('https://mahesh-prepbytes-server.onrender.com/register',userData)
        .then((res)=>{
            // alert(res.data.msg)
            // toast.success("successfully registered")
            if(!res.data.msg){
                return <Isloading/>
            }
            else{
                dispatch(setFlag(1));
                return navigate('/login')
            }
           
        }).catch((err)=>console.log("error",err))
        // alert(data)
        console.log("data",data);
    }
    return ( 
        <>
        {/* <ToastContainer/> */}
       <div>

        <p className='heading'>Create your new account</p>
        <div className='form-container'>
           
            <input type="text" name='name' placeholder=" name"  onChange={handleChange}/>
            <input type="text" name="email" placeholder=" email" onChange={handleChange}/>
            <input type="number" name="mobile" placeholder=" phone no" onChange={handleChange}/>
            <input type="password" name="password" placeholder="password" onChange={handleChange}/>
           
            {/* <label>Passing Year</label> */}
            <div className='clg-pasyear'>
            <input className='college' type="text" name="college" placeholder="college" onChange={handleChange}/>
            <select style={{color:"grey"}} name="passingYear" placeholder='Passing Year'  onChange={handleChange}>
                  <option  value="">Passing Year</option>
                  <option value="2028">2028</option>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1195">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>

                </select>
            </div>  
        </div>
        <div >
        <input className='termsconditon' type='checkbox' name="terms"/>
        <label className='termsconditon' >I Agree to the Terms and Conditions</label>
       
        </div>
       <button style={{margin:"10px"}} onClick={handleRegister} className='submit'>Sign Up</button>
       </div>
        </>
    )
}

export default Register

