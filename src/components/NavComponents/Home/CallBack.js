import React from 'react'
import callback from './homeassets/call_back.svg'
import './Callback.css'
function CallBack() {
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
    return (
        <>
         <div>
              
            </div>
        <div className='callback-main'>
           
            <div className='left-callback'>
            <h1>Talk to our experts</h1>
<p className='cPara'>Still Confused how PrepBytes can help you achieve your dream? Talk to our experts</p>
           <img className='cImg' src={callback} alt='not'/>
            </div>
            <div className='callback-form'>
            <input type="text" name='name' placeholder=" name"  onChange={handleChange}/>
            <input type="text" name="email" placeholder=" email" onChange={handleChange}/>
            <input type="number" name="mobile" placeholder=" phone no" onChange={handleChange}/>
            <input className='query' type="text" name="query" placeholder=" query" onChange={handleChange}/>
            <button className='callback-btn'>Request Call Back</button>
            </div>
        </div>
        </>
    )
}

export default CallBack
