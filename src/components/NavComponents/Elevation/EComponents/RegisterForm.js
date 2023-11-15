import React, { useEffect } from 'react'
import "../register-form.css"
import Register from "../Assets/register.svg"
import axios from 'axios'
// import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
const RegisterForm = ({setShow}) => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
    },[navigate])
    
    let email=localStorage.getItem('email')
    
    let item={
        email:email,
        degree:'',
        branch:'',
    }
    // const [degree,setDegree]=useState(item)
    
    const handleChange=(e)=>{
        e.preventDefault(e)
        console.log("change",e.target.value);
        item[e.target.name]=e.target.value
        console.log('object===========',item)
      
      }
  
    const handlesubmit=()=>{
        let email=localStorage.getItem('email')
        item.email=email;
        console.log("item=== registration======",item);
        axios.post(`https://mahesh-prepbytes-server.onrender.com/applynow`,item)
    }
    // const [selected, setSelected] = useState(null)
    return (
        <div className='RegisterModal__container'>
            <div className="RegisterModalActive">
                <img src={Register} alt="register img" />
                <div className="RegisterModal-right">
                    <div className="RegisterModal__top">
                        <p className="RegisterModal__top-text-active">
                            Take a step towards your dream job
                        </p>
                        <button className='close-form' onClick={() => setShow(false)} >X</button>
                    </div>

                    <form className="RegisterModal-form">
                        <div className="RegisterModal-form-main-active">
                            <div className="RegisterModal-form-main--right">
                                <div className="RegisterModal__form-container">
                                    <label>Highest Degree *</label>
                                    <select  onChange={handleChange} name="degree" id="" className="RegisterModal__form-select">
                                      <option value=""></option>
                                        <option value="B.Tech / BE">B.Tech / BE</option>
                                        <option value="BCA">BCA</option>
                                        <option value="BSc">BSc</option>
                                        <option value="BCom">BCom</option>
                                        <option value="BA">BA</option>
                                        <option value="B.Pharma">B.Pharma</option>
                                        <option value="B.Arch">B.Arch</option>
                                        <option value="BBA">BBA</option>
                                        <option value="Diploma">Diploma</option>
                                    </select>
                                </div>

                                <div className="RegisterModal__form-container">
                                    <label>Branch</label>
                                    <select name="branch" id="" className="RegisterModal__form-select" onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="CSE/ IT">CSE/ IT</option>
                                        <option value="Electrical/Electronics">Electrical/Electronics</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div className="RegisterModal__form-working-professional">
                                    <label>Are you a Working Professional? *</label>
                                    <div className="RegisterModal__form-button">
                                        <div className={`RegisterModal__form-working-professional-button  "RegisterModal__form-working-professional-selected-button" : ""}`} >Yes</div>
                                        <div className={`RegisterModal__form-working-professional-button-no  "RegisterModal__form-working-professional-selected-button-no" : ""}` } >No</div>
                                    </div>
                                </div>

                                <div className="RegisterModal-form-accept-terms-and-conditions-container">
                                    <input type="checkbox" name="terms-and-conditions" className='RegisterModal-form-accept-terms-and-conditions-checkbox' defaultChecked />
                                    <div className="RegisterModal-form-accept-terms-and-conditions-label">
                                        I agree to the
                                        <a href="https://www.prepbytes.com/terms-and-conditions" className="RegisterModal-form-accept-terms-and-conditions-term">
                                            terms and conditions
                                        </a>
                                        .
                                    </div>
                                </div>

                                <div className="RegisterModal--button">
                                    <button className='RegisterModal--button-btn-active' onClick={handlesubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
